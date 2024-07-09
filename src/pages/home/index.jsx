import './index.css'
import { mobileProducts, Products} from '../../../product-data'
import ProductCard from '../../components/productCard'
import helper from '../../helper/helper'

const HomePage = () => {
  return (
    <section>
      <div className='flex justify-around py-[10px] lg:w-[46%] lg:mx-auto'>
        <p className='font-[500] text-[14px] lg:text-[18px] text-[#5A2C17;]'>New in</p>
        <p className='font-[500] text-[14px] lg:text-[18px] text-[#5A2C17;]'>Dresses</p>
        <p className='font-[500] text-[14px] lg:text-[18px] text-[#5A2C17;]'>Shoes</p>
        <p className='font-[500] text-[14px] lg:text-[18px] text-[#5A2C17;]'>Accesories</p>
      </div>

      {/* Hero section */}
      <div>
        <div className='h-[325px] hero pt-[4rem] flex flex-col justify-between items-center pb-[20px] lg:pb-[10px] '>
          <div className=' pl-[1rem] lg:pl-[6rem] w-full'>
            <div className='w-[60%] '>
              <h3 className='hero-header font-[700] text-[30px] lg:text-[70px] text-[#0E0E0E]'>Extra 10% Off</h3>
              <p className='hero-text font-[400] lg:ml-[8rem] text-[15px] lg:text-[25px] text-[#000000] '>EVERYTHING</p>

            </div>
          </div>
          <button className='w-[150px] lg:w-[200px] h-[40px] lg:h-[50px] rounded-[10px] bg-[#F6F6F6] border border-[#5A2C17] font-[500] text-[15px] lg:text-[18px] text-[#5A2C1799]'>
            SHOP NOW
          </button>
        </div>
      </div>

      <div>
        <div className='flex justify-between items-center px-3'>
        <h3 className='font-[600] text-[18px] lg:text-[25px] text-[#5A2C17] mt-3 ml-2 lg:w-[95%] lg:mx-auto lg:mt-3'>Top Products</h3>
          <span className='font-[500] text-[8px] text-[#00000099] lg:text-[12px]'>View All</span>
        </div>

        <section className='mt-4 mb-5 relative '>
          <div className='grid grid-cols-2 gap-3 lg:hidden  px-3 '>
            {
              mobileProducts.map(product => (
                <ProductCard key={product.id}  product={product}/>
              ))
            }
          </div>
          <div className='hidden lg:grid grid-cols-5 w-[95%] mx-auto  '>
            {
              Products.map(product => (
                <ProductCard key={product.id}  product={product}/>
              ))
            }
          </div>
          <div className='absolute flex justify-end pr-[5px] w-full top-[40px]'>
            <img src={helper.CaretRight} alt="caret right" className='h-[13.51px]' />
          </div>
        </section>
      </div>
    </section>
  )
}

export default HomePage