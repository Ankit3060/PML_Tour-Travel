import React from 'react';
import { IoMdCloseCircle } from "react-icons/io";


function ReviewFooterPopup({ onClose }) {
  return (
    <div className="fixed flex-col inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white  flex rounded-lg shadow-lg  max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-2xl cursor-pointer"
        >
          <IoMdCloseCircle />       
        </button>
        <h2 className="text-xl font-semibold mb-4 p-4 bg-[#ebf2fd]">Your journey to forever is few steps away! just help us with below details</h2>
        
      </div>

      <div className='mt-2 flex flex-col'>
        <h1>Basic Information</h1>

      </div>
    </div>
  );
}

export default ReviewFooterPopup;
