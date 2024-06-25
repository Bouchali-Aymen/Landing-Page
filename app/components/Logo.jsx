import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'


const Logo = () => {
  return (
    <Link href={'/'} className="flex items-end gap-2 items-center">
        <Image 
        src={logo}
        alt='logo'
        width={32}
        height={32}
        />
        <div className="relative">
        <h1 className="font-bold text-white text-xl tracking-wide">Ocean</h1>
        <div className="w-2 h-2 bg-sky-700 rounded-full absolute -right-3 bottom-1.5"></div>
        </div>

    </Link>
  )
}

export default Logo