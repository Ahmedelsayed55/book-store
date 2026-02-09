import React from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate()
  const handleInput = (e) => {
    if (e.target.value) {
      e.target.nextElementSibling?.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && !e.target.value) {
      e.target.previousElementSibling?.focus();
    }
  };
  return (
    <div className="py-16 flex flex-col items-center justify-center gap-5">
      <div className="text-center">
        <h2 className="text-[#D9176C] text-[16px]">Reset your password!</h2>
        <p className="text-[#22222280] text-[14px]">
          Enter the 4 dights code that you received on your email
        </p>
      </div>
      <div className="flex gap-3">
        {[0, 1, 2, 3].map((_,i) => (
          <input
            key={i}
            maxLength={1}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            className="w-14 h-14 shadow outline-0 border border-gray-400 text-center text-2xl     focus:border-gray-600 "
          />
        ))}
      </div>
      <button onClick={()=> navigate("/login/password")}  className="bg-[#D9176C] px-20 py-3 text-white rounded-md">Reset password</button>
      <p className="text-[#222222]">Didn’t receive a code?<span className="text-[#D9176C] cursor-pointer">Send again</span></p>
    </div>
  );
};

export default ResetPassword;
