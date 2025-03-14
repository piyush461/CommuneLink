import { useState } from "react";

const EventForm = ({ addEvent, categories }) => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    desc: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newEvent.title ||
      !newEvent.date ||
      !newEvent.location ||
      !newEvent.desc ||
      !newEvent.category
    ) {
      alert("All fields are required.");
      return;
    }

    addEvent(newEvent);
    setNewEvent({ title: "", date: "", location: "", desc: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 w-4/9 max-md:w-full rounded-lg">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Event Title"
          className="w-full p-2 bg-gray-100 mb-2"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          required
        />

        <input
          type="date"
          className="w-full p-2 bg-gray-100 mb-2"
          value={newEvent.date}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          required
        />
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 bg-gray-100 mb-2"
          value={newEvent.location}
          onChange={(e) =>
            setNewEvent({ ...newEvent, location: e.target.value })
          }
          required
        />
        <select
          className="w-full p-2 bg-gray-100 mb-2"
          value={newEvent.category}
          onChange={(e) =>
            setNewEvent({ ...newEvent, category: e.target.value })
          }
          required>
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
      </div>

      <textarea
        placeholder="Description"
        className="w-full p-2 bg-gray-100 mb-2 min-h-40 resize-none"
        value={newEvent.desc}
        onChange={(e) => setNewEvent({ ...newEvent, desc: e.target.value })}
        required
      />

      <button
        type="submit"
        className="w-fit bg-blue-500 text-white py-2 px-3 mt-3 cursor-pointer rounded-md">
        Add Event
      </button>
    </form>
  );
};

export default EventForm;
