import { useEffect, useRef, useState } from "react";
import CONSTANTS from "../constants/Constants";

export const useContactForm = () => {
    const abortControllerRef = useRef(null);
    const isMountedRef = useRef(true);

    const [isFormSubmitting, setFormSubmitting] = useState(false);
    const [isFormSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        isMountedRef.current = true;

        return () => {
            isMountedRef.current = false;

            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, []);

    const clearError = () => {
        setError("");
    };

    const submitForm = async (formData) => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        setFormSubmitted(false);
        setError("");

        if (!CONSTANTS.web3FormsAccessKey) {
            setError(CONSTANTS.missingContactConfig);
            return;
        }

        setFormSubmitting(true);

        const abortController = new AbortController();
        abortControllerRef.current = abortController;

        try {
            const response = await fetch(CONSTANTS.web3FormsEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: CONSTANTS.web3FormsAccessKey,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
                signal: abortController.signal,
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || CONSTANTS.contactFormError);
            }

            if (isMountedRef.current) {
                setFormSubmitted(true);
            }
        } catch (submitError) {
            if (submitError.name !== "AbortError" && isMountedRef.current) {
                setError(submitError.message || CONSTANTS.contactFormError);
            }
        } finally {
            if (isMountedRef.current) {
                setFormSubmitting(false);
            }

            abortControllerRef.current = null;
        }
    };

    return { submitForm, isFormSubmitted, isFormSubmitting, error, clearError };

};