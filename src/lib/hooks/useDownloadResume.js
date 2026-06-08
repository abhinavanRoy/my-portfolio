/* Hooks */
import { useState } from "react";

export const useDownloadResume = () => {
    const [isResumeDownloading, setResumeDownloading] = useState(false)

    const downloadResume = async () => {
        try {
            setResumeDownloading(true)

            const response = await fetch("/CV_Abhinavan_Roy.pdf")
            if (!response.ok) {
                throw new Error("Resume file is unavailable right now.")
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
            console.error("Resume download failed", error)
            window.alert("Resume is unavailable right now. Please try again later.")
        } finally {
            setResumeDownloading(false)
        }
    }

    return { downloadResume, isResumeDownloading }
}
