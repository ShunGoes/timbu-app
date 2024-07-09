import React from "react";

import { useNavigate } from "react-router-dom"


const CartSummary = () => {
    const navigate = useNavigate()

    function goToCheckoutPage(){
        navigate("/checkout")
    }
  return (
    <div className=" lg:w-[25%]  mb-5 lg:mt-0  rounded-[20px] bg-[#F0F0F0] w-[90%] mt-6 mx-auto p-[10px] lg:py-[20px] flex flex-col items-center  ">
      <h3 className="text-[18px] font-[600] text-[#ED121280] lg:mb-[1em] ">
        Order Summary
      </h3>
      <div className="w-11/12 flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="font-[300] text-[15px] text-[#000000B2] ">
            sub total
          </span>
          <p className="font-[15px] text-[15px] text-[#000000CC] ">$450.00</p>
        </div>
        <div className="flex justify-between">
          <span className="font-[300] text-[15px] text-[#000000B2] ">
            Discount
          </span>
          <p className="font-[15px] text-[15px] text-[#000000CC] ">$50.00</p>
        </div>
        <div className="flex justify-between">
          <span className="font-[300] text-[15px] text-[#000000B2] ">Tax</span>
          <p className="font-[15px] text-[15px] text-[#000000CC] ">$0</p>
        </div>
        <div className="flex justify-between">
          <span className="font-[300] text-[15px] text-[#000000B2] ">
            Shipping
          </span>
          <p className="font-[15px] text-[15px] text-[#ED1212CC] "></p>Free
        </div>
        <div className="flex justify-between">
          <span className="font-[300] text-[15px] text-[#000000B2] ">
            Total
          </span>
          <p className="font-[15px] text-[15px] text-[#000000CC] ">$400.00</p>
        </div>
      </div>
      <button
        onClick={goToCheckoutPage}
        className="w-9/12  rounded-[20px] font-[12px] text-[12px] text-[#FFFFFF] bg-[#79797C] py-2 mt-7 "
      >
        Proceed to checkout
      </button>

      <div className="w-full mt-3 lg:mt-[3rem]">
        <p className="font-[400] text-[13px] text-[#000000CC] lg:text-center  ">
          Estimated Delivery by{" "}
          <em className="font-[500] text-[13px] text-[]"> 27 may, 2025 </em>
        </p>
      </div>
    </div>
  );
};

export default CartSummary;
