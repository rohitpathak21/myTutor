import React from 'react'
import Image from 'next/image'

const postpage = () => {
  return (
    <div>
    <div className='relative w-[300px] min-h-[400px] bg-white rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] md:w-full md:h-full md:mt-10'>
      <div className='absolute h-[100px] bg-gray-500 w-[100px] rounded-full right-24 -top-12 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] md:h-48 md:w-48 md:top-24'>
       <Image src="/mission.png" fill className='rounded-full p-1'/>
      </div>
     <div className='text-black absolute top-20 left-6 flex flex-col gap-1.5 overflow-auto md:left-12'>
      <h1 className='text-xl font-bold'>First Last</h1>
      <h2 className='font-semibold text-xl'>Student</h2>
      <p className='text-xl font-semibold'>42,Infinity Tower, Lucknow, Uttar</p>
      <p className='text-xl font-semibold'>Skill</p>
      <p className='text-xl font-semibold'>Preference</p>
      <p className='text-xl font-semibold'>Budget</p>
      <button className='max-w-28 mt-3 ml-[74px] bg-sky-500 p-3 rounded-lg hover:bg-sky-300'>Edit Profile</button>
     </div>
    </div>
    </div>
  )
}

export default postpage