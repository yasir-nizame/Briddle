import Header from "../app/components/header";
import EventCard from "../app/components/eventcard";
import Filters from "../app/components/filter";
import EventFilters from "./components/eventfilters";
import MiniEventCard from "./components/minieventcard";

export default function HomePage() {
  const events = [
    {
      image: "/crdimg1.png",
      title: "Music Festival",
      location: "Los Angeles, CA",
      date: "2024-12-01",
      bookmarked: true,
    },
    {
      image: "/crdimg2.jpg",
      title: "Tech Conference",
      location: "San Francisco, CA",
      date: "2024-11-15",
      bookmarked: false,
    },
    {
      image: "/crdimg1.png",
      title: "Music Festival",
      location: "Los Angeles, CA",
      date: "2024-12-01",
      bookmarked: true,
    },
    {
      image: "/crdimg2.jpg",
      title: "Tech Conference",
      location: "San Francisco, CA",
      date: "2024-11-15",
      bookmarked: false,
    },
  ];
  const minievents = [
    {
      date: "27",
      month: "FEB",
      title: "BHA - Kickoff to New Ownership",
      location:
        "Rim Rock Riders, 17037 Alfalfa Rd, Powell Butte, OR 97753, USA",
      bookmarked: true,
    },
    {
      date: "28",
      month: "FEB",
      title: "Barrel Race (race 6)",
      location: "14405 179th Ave SE, Monroe, WA 98272, USA",
      bookmarked: false,
    },
    {
      date: "28",
      month: "FEB",
      title: "2024 WEDNESDAY NIGHT'S 4D BARREL RACING - CANCELLED",
      location: "28962 Rd 168, Visalia, CA 93292, USA",
      bookmarked: false,
    },
    {
      date: "28",
      month: "FEB",
      title: "Olsen's Events Jackpot!",
      location: "Olsen's Grain Inc, 344 AZ-89, Chino Valley, AZ 86323, USA",
      bookmarked: false,
    },
    {
      date: "1",
      month: "MAR",
      title: "On Demand Pest Control Buckle Series Race #4",
      location: "Bergeron Rodeo Grounds, Davie, FL 33314, USA",
      bookmarked: false,
    },
    {
      date: "1",
      month: "MAR",
      title: "On Demand Pest Control Buckle Series Race #4",
      location: "Bergeron Rodeo Grounds, Davie, FL 33314, USA",
      bookmarked: false,
    },
    {
      date: "1",
      month: "MAR",
      title: "On Demand Pest Control Buckle Series Race #4",
      location: "Bergeron Rodeo Grounds, Davie, FL 33314, USA",
      bookmarked: false,
    },
    {
      date: "1",
      month: "MAR",
      title: "On Demand Pest Control Buckle Series Race #4",
      location: "Bergeron Rodeo Grounds, Davie, FL 33314, USA",
      bookmarked: false,
    },
    {
      date: "1",
      month: "MAR",
      title: "On Demand Pest Control Buckle Series Race #4",
      location: "Bergeron Rodeo Grounds, Davie, FL 33314, USA",
      bookmarked: false,
    },
    {
      date: "1",
      month: "MAR",
      title: "On Demand Pest Control Buckle Series Race #4",
      location: "Bergeron Rodeo Grounds, Davie, FL 33314, USA",
      bookmarked: false,
    },
  ];

  return (
    <div>
      <Header />
      <Filters />
      <div className="flex flex-row gap-x-4 overflow-x-auto p-4 ">
        {events.map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
            date={event.date}
            title={event.title}
            location={event.location}
            bookmarked={event.bookmarked}
          />
        ))}
      </div>
      <EventFilters />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {minievents.map((event, index) => (
          <MiniEventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}
