import { Bookmark } from "lucide-react";

// Define the type for the event object
interface Event {
  date: string;
  month: string;
  title: string;
  location: string;
  bookmarked: boolean;
}

interface MiniEventCardProps {
  event: Event; // Correctly typed object for the event
}

export default function MiniEventCard({ event }: MiniEventCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-white shadow-md rounded-lg">
      {/* Date Section */}
      <div className="text-center text-purple-600 flex-shrink-0">
        <div className="text-sm font-semibold">{event.month}</div>
        <div className="text-lg font-bold">{event.date}</div>
      </div>

      {/* Event Details */}
      <div className="flex-1">
        <h3 className="text-md font-semibold text-gray-800">{event.title}</h3>
        <p className="text-sm text-gray-600">{event.location}</p>
      </div>

      {/* Bookmark Icon */}
      <button className="text-gray-400 hover:text-purple-500 self-start sm:self-center">
        <Bookmark />
      </button>
    </div>
  );
}
