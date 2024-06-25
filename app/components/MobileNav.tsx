'use client'
import Link from 'next/link'
import { navLinks } from '../constants/nav-links'
import { useState } from 'react'
import {Menu} from 'lucide-react'
import {X} from 'lucide-react'




const MobileNav = () => {
  const [isOpen, setisOpen] = useState<boolean>(false)

  const toggleMenu = () => {
      setisOpen(!isOpen)
    
  }
  return (
    <><div className="flex md:hidden cursor-pointer md:cursor-none flex-col">
      {
        isOpen?<X onClick={toggleMenu}/>:<Menu onClick={toggleMenu}/>
      }
      
    </div>
    {
    isOpen ? <figure className="absolute rounded-md right-5 origin-top top-20 w-auto bg-slate-800 p-2 transition-all z-50">
      <nav className="w-full h-full flex flex-col space-y-2 font-normal">
      {
                    navLinks.map((link,i)=> {
                        return   <Link href={`#${link}`}  className="py-1 transition-all rounded-md hover:bg-slate-700 hover:text-sky-400 px-2" key={i}>{link}</Link>
                        

                    })
                }
      </nav>
    </figure>:<></>
    }
    </>
  )
}

export default MobileNav