import { useEffect, useState } from "react";

export default function Typewriter({
  texts,
  className = "",
  typeSpeed = 90,
  deleteSpeed = 45,
  pauseMs = 1400,
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts?.length) {
      return undefined;
    }

    const currentText = texts[currentTextIndex] ?? "";
    const hasFinishedTyping = displayText === currentText;

    const timeout = window.setTimeout(() => {
      if (isDeleting) {
        if (!displayText) {
          setIsDeleting(false);
          setCurrentTextIndex((index) => (index + 1) % texts.length);
          return;
        }

        setDisplayText(currentText.slice(0, displayText.length - 1));
        return;
      }

      if (hasFinishedTyping) {
        setIsDeleting(true);
        return;
      }

      setDisplayText(currentText.slice(0, displayText.length + 1));
    }, hasFinishedTyping && !isDeleting ? pauseMs : isDeleting ? deleteSpeed : typeSpeed);

    return () => window.clearTimeout(timeout);
  }, [
    currentTextIndex,
    deleteSpeed,
    displayText,
    isDeleting,
    pauseMs,
    texts,
    typeSpeed,
  ]);

  if (!texts?.length) {
    return null;
  }

  return (
    <span className={className}>
      {displayText}
      <span
        className="ml-1 inline-block animate-cursor-blink text-latte dark:text-tan"
        aria-hidden="true"
      >
        |
      </span>
    </span>
  );
}
