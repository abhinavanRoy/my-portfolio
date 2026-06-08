import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Toast({ message, onClose, duration = 5000 }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 animate-slide-in-right">
      <div
        className="pointer-events-auto flex max-w-sm items-start gap-3 rounded-lg bg-white px-4 py-3 font-google-sans text-black shadow-lg"
        role="alert"
      >
        <div className="pt-0.5 text-sm font-medium text-red-500">Error</div>
        <p className="flex-1 text-sm font-medium">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="rounded-sm text-black transition-colors duration-200 ease-in-out hover:text-slate-600"
          aria-label="Close notification"
        >
          <AiOutlineClose size={18} />
        </button>
      </div>
    </div>
  );
}
