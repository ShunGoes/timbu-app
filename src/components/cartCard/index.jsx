import { useCartContext } from "../../context/cart";
import helper from "../../helper/helper";

const CartCard = ({ cartItem }) => {
  return (
    <div>
      <div className="lg:w-[70%] flex gap-3 p-3 h-[128px] lg:h-auto  my-1">
        <div className="flex gap-1 flex-col h-full lg:h-[185px] w-[30%] lg:w-[30%] ">
          <div className="h-[80%] ">
            <img
              src={cartItem.image}
              alt={cartItem.name}
              className="object-cover w-full h-full rounded-[15px]"
            />
          </div>
          <div className="flex items-center justify-around flex-grow ">
            <button className="font-[600] text-[14px] w-[20px] h-[20px] bg-[#D9D9D9] ">
              {" "}
              -{" "}
            </button>
            <span className="font-[600] text-[14px] lg:text-[14px] "> 0 </span>
            <button className="font-[600] text-[14px] w-[20px] h-[20px] bg-[#D9D9D9] ">
              {" "}
              +{" "}
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[70%] lg:gap-2 lg:w-[70%] ">
          <p className="font-[600] text-[15px] text-[#000000CC] lg:text-[22px] ">
            {cartItem.name}
          </p>
          <div>
            size:{" "}
            <span className="text-[14px] font-[600] text-[#000000CC] lg:text-[20px]">
              {" "}
              XXL
            </span>{" "}
            / color:{" "}
            <span className="text-[14px] lg:text-[20px] font-[600] text-[#000000CC]">
              yellow
            </span>
          </div>
          <p className="font-[600] text-[15px] lg:text-[20px] text-[#000000CC]">
            {cartItem.price}
          </p>
          <div className="flex-grow flex justify-end  lg:items-end">
            <img
              src={helper.Trash}
              alt="delete item"
              className="h-[60%] lg:h-[20%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
