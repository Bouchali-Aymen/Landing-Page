import { FC } from 'react'
import { FeatureBlock } from '../types/interfaces'
import Heading from './Heading'
import Image from 'next/image'


interface FeaturesBlockProps extends FeatureBlock{

}

const FeaturesBlock: FC<FeaturesBlockProps> = ({content,imageUrl,title,isReversed}) => {
  return (
    <article className={`flex gap-20 w-full flex-col lg:flex-row ${isReversed?"lg:flex-row-reverse":""}`}>
          <Image
        src={imageUrl}
        alt={title}
        width={370}
        height={370}
        className="w-full shadow-lg"
        />

        <Heading title={title} text={content} isCentered={false}/>
      
    </article>
  )
}

export default FeaturesBlock