import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#F6F6F6] w-full flex justify-center items-center h-[30vh] lg:h-auto'>
        <div className='border-t-[0.5px] pt-[40px] rounded-[0.3px] border-[#5A2C17] w-[90%] flex justify-between  lg:mt-[60px] lg:gap-[20px]'>
            <div className='w-[50%] lg:w-auto border-4 border-green-500'>
                <h3 className='font-[600] text-[12.14px] lg:text-[18px] mb-1'>Online Shop</h3>
                <p className='font-[400] text-[7px] w-[60%] border-4 border-red-500'><span className='font-[700] text-[7px]'>isabella cribb </span> is a fashion house that provide trending and fashionable wears, for both men and women.</p>
            </div>
            <div className='border-4 border-red-500 w-[50%] flex justify-between'>
                <div className='w-[25%] lg:w-auto'>
                    <h3 className='font-[600] text-[12.14px] lg:text-[18px] mb-1'>Get Help</h3>
                    <p className='font-[400] text-[7px]'>Order Status</p>
                    <p className='font-[400] text-[7px]'>Delivery</p>
                    <p className='font-[400] text-[7px]'>Payment Option</p>
                    <p className='font-[400] text-[7px]'>Contact Us</p>
                </div>
                <div className='w-[25%] lg:w-auto'>
                    <h3 className='font-[600] text-[12.14px] lg:text-[18px] mb-1'>Support</h3>
                    <p className='font-[400] text-[7px]'>FAQ</p>
                    <p className='font-[400] text-[7px]'>My Account</p>
                    <p className='font-[400] text-[7px]'>Track Order</p>
                    <p className='font-[400] text-[7px]'>Contact Us</p>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer