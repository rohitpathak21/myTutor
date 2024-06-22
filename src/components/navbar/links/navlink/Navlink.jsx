"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Navlink = ({item}) => {
const pathName = usePathname();    
  return (
    <Link href={item.path} className={(item.path===pathName?"min-w-[100px] p-2 border-none rounded-3xl font-semibold text-center bg-white text-blue-950":"min-w-28 p-3 border-none rounded-3xl font-semibold text-center")}>{item.title}</Link>
    
  );
};

export default Navlink