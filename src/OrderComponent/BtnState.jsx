import React from "react";

const BtnState = ({ state, setSelectedState, selectedState }) => {
  return (
    <div className="container mx-auto flex gap-3 md:gap-6 py-15">
      {
        <button
          onClick={() => setSelectedState("")}
          className={`${selectedState === "" ? "bg-[#D9176C80] text-white" : "text-[#222222]"} py-2.5 px-6 border border-gray-400 rounded-2xl `}
        >
          All
        </button>
      }
      {state.map((item) => (
        <button
          key={item.id}
          onClick={() => setSelectedState(item.name)}
          className={`${selectedState === item.name ? "bg-[#D9176C80] text-white" : "text-[#222222]"} py-2.5 px-6 border border-gray-400 rounded-2xl`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default BtnState;
