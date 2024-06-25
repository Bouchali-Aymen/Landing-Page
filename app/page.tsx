"use client"
import {CircleArrowRight} from 'lucide-react'
import Heading from './components/Heading';
import Button from './components/Button'
import {MoveRight} from 'lucide-react'
import Image from 'next/image';
import hero_image from '../public/Hero-image.svg'
import home_bg from '../public/home_bg.png'
import { companies, features, featuresBlock } from './constants/companies';
import FeaturesCard from './components/FeaturesCard';
import useMediaQuery  from './hooks/mediaQuery';
import FeaturesBlock from './components/FeaturesBlock';
import PricingSection from './components/PricingSection';
import { costomersList } from './constants/costomers';
import Testemonials from './components/Testemonials';




export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width: 1115px)');


  return (
    <main className="overflow-x-hidden pt-24 lg:pt-28 antialiased sm:px-6">
      
      <div className="relative container">
        <Image 
        src={home_bg}
        alt='home-bg'
        width={1920}
        height={1080}
        className="absolute -z-50 w-full min-h-screen md:max-h-[670px] md:h-full lg:min-h-screen -top-20 left-0 opacity-10"
        /> 
        {/* home section */}
        <section id="home" className="flex flex-col justify-center items-center w-full h-auto gap-8 relative sm:px-6">
          <figure className='bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40'/>
          <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44 -right-20 md:right-20"></figure>
          <div className="flex items-center rounded-full border border-slate-700 px-3 py-1 cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all text-sm">
            New Features Is Now Available.<CircleArrowRight size={20}/>
            </div>
            <Heading title='A CRM dashboard for engineering teams' text='Boost engineering team’s productivity with Ocean CRM dashboard that streamlines project management, collaboration, and data-driven decision-making.'/>
            <div className="flex gap-4 items-center">
              <Button>Get Started <MoveRight /></Button>
              <Button variant='outline'>View Pricing</Button>
            </div>
            <Image 
            src={hero_image}
            alt='hero image'
            width={670}
            height={370}
            className="mx-auto shadow-xl py-4 sm:mx-3"
            />
        </section>
        {/*end home section */}





        {/* companys */}

        <section id="company" className="grid items-center justify-center max-w-[62rem] mx-auto grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-x-12 gap-y-4">
        {companies.map((company, index) => (
            <Image
              key={index}
              src={company.imageUrl}
              width={120}
              height={80}
              alt={company.alt}
              className="w-40 md:w-full mx-auto"
            />
          ))}
        </section>

        {/* end companys */}



        {/* featurs section */}

        <section id='Features' className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28 max-w-full">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="flex flex-col gap-4 items-center justify-center lg:items-start lg:justify-start">
            <Heading title='Powerful features to help you manage all your leads.' text='Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet vel.'
            isCentered={isSmallScreen}
            />
            <Button>get Started</Button>
          </div>
          <div className='grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1'>
            {
              features.map((feature,index)=>{

                return(
                  <FeaturesCard key={index} {...feature}/>
                )
              })
            }
          </div>
       
        </div>
        {
            featuresBlock.map((featuresBlock,index)=>{
              return(
                <FeaturesBlock key={index} {...featuresBlock}/>
              )
            })
          }
        </section>

        {/* end features */}



        {/* start pricing */}
        <PricingSection/>
        {/* end pricing */}



        {/* start testimonials */}
        <section id='Testimonials' >
          <Heading title="Meet our Customers" text=""/>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-3">
          {
            costomersList.map((item,index)=>{
              return(
                <Testemonials key={index} {...item}/>
              )
            })
          }
          </div>
          
        </section>
        {/* end testimonials */}



        {/* service */}
        <section id="Contact">
          <div className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6 ">
            <Heading isCentered={false} title="Let’s try our service now!" text="Experience the power of Ocean CRM dashboard for engineering teams. Boost productivity and streamline collaboration. Get started today!"/>
            <div>
            <Button>Get Started <MoveRight /></Button>  
            </div>
                    
          </div>
        </section>
        {/* service */}

    

      </div>
    </main>
  );
}
