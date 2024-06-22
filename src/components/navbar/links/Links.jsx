"use client"
import React, { useState } from 'react'
import Navlink from './navlink/Navlink';
import { IoMenu } from "react-icons/io5";
import useLoginModal from '../../../hooks/useLoginModal';

const Links = () => {

 const[Open,setOpen] = useState(false); 
 const loginmodal= useLoginModal();
 const links = [
    {
    title: "Home" ,
    path: "/",
    },
    {
    title: "About" ,
    path: "/about",
    },
    {
    title: "Contact" ,
    path: "/contact",
    },
 ];

  const session = false;

  return (
    <div>
    <div className='hidden lg:flex items-center gap-10 text-xl pt-3 font-semibold'>
    {links.map((link=>(
        <Navlink item={link} key={link.title}/>
    )))} 
    {
        !session && <button className='p-3 font-semibold cursor-pointer bg-white text-blue-950' onClick={loginmodal.onOpen}>Login</button>
        
    }
    {
        session && <button className='p-3 font-semibold cursor-pointer bg-white text-blue-950'>Logout</button>
    }
    </div>

    <button onClick={() => setOpen((prev)=>!prev)} className='block cursor-pointer lg:hidden'><IoMenu  className='text-3xl'/></button>

    {Open && (
        <div className='absolute top-20 right-0 w-2/3 h-[calc(100%-200px)] bg-black flex flex-col items-center justify-center gap-6 lg:hidden'>
            {links.map((link)=>(<Navlink item={link} key={link.title}/>
            ))}
        {
        session && <button className='p-3 font-semibold cursor-pointer bg-white text-blue-950 min-w-28'>Logout</button>
    }    
        </div>
    )
}
    </div>
  )
}

export default Links;