/* Utils */
import { cn } from "../lib/utils";

export default function Button({
  onClick,
  type = "button",
  isDisabled = false,
  isLoading = false,
  isSuccess = false,
  btnName,
  icon = null,
  className,
  ...rest
}) {
  const isInactive = isDisabled || isLoading || isSuccess;
  const shouldDimButton = isDisabled || isLoading;

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isInactive}
      aria-busy={isLoading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md border-0 bg-white px-3 py-1 font-google-sans font-medium text-black shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-200",
        shouldDimButton &&
          "cursor-not-allowed opacity-80 shadow-none hover:translate-y-0 hover:bg-white",
        isSuccess &&
          "cursor-not-allowed shadow-none hover:translate-y-0 hover:bg-white",
        className
      )}
      {...rest}
    >
      {isLoading && (
        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {isSuccess && (
        <svg
          className="h-5 w-5 animate-tick-pop text-emerald-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      )}
      <span>{isLoading ? "Sending..." : isSuccess ? "Sent!" : btnName}</span>
      {!isLoading && !isSuccess && icon}
    </button>
  );
}
