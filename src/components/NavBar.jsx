
import React from 'react'
import pattern from "../assets/pattern-burger.png";
import logo from "../assets/logo-orange.png";
import { UserButton } from "@clerk/clerk-react";

const NavBar = () => {
  return (
    <div>
        <div className="w-screen h-screen  -z-50 flex flex-row flex-wrap gap-5 bg-[#fc980c] relative">
        <img src={pattern} alt="pattern" className="w-64 h-64" />
        <img src={pattern} alt="pattern" className="w-64 h-64" />
        <img src={pattern} alt="pattern" className="w-64 h-64" />
        <img src={pattern} alt="pattern" className="w-64 h-64" />
        <img src={pattern} alt="pattern" className="w-64 h-64" />
        <img src={pattern} alt="pattern" className="w-64 h-64" />
        <img src={pattern} alt="pattern" className="w-64 h-64" />
        <img src={pattern} alt="pattern" className="w-64 h-64" />
        <img src={pattern} alt="pattern" className="w-64 h-64" />
        <img src={pattern} alt="pattern" className="w-64 h-64" />
      </div>
      <div className=" opacity-80 top-0 bottom-0 shadow-lg flex right-0 left-0 self-center justify-self-center absolute bg-[#1a1a1a] ">
        <div className="w-screen h-20 flex items-center justify-between p-10 border-b-2 border-[#ff9f1b]">
          <div className="cursor-pointer text-[#ff9f1b] text-[2rem] font-semibold flex items-center justify-center gap-4 top-0">
            <span>Crazee</span>
            <img src={logo} alt="logo" className="w-16 h-16 object-cover" />
            <span>Burger</span>
          </div>
          <UserButton />
        </div>
      </div>
      
    </div>
  )
}

export default NavBar
