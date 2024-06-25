export interface Company{
    imageUrl:string,
    alt:string
}


export interface Feature{
    imageUrl:string,
    title:string,
    content:string
}

export interface FeatureBlock extends Feature{
    isReversed?:boolean
}


export interface Pricing{
    title:string,
    content:string,
    features:string[],
    popular?:boolean,
    monthPrice:number,
    yearPrice:number,
    glowPosition?: "right" | "left";

}


export type PricingMode = "monthly" | "annually";


export interface Costomers{
    description:string,
    name:string,
    role:string,
    imageUrl:string
}

export interface FootLinks{
    title:string,
    list:string[]
}