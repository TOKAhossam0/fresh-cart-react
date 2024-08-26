//******************************footer start********************************************** */
import React, { useState } from 'react'
import american from "../../assets/images/American-Express logo.png";
import masterCard from "../../assets/images/Mastercard-logo.png";
import paypal from "../../assets/images/Paypal-logo.png";
import google from "../../assets/images/google play.png";
import amazon from "../../assets/images/amazon-pay logo.svg";
import appStore from "../../assets/images/app store.svg";
export default function Footer() {
  return <>
    <div className='bg-gray-200 px-4 py-8 mt-10'>
      <h4 className='text-2xl ms-1 '> FreshCart app</h4>
      <p className='text-gray-700 py-2 ms-1'>We will send you a link, open it on your phone to download the app</p>
      <p className='text-gray-700 ms-1'>What are you waiting for? </p>
      <div className='md:flex items-center gap-x-2 my-5 md:my-0'>
          <p className='text-3xl font-bold md-2'>Get deliveries with FreshCart</p>
          <div className='flex items-center '>
            <img src={appStore} className='w-[130px ] h-[100px] cursor-pointer ms-3' alt="appStore" />
            <img src={google} className='w-[80px ] h-[46px] cursor-pointer  ms-3  ' alt="google" />
          </div>
        </div>

    <li className="space-x-2 text-black py-2 text-2xl text-main ">
                <i className="fab fa-facebook-f p-3 "></i>
                <i className="fab fa-linkedin-in p-3 "></i>
                <i className="fab fa-youtube p-3 "></i>
                <i className="fab fa-twitter p-3"></i>
                <i className="fab fa-instagram p-3"></i>
              </li> 
          

      <div className='my-2  md:flex justify-center'>
        <div className="relative z-0 w-[85%]   group bg-white">
          <input type="email" name="emaill" id="emaill" className="block py-3.5 px- w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
          <label htmlFor="emaill" className="peer-focus:font-medium ps-5 absolute text-sm text-gray-500 dark:text-gray-600 duration-400 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email ...</label>
        </div>

        <button type="button" className="md:w-[10%] md:mt-0 py-3 md:py-0 w-fit md:ms-5 mt-3 focus:outline-none text-white bg-main hover:bg-green-500 focus:ring-4 py focus:ring-green-300 font-medium rounded-lg text-sm px-5   dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Share App Link</button>

      </div>

      <hr className='w-[95%] mx-auto h-[1.5px] bg-gray-300 ' />

      <div className='mx-auto w-[95%] py-4 md:flex justify-between'>
        <div className='md:flex items-center gap-x-4 my-2 md:my-0 '>
          <p className='text-3xl'>Payment Partners</p>
          <div className='flex items-center gap-x-3'>
          <img src={paypal} className='w-[80px ] h-[40px] cursor-pointer m-5' alt="paypal" />
          <img src={masterCard} className='w-[80px ] h-[40px] cursor-pointer' alt="masterCard" />
            <img src={amazon} className='w-[80px ] h-[40px] cursor-pointer' alt="amazonLogo" />
            <img src={american} className='w-[80px ] h-[40px] cursor-pointer ' alt="american" />
          </div>
        </div>
      </div>
      <hr className='w-[95%] mx-auto h-[1.5px] bg-gray-300' />
    </div>
  </>
}
//***********************************footer end********************************************** */