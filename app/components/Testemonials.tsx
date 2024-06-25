import { FC } from 'react'
import { Costomers } from '../types/interfaces'
import { Quote } from 'lucide-react'
import Image from 'next/image'

interface TestemonialsProps extends Costomers{
  
}

const Testemonials: FC<TestemonialsProps> = ({description,imageUrl,name,role}) => {
  return <div className="flex flex-col items-center md:items-start gap-4 py-6 px-4 rounded-lg hover:bg-slate-800 capitalize">
    <Quote className="w-12 h-12 text-sky-600"  />
    <p className="text-lg text-center md:text-start">{description}</p>
    <div className="flex items-start gap-2">
        <Image
        src={imageUrl}
        alt={name}
        width={40}
        height={40}
        className="object-contain rounded-full"
        />
        <div>
            <h1 className="text-slate-100 font-semibold tracking-wide">{name}</h1>
            <small className="text-sky-600 font-semibold">{role}</small>

        </div>
    </div>
    </div>
  
}

export default Testemonials