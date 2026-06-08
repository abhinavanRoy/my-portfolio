import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export default function Toast({ message, onClose, duration = 5000 }) {
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(onClose, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 animate-slide-in-right">
      <div
        className="pointer-events-auto flex max-w-sm items-start gap-3 rounded-lg border border-transparent bg-tan px-4 py-3 font-google-sans text-deep-brown shadow-lg dark:border-dark-border dark:bg-dark-surface dark:text-dark-text"
        role="alert"
      >
        <div className="pt-0.5 text-sm font-medium text-red-500">
          {t("contact.toastErrorTitle")}
        </div>
        <p className="flex-1 text-sm font-medium">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="rounded-sm text-deep-brown transition-colors duration-200 ease-in-out hover:text-espresso dark:text-dark-text dark:hover:text-latte"
          aria-label={t("actions.closeNotification")}
        >
          <AiOutlineClose size={18} />
        </button>
      </div>
    </div>
  );
}
