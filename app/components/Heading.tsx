import { title } from 'process'
import React from 'react'
import { FC } from 'react'

interface headingProps{
    title:string,
    text:string,
    isCentered?:boolean,

}

const Heading:FC<headingProps> = ({title,text,isCentered=true}) => {
  return (
    <div className={`flex flex-col  ${isCentered? "text-center items-center justify-center" :"text-left justify-start"}  gap-4`}>
    <h1 className="bg-clip-text text-transparent bg-gradient-to-t from-sky-200 via-sky-500 to-sky-200 font-extrabold text-3xl sm:text-4xl lg:text-5xl">{title}</h1>
    <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">{text}</p>
    
    </div>
  )
}

export default Heading