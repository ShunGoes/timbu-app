import helper from "../../helper/helper";

const CheckoutDetails = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-[25px] font-[600] lg:text-[40px] text-[#000000CC] mt-[20px] ">
          Checkout
        </h2>

        <img src={helper.CaretDown} alt="caret down" />
      </div>
      <div className="w-[70%] lg:w-[40%] border-4 flex justify-between">
        <span className="text-[15px] font-[400]  ">! cart</span>
        <p className="text-[15px] font-[600] ">2 checkout</p>
      </div>

      <div className="bg-white">
        <div className="w-full hidden lg:flex flex-col gap-2 bg-[#F6F6F6]">
          <div className="w-full h-[60px] bg-white flex justify-between items-center px-[10px] rounded-[20px]">
            <p className="font-[400] text-[18px] text-[#00000099]">
              Contact Information
            </p>
            <img src={helper.CaretDown} alt="" />
          </div>
          <div className="w-full h-[60px] bg-white flex justify-between items-center px-[10px] rounded-[20px]">
            <p className="font-[400] text-[18px] text-[#00000099]">
              Delivery Option
            </p>
            <img src={helper.CaretDown} alt="" />
          </div>
          <div className="w-full h-[60px] mb-2 bg-white flex justify-between items-center px-[10px] rounded-[20px]">
            <p className="font-[400] text-[18px] text-[#00000099]">
              Shipping Address
            </p>
            <img src={helper.CaretDown} alt="" />
          </div>
        </div>
        <div className="flex justify-between border-b-2 border-[#DBDBDB] py-[20px] px-2 rounded-[5px]">
          <p className="text-[18px] font-[600] lg:text-[22px] text-[#000000CC] ">
            Payment method
          </p>
          <img src={helper.CaretUp} alt="caret up" />
        </div>

        {/* Mastercard */}
        <div className=" border-b border-[#DBDBDB] py-[20px] w-[90%] mx-auto lg:mx-0 lg:p-[10px] lg:pb-8">
          <label className="flex gap-4">
            <input type="radio" name="payment" id="mastercard" />
            <img src={helper.Mastercard} alt=" mastercard logo" />
            <div className="flex flex-col gap-0">
              <p className="font-[600] text-[14px] lg:text-[18px] text-[#000000CC] ">
                {" "}
                Pay with Mastercard{" "}
              </p>
              <span className="font-[500] text-[10px] lg:text-[12.5px] text-#000000CC ">
                Default card Expire :04/2027
              </span>
              <div className="w-[125px]  h-[25px] rounded-[3px] border-[1.5px] border-[#EB001B99] p-3 flex text-[10px] lg:text-[10px] font-[400] items-center justify-between text-[#ED121299] ">
                <span>CVV/CVC</span>
                <img src={helper.Error} alt="Error sign" />
              </div>
              <span className="text-[7px] font-[500] text-[#ED121299]">
                please enter cvc security code
              </span>
            </div>
          </label>
        </div>

        {/* paypal */}
        <div className=" border-b border-[#DBDBDB] py-[20px]  w-[90%] mx-auto lg:mx-0 lg:px-[10px]">
          <label className="flex gap-4">
            <input type="radio" name="payment" id="mastercard" />
            <img src={helper.Paypal} alt=" Paypal logo" />
            <div className="flex flex-col gap-0">
              <p className="font-[600] text-[14px] lg:text-[18px] text-[#000000CC] ">
                {" "}
                Pay with Paypal
              </p>
            </div>
          </label>
        </div>

        {/*  */}
        <div className=" border-b border-[#DBDBDB] py-[20px] w-[90%] mx-auto lg:mx-0 lg:px-[10px]">
          <label className="flex gap-4">
            <img src={helper.Plus} alt="plus icon" />
            <img src={helper.Card} alt=" Card" />
            <div className="flex flex-col gap-0">
              <p className="font-[600] text-[14px] lg:text-[18px] text-[#000000CC] ">
                {" "}
                Add new Debit or Credit card
              </p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
