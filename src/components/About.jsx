import React from "react";

function About() {
  return (
    <div className="p-10 max-md:p-4 flex flex-col gap-2">
      <center>
        <h1 className="text-4xl font-semibold text-blue-700">About Us</h1>
      </center>
      <div>
        <h2 className="text-2xl font-semibold mt-2 text-gray-800">
          Who We Are
        </h2>
        <p className="max-md:text-[12px] text-gray-600">
          Welcome to{" "}
          <span className="font-semibold italic">
            Commune<span className="text-blue-600">Link🔗</span>
          </span>
          , a platform dedicated to bringing communities together through
          meaningful events. We believe in the power of shared experiences,
          whether it’s a religious gathering, charity event, or social meet-up,
          to create lasting connections and positive change.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mt-2 text-gray-800">
          Our Mission
        </h2>
        <p className="max-md:text-[12px] text-gray-600">
          Our mission is simple: to make event planning and participation
          effortless. We strive to connect people with events that matter,
          fostering engagement, unity, and a sense of belonging.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mt-2 text-gray-800">
          What We Offer
        </h2>
        <p className="max-md:text-[12px] text-gray-600">
          <div className="flex gap-2"><span>✔ </span><span> Easy Event Creation – Organizers can seamlessly create, manage, and
          promote their events.</span></div>
          <div className="flex gap-2"><span>✔</span><span>Discover New Events – Stay updated with upcoming, ongoing, and past
          events tailored to your interests.</span></div>
          <div className="flex gap-2"><span>✔</span><span>Community Engagement – A
          space where people can participate, volunteer, and contribute to
          causes they care about.</span></div>
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mt-2 text-gray-800">
          Our Categories
        </h2>
        <p className="max-md:text-[12px] text-gray-600">
          <div>
            <span className="font-bold">✔ Religious – </span>
            <span>Gatherings that nurture faith and spirituality.</span>
          </div>
          <div>
            <span className="font-bold">✔ Charity – </span>
            <span>Fundraisers and volunteer-driven events for social
            causes.</span>
          </div>
          <div className="flex">
            <span className="font-bold text-nowrap">✔ Social – </span>
            <span className="">Networking meet-ups, cultural festivals, and recreational
            events.</span>
          </div>
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mt-2 text-gray-800">Join Us</h2>
        <p className="max-md:text-[12px] text-gray-600">
          Whether you're an organizer looking to promote an event or an attendee
          searching for your next gathering,{" "}
          <span className="font-semibold italic">
            Commune<span className="text-blue-600">Link🔗</span>
          </span>{" "}
          is here to make the experience smooth and enjoyable.
          <p className="text-center max-md:text-[12px] mt-3 font-bold italic">
            🚀 Be a part of our community today and explore the power of
            <span className="text-blue-400"> connection</span>!
          </p>
        </p>
      </div>
    </div>
  );
}

export default About;
