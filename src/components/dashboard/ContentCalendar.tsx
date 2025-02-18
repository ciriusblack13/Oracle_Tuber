import { Card } from "@/components/ui/card";

interface Event {
  id: string;
  title: string;
  time: string;
  type: "gym" | "content";
}

interface ContentCalendarProps {
  events?: Event[];
}

export default function ContentCalendar({
  events = [
    { id: "1", title: "Record Gym Routine", time: "10:00", type: "gym" },
    { id: "2", title: "Content Planning", time: "11:00", type: "content" },
  ],
}: ContentCalendarProps) {
  const hours = Array.from({ length: 12 }, (_, i) => i + 8); // 8:00 to 19:00
  const days = ["L", "M", "M", "G", "V"];

  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4">Weekly Schedule</h2>

      <div className="grid grid-cols-[auto_repeat(5,1fr)] gap-2">
        {/* Time column */}
        <div className="space-y-4">
          <div className="h-8"></div> {/* Header spacer */}
          {hours.map((hour) => (
            <div key={hour} className="h-16 text-sm text-muted-foreground">
              {`${hour}:00`}
            </div>
          ))}
        </div>

        {/* Days columns */}
        {days.map((day, i) => (
          <div key={day} className="space-y-4">
            <div className="h-8 text-center font-medium">{day}</div>
            {hours.map((hour) => {
              const event = events.find(
                (e) => e.time === `${hour}:00` && i === days.indexOf(day),
              );

              return (
                <div
                  key={hour}
                  className={`h-16 border rounded-md p-1 text-xs ${
                    event
                      ? event.type === "gym"
                        ? "bg-blue-100 border-blue-200"
                        : "bg-orange-100 border-orange-200"
                      : "border-dashed"
                  }`}
                >
                  {event?.title}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </Card>
  );
}
