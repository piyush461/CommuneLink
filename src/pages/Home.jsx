import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-[5vw] flex h-full items-center max-md:flex-col">
      <div className="min-md:flex-1/2 flex gap-6 flex-col">
        <h1 className="text-3xl font-semibold max-md:my-8 ">
          Connecting People Across <br />
          <span className="text-blue-500">Faiths</span> &{" "}
          <span className="text-orange-500">Interest</span>
        </h1>
        <div className="block md:hidden">
          <img src="assets/people.webp" alt="People Gatthering" />
        </div>
        <p className="text-[1.5vw] max-md:text-[14px] min-md:w-[50vw]">
          Discover a space where diverse communities come together to share
          ideas, celebrate traditions, and build lasting relationships.
          <br />
          🌍 Join vibrant events that celebrate diversity <br />
          🤝 Connect with communities that share your values <br />
          💬 Engage in meaningful discussions that inspire change
          <br />
          Start your journey today and be a part of something bigger!
        </p>
        <Link
          className="relative font-semibold text-lg w-fit p-2 px-4 md:text-orange-400! hover:cursor-pointer! overflow-hidden before:h-full before:w-full before:absolute before:top-0 before:left-0 before:-z-10 before:bg-gradient-to-r before:from-orange-400 before:to-white md:before:-translate-x-40 before:transition-all before:duration-400 before:ease-in transition-all duration-400 ease-in md:hover:before:translate-x-0 max-md:before:animate-[slide_3s_ease-in-out_infinite] md:hover:!text-black"
          to="/events">
          <button className="cursor-pointer">Explore Events</button>
        </Link>
      </div>
      <div className="min-md:flex-1/2 max-md:flex-1 hidden md:block ">
        <img src="assets/people.webp" alt="People Gatthering" />
      </div>
    </div>
  );
}

export default Home;
