"use client";
import { useState } from "react";
import { Search, ChevronDown, CalendarCog } from "lucide-react";

export default function EventFilters() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="flex items-center gap-4 p-4">
      {/* Filter Buttons */}
      <div className="flex gap-2">
        {["All", "Live", "Upcoming"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded text-sm font-semibold ${
              activeFilter === filter
                ? "bg-gray-200 text-gray-900"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Location Dropdown */}
      <div className="relative">
        <button className="flex items-center font-semibold gap-2 px-4 py-2 bg-gray-100 rounded text-sm text-gray-600 hover:bg-gray-200">
          Location
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Event Date */}
      <div className="relative">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded text-sm text-gray-600 hover:bg-gray-200 font-semibold">
          <CalendarCog />
          <span>Event Date</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Search by event name..."
          className="w-1/2 px-4 py-2 pl-10 bg-gray-100 rounded text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
}
