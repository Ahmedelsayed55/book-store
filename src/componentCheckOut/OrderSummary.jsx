
import { TbTruckDelivery } from "react-icons/tb";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { useCheckoutStore } from "../store/Checkout";
const OrderSummary = () => {
  const {checkoutItems, incrementQty, decrementQty} =  useCheckoutStore();
  return (
    <div className="overflow-y-auto h-125">
      <h1 className="text-[18px] font-semibold mb-10 text-[#222222]">
        Order summary
      </h1>
      <div className="flex flex-col gap-10">
        {checkoutItems.map((item) => (
          <div className="w-full flex gap-6 " key={item?.id}>
            {/* img */}
            <div className="w-27.75">
              <img className="w-full" src={item?.img} alt={item?.title} />
            </div>
            {/* details */}
            <div className="flex flex-col gap-4 flex-1">
              {/* name and author */}
              <div className="flex flex-col gap-1 ">
                <h2 className="text-[#222222]">{item?.title}</h2>
                <p className="text-[14px] text-[#222222]"><span className="text-[#22222280]"> Author</span> {item?.author}</p>
              </div>
              {/* free shipping */}
              <div className="flex items-center gap-2 text-[14px] text-[#22222280] border px-3 py-2 rounded w-max">
                <TbTruckDelivery /> Free Shipping
              </div>
              {/* price and quantity */}
              <div className="w-full grow h-1 flex items-center justify-between">
                <p>$ {item?.price}</p>
                <div className=" flex items-center gap-2 ">
                  <button onClick={()=> decrementQty(item)} className="text-2xl text-pink-500 cursor-pointer">
                    <FiMinusCircle />
                  </button>
                  <span className="font-medium text-2xl ">{item?.qty}</span>
                  <button onClick={()=>incrementQty(item)} className="text-2xl text-pink-500 cursor-pointer">
                    <FiPlusCircle />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSummary;
