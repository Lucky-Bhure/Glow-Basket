'use client'

import Link from "next/link";
import { NextRequest } from "next/server"
import { toast } from "sonner"

const Navbar = () => {


  const token = false;


  return (
    <section className="w-full h-[10vh] px-4 md:px-20 flex flex-row justify-between items-center bg-[#37353E] text-[#EAE0CF]">
      <h1 className="text-3xl font-medium hover:text-yellow-300 hover:cursor-pointer"><Link href={'/'}>Glow Basket</Link></h1>
      <nav>
        {token ? (
          <ul className="flex flex-row gap-4">
            <li>Dashboard</li>  
            <li>Profile</li>
            <li>Logout</li>
          </ul>
        ) : (
          <ul className="flex flex-row gap-10 text-lg font-normal">
            <li className="hover:text-yellow-300 hover:cursor-pointer"><Link href={'/sign-in'}>Sign In</Link></li>
            <li className="hover:text-yellow-300 hover:cursor-pointer"><Link href={'/sign-up'}>Sign Up</Link></li>
          </ul>
        )}
      </nav>
    </section>
  )
}

export default Navbar
