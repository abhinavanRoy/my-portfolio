import { useEffect, useRef, useState } from "react";

export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const {
    threshold = 0.2,
    root = null,
    rootMargin = "0px",
    triggerOnce = true,
  } = options;

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);

          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  return [ref, isInView];
};
