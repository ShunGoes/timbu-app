import React from "react";
import helper from "../../helper/helper";

const Footer = () => {
  return (
    <footer className="bg-[#F6F6F6] w-full flex flex-col justify-between items-center h-[20vh] lg:h-[30vh]">
      <div className="border-t-[0.5px] pt-[30px] rounded-[0.3px] border-[#5A2C17] w-[90%] flex justify-between lg:justify-start  ">
        <div className="w-[50%] lg:w-[30%]   lg:ml-[7rem]">
          <h3 className="font-[600] text-[12.14px] lg:text-[18px] mb-1">
            Online Shop
          </h3>
          <p className="font-[400] text-[7px] w-[90%] lg:w-[70%] lg:text-[12px]">
            <span className="font-[700] text-[7px] ">isabella cribb </span> is a
            fashion house that provide trending and fashionable wears, for both
            men and women.
          </p>
        </div>
        <div className=" w-[40%] flex justify-end lg:justify-start lg:gap-[40px] ">
          <div className="w-full lg:w-auto">
            <h3 className="font-[600] text-[12.14px] lg:text-[18px] mb-1">
              Get Help
            </h3>
            <p className="font-[400] text-[7px] lg:text-[12px]">Order Status</p>
            <p className="font-[400] text-[7px] lg:text-[12px]">Delivery</p>
            <p className="font-[400] text-[7px] lg:text-[12px]">Payment Option</p>
            <p className="font-[400] text-[7px] lg:text-[12px]">Contact Us</p>
          </div>
          <div className=" lg:w-auto ">
            <h3 className="font-[600] text-[12.14px] lg:text-[18px] mb-1">
              Support
            </h3>
            <p className="font-[400] text-[7px] lg:text-[12px]">FAQ</p>
            <p className="font-[400] text-[7px] lg:text-[12px]">My Account</p>
            <p className="font-[400] text-[7px] lg:text-[12px]">Track Order</p>
            <p className="font-[400] text-[7px] lg:text-[12px]">Contact Us</p>
          </div>
        </div>
      </div>
      <div className="w-full  mt-[20px] px-[10px] flex justify-between mb-[20px] ">
            <div className="flex gap-4 items-center">
                <img src={helper.Settings} alt="settings icon" />
                <p className="font-[500] text-[12px] hidden lg:block">Settings</p>
            </div>
            <div className="flex gap-1 items-center">
                <img src={helper.Instagram} alt="Instagram icon" />
                <img src={helper.Twitter} alt="Twitter icon" />
                <img src={helper.Mail} alt="Email icon" />
                <p className="font-[500] text-[12px]">Email us</p>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
