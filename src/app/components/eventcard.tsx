import Image from "next/image";
import { Bookmark } from "lucide-react";

interface EventCardProps {
  image: string;
  title: string;
  location: string;
  date: string;
  bookmarked: boolean;
}

export default function EventCard({
  image,
  title,
  location,
  date,
  bookmarked,
}: EventCardProps) {
  return (
    <div className="flex flex-col sm:flex-row bg-white shadow rounded-lg w-full sm:w-1/2 lg:w-1/3 relative overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1 relative">
        {/* Bookmark Icon */}
        <button className="absolute top-2 right-2 bg-white rounded-full shadow z-10 p-1">
          <Bookmark
            className={`h-6 w-6 ${
              bookmarked ? "text-purple-500" : "text-gray-400"
            }`}
            fill={bookmarked ? "currentColor" : "none"}
          />
        </button>
        <h4 className="font-semibold text-gray-800 text-lg">{title}</h4>
        <p className="text-gray-500 text-sm flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 20l-5.447-2.724A2 2 0 013 15.382V8.618a2 2 0 011.553-1.894L9 4m0 16l5.447 2.724A2 2 0 0021 20m-6.553-2.894L15 4m-6 16V4"
            />
          </svg>
          {location}
        </p>
        <p className="text-gray-500 text-sm flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7h8M8 11h8m-8 4h8m-4-9V3m0 0l3 3m-3-3l-3 3"
            />
          </svg>
          {date}
        </p>
      </div>
    </div>
  );
}

export function EventGrid({ events }: { events: EventCardProps[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  );
}
