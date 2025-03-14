import { useEffect, useState } from "react";
import EventForm from "../components/EventForm";

const Events = () => {
  const initialEvents = [
    {
      id: 1,
      title: "Community Prayer",
      date: "2024-07-15",
      location: "Church Hall",
      desc: "Join us for a peaceful community prayer gathering to strengthen our faith and unity.",
      category: "Religious",
    },
    {
      id: 2,
      title: "Charity Drive",
      date: "2024-12-18",
      location: "Community Center",
      desc: "Contribute to our charity drive to support underprivileged families with food and essentials.",
      category: "Charity",
    },
    {
      id: 3,
      title: "Cultural Meetup",
      date: "2025-01-22",
      location: "City Park",
      desc: "Experience a vibrant cultural exchange with music, food, and traditions from various communities.",
      category: "Social",
    },
    {
      id: 4,
      title: "Interfaith Dialogue",
      date: "2025-02-25",
      location: "Town Hall",
      desc: "Engage in meaningful discussions promoting understanding and respect among different faiths.",
      category: "Religious",
    },
    {
      id: 5,
      title: "Food Donation Camp",
      date: "2025-03-28",
      location: "Community Kitchen",
      desc: "Join our food donation initiative to provide meals to those in need and spread kindness.",
      category: "Charity",
    },
    {
      id: 6,
      title: "Youth Leadership Workshop",
      date: "2025-04-02",
      location: "Library Auditorium",
      desc: "Empower young individuals with leadership skills through interactive activities and mentorship.",
      category: "Social",
    },
  ];

  const categories = ["Religious", "Charity", "Social"];

  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : initialEvents;
  });
  const [category, setCategory] = useState("");

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const getStatus = (date) => {
    const eventDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (eventDate.toDateString() === today.toDateString()) {
      return { label: "Today", bgColor: "bg-green-500" };
    } else if (eventDate > today) {
      return { label: "Upcoming", bgColor: "bg-blue-500" };
    } else {
      return { label: "Past", bgColor: "bg-gray-400" };
    }
  };

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [
      ...prevEvents,
      { id: prevEvents.length + 1, ...newEvent },
    ]);
  };
  const filteredEvents = category
    ? events.filter((event) => event.category === category)
    : events;

  return (
    <div className="p-6 h-full">
      <div>
        <h2 className="text-[2.4vw] font-semibold text-center my-4">
          Upcoming Events
        </h2>
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setCategory("")}
            className={`px-4 py-2 rounded-md cursor-pointer  ${
              category === "" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-100 hover:bg-gray-300"
            }`}>
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-md cursor-pointer  ${
                category === cat ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-100 hover:bg-gray-300"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="px-6 py-5 bg-gray-100 flex max-md:flex-col gap-10 h-auto rounded-lg max-md:overflow-y-scroll max-md:h-80 md:overflow-x-scroll">
          {filteredEvents.map((event) => {
            const status = getStatus(event.date);
            return (
              <div
                key={event.id}
                className="p-4 bg-white shrink-0 w-[28vw] max-md:w-full flex flex-col gap-3 max-md:gap-6 justify-between rounded-lg shadow-md">
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-[16px] max-md:text-[14px] text-nowrap font-bold">{event.title}</h3>
                    <span
                      className={`px-2 py-1 text-xs text-white font-semibold rounded-md ${status.bgColor}`}>
                      {status.label}
                    </span>
                  </div>
                  <p className="text-gray-600 text-[10px] font-semibold">
                    <span className="text-gray-600">{event.date}</span> |{" "}
                    <span className="text-fuchsia-700">📍{event.location}</span>
                  </p>
                </div>
                <p className="font-semibold text-gray-500 text-sm">
                  {event.desc}
                </p>
                <span className="text-sm flex  font-semibold w-fit bg-gray-200 px-2 py-1 rounded-md">
                  {event.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-xl mt-14 mb-5 mx-4 font-semibold">Add New Event</h1>
        <EventForm addEvent={addEvent} categories={categories} />
      </div>
    </div>
  );
};

export default Events;
