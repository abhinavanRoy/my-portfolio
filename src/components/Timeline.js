import CONSTANTS from "../lib/constants/Constants";
import TimelineEvent from "./TimelineEvent";

export default function Timeline({ category = null }) {
  const { timelineEvents } = CONSTANTS;
  const filteredEvents = category
    ? timelineEvents.filter((event) => event.category === category)
    : timelineEvents;

  return (
    <div className="relative w-full">
      <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/20 md:left-1/2 md:-translate-x-1/2" />

      <div className="flex flex-col gap-12">
        {filteredEvents.map((event, index) => (
          <TimelineEvent
            key={event.id}
            event={event}
            align={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}
