/** components */
import Button from "../components/Button";
import Toast from "./Toast";
/** hooks */
import { useContactForm } from "../lib/hooks/useContactForm";
import { useEffect, useState } from "react";
/** utils */
import CONSTANTS from "../lib/constants/Constants";

export default function ContactForm() {
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
        className="flex flex-col py-4 items-center gap-4 "
      >
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-md rounded-md p-2 font-google-sans text-lg font-normal outline-none focus:ring-2 focus:ring-white/70"
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full max-w-md rounded-md p-2 font-google-sans text-lg font-normal outline-none focus:ring-2 focus:ring-white/70"
          type="email"
          placeholder="Email"
        />
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-32 w-full max-w-md rounded-md p-2 font-google-sans text-lg font-normal outline-none focus:ring-2 focus:ring-white/70"
          placeholder="Message"
        />
        <Button
          type="submit"
          isLoading={isFormSubmitting}
          isSuccess={showSuccess}
          isDisabled={isFormSubmitting || showSuccess}
          className={"w-32 py-3 text-xl sm:py-2 sm:text-xl"}
          btnName={CONSTANTS.send}
        />
      </form>
    </>
  );
}
