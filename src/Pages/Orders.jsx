import React, { useState } from "react";
import BtnState from "../OrderComponent/BtnState";
import ShowOrder from "../OrderComponent/ShowOrder";

const Orders = () => {
  const state = [
    { id: 1, name: "In Progress" },
    { id: 2, name: "Completed" },
    { id: 3, name: "Canceled" },
  ];
  const [selectedState, setSelectedState] = useState("");
  return (
    <div>
      <BtnState state={state} setSelectedState={setSelectedState} selectedState={selectedState}  />
      <ShowOrder selectedState={selectedState} />
    </div>
  );
};

export default Orders;
