import "./index.css";
import { useCartContext } from "../../context/cart";

const ProductCard = ({ product }) => {
  const { name, price, size, color, image } = product;
  const {addItemToCart} = useCartContext()

  return (
    <div
      className="col-span-1  mx-auto border-2 border-[#DBDBDB] p-[5px] bg-[#F6F6F6] productcard-container  "
      
    >
      <div className="w-full h-[108.26px] lg:h-[192px] rounded-[10px]  ">
        <img src={image} alt={name} className="object-cover " />
      </div>

      <div className="mt-2 px-2">
        <div className="flex justify-between">
          <p className="font-[600] text-[11px] lg:text-[16px] text-[#000000CC] "> {name} </p>
          <p className="font-[600] text-[9px] lg:text-[12px] text-[#000000CC] ">${price}</p>
        </div>

        <p className="sizes font-[600] text-[6px] lg:text-[10px] text-[#000000B2] "> {size}</p>

        <div className="flex lg:flex-col justify-between  items-center pb-2 w-[70%] lg:w-full mt-2 lg:pb-2">
          <div className="flex lg:w-full">
            <p
              className={`w-[8px] h-[6.94px] `}
              style={{ backgroundColor: color[0] }}
            >
              {" "}
            </p>
            <p
              className={`w-[8px] h-[6.94px]  }`}
              style={{ background: color[1] }}
            ></p>
          </div>
          <button onClick={() => addItemToCart(product)} className="w-[50px] lg:w-[80px] h-[13px] lg:h-[21px] rounded-[5px] bg-[#D9D9D94D] border-[0.5px] border-[#5A2C1799] archivo font-[400] text-[6px] lg:text-[10px] text-[#000000] lg:mx-auto btn">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
