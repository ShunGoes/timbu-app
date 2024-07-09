import CartCard from "../cartCard"
import { mobileProducts } from "../../../product-data"
import helper from "../../helper/helper"

const CheckoutSummary = () => {
  return (
    <div className="bg-white py-[20px] w-full p-[10px] lg:p-[15px] mt-[20px]">
        <h3 className="text-[18px] font-[600] text-[#000000CC] lg:text-[25px] "> Order Summary</h3>

        <div className="w-full mt-6 border-b border-[#00000080] py-[10px] rounded-[5px] flex gap-[10px] ">
            <div className="w-[20%] h-[66px]">
                <img src={helper.BabyWears} alt="picture os clothes" className="object-cover w-full h-full" />
            </div>
            <div className="w-[80%] h-full  flex justify-between">
                <div className="flex flex-col -gap-1">
                    <p className="font-[600] text-[12px] lg:text-[16px] text-[#000000CC]">Shortsleeve women  T-Shirt</p>
                    <span className="font-[400] text-[10px] lg:text-[12px] ">color: white</span>
                    <span className="font-[400] text-[10px] lg:text-[12px] ">size: 12px</span>
                    <span className="font-[400] text-[10px] lg:text-[12px] ">Qty: 5</span>
                </div>
                <p className="font-[600] text-[13px] lg:text-[15px] text-[#000000CC]"> $ 55.50</p>
            </div>
        </div>

        <div className="flex justify-between  py-[10px] lg:py-[30px] border-b border-[#00000080]">
            <p className="font-[600] lg:text-[18px] text-[12px] text=[#000000B2]"> Promo code</p>
            <img src={helper.Plus} alt=" add icon" />
        </div>
        <div className="border-b-[0.5px] border-[#00000080] pb-4 lg:pb-0 ">
            <div className="flex items-center justify-between py-[10px]">
                <p className="font-[400] text-[12px] lg:text-[12px] text-[#000000CC]">subtotal</p>
                <p className="font-[400] text-[12px] lg:text-[12px] text-[#000000CC]">$220.20</p>
            </div>
            <div className="flex items-center justify-between py-[10px]">
                <p className="font-[400] text-[12px] lg:text-[12px] text-[#000000CC]">Shippinf</p>
                <p className="font-[400] text-[12px] lg:text-[12px] text-[#000000CC]">Free</p>
            </div>
            <div className="flex items-center justify-between py-[10px]">
                <p className="font-[400] text-[12px] lg:text-[12px] text-[#000000CC]">Estimated tax</p>
                <p className="font-[400] text-[12px] lg:text-[12px] text-[#000000CC]">$20.50</p>
            </div>
        </div>
        <div className="flex items-center justify-between py-[10px] lg:py-[40px]">
            <h3 className="font-[600] text-[14px] text-[#000000CC] lg:text-[18px] ">Estimated Total</h3>
            <p className="text-[12px] font-[400] ">$250.50</p>
        </div>
        <div className="flex flex-col items-center">
            <button className="lg:w-[50%] w-[40%] py-2 lg:py-0 lg:h-[52px] bg-[#000000CC] rounded-[10px] text-[13px] font-[600] lg:text-[15px] text-white mx-auto">
                    Place order
            </button>
            <span className="font-[600] text-[9.5px] w-[60%] text-center mt-2">By placing an order,you agree to the isabella’s Terms & Conditions and Privacy policy</span>
        </div>
    </div>
  )
}

export default CheckoutSummary