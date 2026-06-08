import { useInView } from "../lib/hooks/useInView";
import { cn } from "../lib/utils";

export default function TimelineEvent({ event, align = "left" }) {
  const [eventRef, isInView] = useInView({
    threshold: 0.25,
    rootMargin: "0px 0px -40px 0px",
  });

  const animationClass = isInView
    ? align === "left"
      ? "md:animate-fade-in-left animate-fade-in-up"
      : "md:animate-fade-in-right animate-fade-in-up"
    : "opacity-0";

  const cardContent = (
    <div
      className={cn(
        "flex flex-col gap-3 text-left opacity-0",
        animationClass
      )}
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-google-sans text-xl font-semibold text-white md:text-2xl">
          {event.title}
        </h3>
        <p className="font-google-sans text-base font-medium text-white md:text-lg">
          {event.organization}
        </p>
        <p className="font-google-sans text-sm font-medium text-white/90 md:text-base">
          {event.location}
        </p>
        <p className="font-google-sans whitespace-nowrap text-sm font-medium uppercase tracking-[0.18em] text-white/80">
          {event.startDate} - {event.endDate}
        </p>
      </div>
      {event.category !== "education" && (
        <p className="max-w-xl font-google-sans text-base font-light leading-7 text-white/80 md:text-lg">
          {event.description}
        </p>
      )}
    </div>
  );

  return (
    <div ref={eventRef} className="relative">
      <div className="absolute left-0 top-3 h-4 w-4 rounded-full bg-white ring-4 ring-black md:hidden" />

      <div className="pl-10 md:hidden">{cardContent}</div>

      <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-start md:gap-8">
        {align === "left" ? cardContent : <div />}

        <div className="flex justify-center pt-3">
          <div className="h-4 w-4 rounded-full bg-white ring-4 ring-black" />
        </div>

        {align === "right" ? cardContent : <div />}
      </div>
    </div>
  );
}
