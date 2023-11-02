import React from "react";
import background from "../assets/bg1.jpg";
import logo from "../assets/logo-orange.png";
import { useNavigate } from "react-router";


const Accueil = () => {
  const navigate = useNavigate();

  const getNewSession = () => {
    navigate("/order")
  }

  return (
    <div className="w-screen h-screen relative ">
      <div className="w-full h-full bg-[#000] opacity-50 absolute"></div>
      <div className="w-screen h-screen">
        <img
          src={background}
          className=" w-screen h-screen bg-center bg-no-repeat object-left-bottom object-cover"
        />
      </div>
      <div className=" w-full h-full -translate-y-[37rem]">
        <div className="text-[#ff9f1b] text-[8rem] font-semibold flex items-center justify-center gap-7">
          <span>Crazee</span>
          <img src={logo} alt="logo" className="w-32 h-32 object-cover" />
          <span>Burger</span>
        </div>
        <div className="w-full text-[3rem] text-center text-white flex-col flex gap-10 items-center justify-center ">
          <div className="font-semibold border-b-2 border-[#ff9f1b]">
            Bienvenue Chez Nous !
          </div>
          <div className="font-semibold letter-spacing-10">CONNECTEZ-VOUS </div>
          <div className="flex gap-5 hover:bg-[#af7017] items-center justify-center rounded-md cursor-pointer duration-500 transition-all  font-bold px-10 font-Roboto py-5 bg-[#ff9f1b]">
            <span className="text-[2.5rem]" onClick={getNewSession}>Accéder à mon espace </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
