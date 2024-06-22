"use client"
import React from 'react'
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const contact = () => {
  return (
    <div className='antialiased flex w-full h-[calc(100% - 196px)] mt-10 justify-between'>

      <div className='flex-1'>
        <div className='flex flex-col h-full justify-around gap-10 py-8 pr-6'>

          <div className='flex flex-col gap-5'>
            <h1 className='text-5xl tracking-wide font-semibold'>Contact Us</h1>
            <p className='text-xl font-normal'>We're comitted to excellence and value your input. Reach out to us with any questions, suggestions, or just to say hello! Whether your prefer email, phone, or our contact form, we're here to assist you promptly. Your satisfaction is our priority.</p>
          </div>

          <div className='flex flex-col gap-5 text-lg'>
            <div className='inline-flex space-x-3 items-center'>
              <IoCall className='text-2xl'/>
              <span>+123-456-789</span>
            </div>
            <div className='inline-flex space-x-2 items-center'>
            <IoMdMail className='text-2xl'/>
              <span>contactmytutor@gmail.com</span>
            </div>
            <div className='inline-flex space-x-2 items-center'>
              <FaLocationDot className='text-2xl'/>
              <span>11, Infinity Tower, Lucknow, Uttar Pradesh</span>
            </div>
            
            
          </div>

          <div className='icons flex space-x-4 pt-4'>
            <FaFacebook className='text-2xl'/>
            <FaTwitter className='text-2xl'/>
            <FaInstagram className='text-2xl'/>
            <FaLinkedin className='text-2xl'/>
          </div>


        </div>
      </div>


      <div className='flex-1'>
        <form action="" className='flex flex-col h-full justify-between pt-8 pl-20 gap-2 font-semibold'>
          <input type="text" placeholder='Full Name' className='bg-[#2d2b42] p-4 border-none rounded-md'/>
          <input type="text" placeholder='Email' className='bg-[#2d2b42] p-4 border-none rounded-md'/>
          <textarea name="" id="" cols="20" rows="10" placeholder='Message' className='bg-[#2d2b42] p-4 border-none rounded-md'></textarea>
          <button className='w-full p-5 cursor-pointer bg-blue-600 border-none rounded-lg hover:bg-blue-400'>Send</button>
        </form>
      </div>

    </div>
  )
}

export default contact