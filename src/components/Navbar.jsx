import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar({isOpen,setIsOpen}) {
  return (
    <nav className='flex justify-between pl-5 max-md:px-5 max-md:py-2 shadow-md items-center sticky top-0 w-full z-50 bg-white'>
        <div className='text-2xl max-md:text-lg font-bold italic'>Commune<span className='text-blue-600'>Link</span>🔗</div>
        <div className='flex-1 flex justify-end text-xl font-semibold max-md:text-[13px] max-md:hidden'>
            <NavLink className={({isActive})=>`transition-all ease 500 py-4 px-8 ${isActive ? 'bg-blue-400 transform sclae-105 !text-white' : 'tranform scale-100 !text-black'}`} to="/">Home</NavLink>
            <NavLink className={({isActive})=>`transition-all ease 500 py-4 px-8 ${isActive ? 'bg-blue-400 transform sclae-105 !text-white' : 'tranform scale-100 !text-black'}`} to="/events">Events</NavLink>
            <NavLink className={({isActive})=>`transition-all ease 500  py-4 px-8 ${isActive ? 'bg-blue-400 transform sclae-105 !text-white' : 'tranform scale-100 !text-black'}`} to="/about">About</NavLink>
        </div>
        <button onClick={()=>setIsOpen(!isOpen)}>
          <div className='h-6 w-7 md:hidden flex flex-col justify-between'>
            <span className={` transition-all ease 200  ${isOpen ? 'transform origin-left rotate-[47deg]' : ''} w-full h-[3px] bg-blue-400`}></span>
            <span className={` transition-all ease 200   ${isOpen ? 'opacity-0' : 'opacity-100'} w-full h-[3px] bg-orange-400`}></span>
            <span className={` transition-all ease 200  ${isOpen ? 'transform origin-left -rotate-[47deg]' : ''} w-full h-[3px] bg-blue-400`}></span>
          </div>
        </button>
    </nav>
  )
}

export default Navbar