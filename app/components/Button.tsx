import {FC,ReactNode} from 'react';


interface buttonProps{
    variant?:"primary" | "secondary" | "outline",
    isFullSize?:Boolean,
    children:ReactNode,
}
const Button:FC<buttonProps> = ({variant="primary",isFullSize,children}) => {
  return (
    <button className={`btn ${
      variant==="primary"?"btn-primary":variant==="secondary"?"btn-secondary":"btn-outline"
    }`}>{children}</button>
  )
}

export default Button