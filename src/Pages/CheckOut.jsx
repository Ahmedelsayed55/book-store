import React from "react";
import FormCheckout from "../componentCheckOut/FormCheckout";
import PaymentMethodCheckout from "../componentCheckOut/PaymentMethodCheckout";
import NoteCheckout from "../componentCheckOut/NoteCheckout";
import OrderSummary from "../componentCheckOut/OrderSummary";
import PaymentSummary from "../componentCheckOut/PaymentSummary";
import DiscountCheckout from "../componentCheckOut/DiscountCheckout";

const CheckOut = () => {
  return (
    <div className="w-full min-h-screen pt-7 lg:pt-15 pb-10 lg:pb-50.75">
      <div className="container mx-auto flex flex-col lg:flex-row gap-6 ">
        {/* left side */}
        <div className="grow flex flex-col gap-6">
          <FormCheckout />
          <PaymentMethodCheckout />
          <NoteCheckout />
        </div>
        {/* right side */}
        <div className="w-full flex flex-col lg:w-134 p-10 rounded-2xl bg-white shadow">
          <OrderSummary />
            <div className="grow">
            </div>
          <DiscountCheckout />
          <PaymentSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
