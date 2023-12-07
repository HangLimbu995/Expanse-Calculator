import React, { useEffect, useState } from 'react'
import FinancialChart from 'src/components/chart/HeaderIncomeChart';
import Navbar from 'src/components/navbar/Navbar'

const NewHome = () => {

  const [date, setDate] = useState('monthly')

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (date === 'monthly') {
        setDate('yearly')
      }
      if (date === 'yearly') {
        setDate('monthly')
      }
    }, [8000])

    return () => clearInterval(intervalId)
  })


  return (
    <div>
      <Navbar />
      <div className='relative isolate  bg-[#041C30] py-24 sm:py-32'>
        <div className='relative flex flex-between'>
          <div className='flex-4' >
            <h1 className='text-white text-3xl xl:text-5xl  ml-[130px] text-bold '>Keep track of your spending.</h1>
            <p className='text-white xl:mt-3 text-[14px] xl:text-[19px] ml-[130px] leading-4 xl:leading-6' >You are spending uselessly without even knowing.<br />Keep track of where you are <span className='text-[#FB9F06] font-semibold' style={{ transition: '2s ease' }} >money</span>.</p>
          </div>
          <div className="flex-6 bg-[#0a3960] xl:w-[450px] xl:h-[300px] mt-[-100px] xl:ml-[90px] justify-center">
            <div className='flex flex-col'>
              <div className='flex justify-center'>
                <h3 className='text-white xl:text-2xl xl:text-bold '>{date}</h3>
              </div>
              <FinancialChart date={date} />
            </div>
          </div>
        </div>
        <div className='flex justify-center text-center gap-x-1 gap-y-5  text-base font-semibold bg-red-900  text-white mt-[60px] leading-9 ' >
          <a href='#' className='flex-1 text-base xl:text-[20px] font-semibold'>Calculate Expanses & Management <span aria-hidden='true' className='text-[#FB9F06]'  >&rarr;</span></a>
          <a href='#' className='flex-1 text-base xl:text-[20px] font-semibold'>Financial Analysis and Guidance <span aria-hidden='true' className='text-[#FB9F06]' >&rarr;</span></a>
          <a href='#' className='flex-1 text-base xl:text-[20px] font-semibold'>Personalized Investment Plans <span aria-hidden='true' className='text-[#FB9F06]'  >&rarr;</span></a>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center text-center mt-[100px] '>
        <h1 className='md:text-3xl font-bold text-gray-700'>About Us</h1>
        <div className='flex justify-center items-center text-center tracking-tight leading-9 mt-6 w-[80%] '>
          <div className='w-2/3 justify-self-auto px-5 text-justify'>

          
            <h3 className='mt-6 md:text-lg text-gray-600'>
              If you find yourself struggling with the headache of organizing your spendings and navigating through financial charts, look no further. We, at <span className='text-[#FB9F06] font-bold'>FINTEC</span>, are here to assist you in building a robust financial foundation.
            </h3>
            <p className='mt-1 text-gray-600 md:text-lg leading-7'>
              At FINTEC, we understand the importance of financial well-being and the challenges that come with managing expenses. Our mission is to empower individuals like you to take control of their financial lives, providing tailored solutions and personalized insights.
            </p>
            <p className='mt-4 text-gray-600 md:text-lg leading-7'>
              Whether you are looking to optimize your spending, plan for the future, or explore personalized investment options, our team of experts is dedicated to guiding you every step of the way. We believe that financial success is achievable for everyone, and we're here to make it a reality for you.
            </p>
            <p className='mt-4 text-gray-600 md:text-lg leading-7'>
              Join us on the journey to financial empowerment. Let's craft a wealthier and more secure future together!
            </p>
          </div>
          <div className='w-1/2 text-justify px-3'>
            <p className='mt-4 text-gray-600 md:text-lg leading-7'>
              Whether you are looking to optimize your spending, plan for the future, or explore personalized investment options, our team of experts is dedicated to guiding you every step of the way. We believe that financial success is achievable for everyone, and we're here to make it a reality for you.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NewHome