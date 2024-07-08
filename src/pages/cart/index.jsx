import CartCard from "../../components/cartCard"
import CartSummary from "../../components/cartSummary"
import { useCartContext } from "../../context/cart"

const CartPage = () => {
  const {cartItems} = useCartContext()
  return (
    <section>
      <div className="">
      <h3 className="font-[600] text-[25px] lg:text-[40px] w-[95%] mx-auto lg:pl-3">Cart</h3>
        
        <div className="flex flex-col lg:flex-row lg:justify-around  lg:w-[95%] mx-auto">
          <div className="w-full lg:w-[75%] ">
          <div className="w-[95%] mx-auto flex gap-8  lg:w-full lg:pl-3" >
            <span className="text-[15px] font-[600] lg:text-[20px] "> 1 cart</span>
            <span className="font-[400] text-[15px] lg:text-[20px] "> 2 checkout</span>
          </div>
            {
            cartItems.map(cartItem => (
                <CartCard key={cartItem.id}  cartItem={cartItem}/>
            ))
          }
          </div>
          
          <CartSummary />
        </div>
      </div>
    </section>
  )
}

export default CartPage