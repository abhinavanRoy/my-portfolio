/* Hooks */
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useDownloadResume = () => {
    const { t } = useTranslation();
    const [isResumeDownloading, setResumeDownloading] = useState(false)

    const downloadResume = async () => {
        try {
            setResumeDownloading(true)

            const response = await fetch("/CV_Abhinavan_Roy.pdf")
            if (!response.ok) {
                throw new Error(t("contact.errors.resumeFileUnavailable"))
            }
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.href = url
            a.download = "Abhinavan_Roy_Resume.pdf"
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
            window.URL.revokeObjectURL(url)

        } catch (error) {
            console.error(t("contact.errors.resumeDownloadFailed"), error)
            window.alert(t("contact.errors.resumeUnavailable"))
        } finally {
            setResumeDownloading(false)
        }
    }

    return { downloadResume, isResumeDownloading }
}
