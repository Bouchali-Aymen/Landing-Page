import Link from 'next/link';
import React from 'react'
import Logo from './Logo'
import { navLinks } from '../constants/nav-links';
import MobileNav from './MobileNav'
const NavBar = () => {
  return (
    <header className="fixed min-w-full b-slate-900/50 backdrop-blur-md z-30">
        <div className="container py-6 flex justify-between">
            <Logo/>
            {/*Desktop navigation*/}
            <nav className="hidden  md:flex gap-x-8">
                {
                    navLinks.map((link,i)=> {
                        return   <Link href={`#${link}`}  className="font-semibold text-sm tracking-wide text-slate-200" key={i}>{link}</Link>
                        

                    })
                }
            </nav>
            {/*phones navigation*/}
            <MobileNav/>

        </div>
    </header>
  )
}


export default NavBar;
