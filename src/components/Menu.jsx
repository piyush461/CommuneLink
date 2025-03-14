import React from "react";
import { NavLink } from "react-router-dom";

function Menu({isOpen, setIsOpen}) {
  return (
    <div className={`w-full absolute z-50 top-[6%] left-0 md:hidden flex flex-col ${isOpen ? 'block' : 'hidden'} `}>
      <NavLink
      onClick={()=>setIsOpen(!isOpen)}
        className={({ isActive }) =>
          `transition-all ease 1s py-4 px-8 font-bold text-xl text-gray-600 ${
            isActive ? "bg-blue-400 text-white" : "bg-white"
          }`
        }
        to="/">
        Home
      </NavLink>
      <NavLink
      onClick={()=>setIsOpen(!isOpen)}
        className={({ isActive }) =>
          `transition-all ease 1s] py-4 px-8 font-bold text-xl text-gray-600 ${
            isActive ? "bg-blue-400 text-white" : "bg-white"
          }`
        }
        to="/events">
        Events
      </NavLink>
      <NavLink
      onClick={()=>setIsOpen(!isOpen)}
        className={({ isActive }) =>
          `transition-all ease 1s py-4 px-8 font-bold text-xl text-gray-600 ${
            isActive ? "bg-blue-400 text-white" : "bg-white"
          }`
        }
        to="/about">
        About
      </NavLink>
    </div>
  );
}

export default Menu;
