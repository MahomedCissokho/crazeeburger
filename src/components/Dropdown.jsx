import React from "react";
import { useState } from "react";

const Dropdown = (props) => {
    const [dropDown,setDrop] = useState(true) ;
    let adminValue = props.adminValue
    const dropUp = () => {
       
    }
  return (
    <div className="flex items-center mx-10 gap-0.5 -translate-y-20">
      <div className={dropDown ? "bg-neutral-700 p-5 text-white flex items-center justify-center rounded-sm" : "bg-neutral-700 p-5 text-white flex items-center justify-center rounded-sm translate-y-20"} onClick={dropUp}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
      <div className="bg-neutral-700 p-5 rounded-sm flex items-center justify-center gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>

        <span className="cursor-pointer">Ajouter un produit</span>
      </div>
      <div className="flex items-center justify-center gap-5 p-5 rounded-sm text-gray-500 bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
        <span className="cursor-pointer">Modifier un produit</span>
      </div>
    </div>
  );
};

export default Dropdown;
