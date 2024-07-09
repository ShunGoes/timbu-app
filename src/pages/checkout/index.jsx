import React from 'react'
import CheckoutDetails from '../../components/checkoutDetails'
import CheckoutSummary from '../../components/checkoutSummary'

const Checkout = () => {
  return (
    <main className='bg-[#F6F6F6] pb-[70px] '>
      <div className='flex flex-col lg:flex-row lg:justify-between w-[90%] mx-auto lg:gap-[4rem] '>
        <section className='w-full lg:w-[60%]  h-full'>
          <CheckoutDetails />
        </section>

        <section className='w-full lg:w-[40%]  h-full'>
          <CheckoutSummary />
        </section>
      </div>
    </main>
  )
}

export default Checkout