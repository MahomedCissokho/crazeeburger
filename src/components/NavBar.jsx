
import React, {useState} from 'react'
import pattern from "../assets/pattern-burger.png";
import logo from "../assets/logo-orange.png";
import { UserButton } from "@clerk/clerk-react";
import ReactSwitch from 'react-switch'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const NavBar = () => {

    const [checked, setChecked] = useState(false)
    
    const checkedNotify = () =>toast("Mode Admin activé")
    const unCheckedNotify = () =>toast("Mode Admin desactivé")

    const handleChange = (val) => {
        setChecked(val)
        val ? checkedNotify() : unCheckedNotify()
    }


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
        <div className="w-screen h-20 flex items-center justify-between p-10 border-b-2 border-[#ff9f1b] shadow-inner">
          <div className="cursor-pointer text-[#ff9f1b] text-[2rem] font-semibold flex items-center justify-center gap-4 top-0">
            <span>Crazee</span>
            <img src={logo} alt="logo" className="w-16 h-16 object-cover" />
            <span>Burger</span>
          </div>
          <ReactSwitch checked={checked} onChange={handleChange}
            offColor="#ccc"
            onColor ="#ff9f1b"
          />
          <ToastContainer 
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <UserButton />
        </div>
      </div>
      
    </div>
  )
}

export default NavBar
