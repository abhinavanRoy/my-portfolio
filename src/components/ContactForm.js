/** components */
import Button from "../components/Button";
import Toast from "./Toast";
/** hooks */
import { useContactForm } from "../lib/hooks/useContactForm";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const {
    submitForm,
    isFormSubmitted,
    isFormSubmitting,
    error,
    clearError,
  } = useContactForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isFormSubmitted) {
      setShowSuccess(true);
      setName("");
      setEmail("");
      setMessage("");

      const successTimer = setTimeout(() => {
        setShowSuccess(false);
      }, 2000);

      return () => clearTimeout(successTimer);
    }
  }, [isFormSubmitted]);

  return (
    <>
      {error && <Toast message={error} onClose={clearError} />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm({
            name,
            email,
            message,
          });
        }}
        className="flex flex-col items-center gap-4 py-4"
      >
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-md rounded-md border border-transparent bg-tan p-2 font-google-sans text-lg font-normal text-deep-brown outline-none placeholder:text-deep-brown/60 focus:ring-2 focus:ring-latte dark:border-dark-border dark:bg-dark-surface dark:text-dark-text dark:placeholder:text-dark-muted/70"
          type="text"
          placeholder={t("contact.placeholders.name")}
        />
        <input
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full max-w-md rounded-md border border-transparent bg-tan p-2 font-google-sans text-lg font-normal text-deep-brown outline-none placeholder:text-deep-brown/60 focus:ring-2 focus:ring-latte dark:border-dark-border dark:bg-dark-surface dark:text-dark-text dark:placeholder:text-dark-muted/70"
          type="email"
          placeholder={t("contact.placeholders.email")}
        />
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-32 w-full max-w-md rounded-md border border-transparent bg-tan p-2 font-google-sans text-lg font-normal text-deep-brown outline-none placeholder:text-deep-brown/60 focus:ring-2 focus:ring-latte dark:border-dark-border dark:bg-dark-surface dark:text-dark-text dark:placeholder:text-dark-muted/70"
          placeholder={t("contact.placeholders.message")}
        />
        <Button
          type="submit"
          isLoading={isFormSubmitting}
          isSuccess={showSuccess}
          isDisabled={isFormSubmitting || showSuccess}
          className={"w-32 py-3 text-xl sm:py-2 sm:text-xl"}
          btnName={t("actions.send")}
        />
      </form>
    </>
  );
}
