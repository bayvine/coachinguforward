import clsx from 'clsx'
import React from 'react'

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
          className?: string, 
          children?: React.ReactNode
          styleType?: 'primary' | 'secondary' | 'tertiary' | 'no-style-primary' | 'no-style-secondary' | 'blue'
}

const Button = ({
     className,
     children,
     styleType = 'primary',
     ...props
} : ButtonProps) => {
     return (
          <button  {...props} className={clsx([
               className,

               'shrink-0 rounded-lg active:top-0.5 relative font-semibold',

               styleType == 'primary' && "text-neutral-900 bg-primary py-3 px-6",
               
               styleType == 'blue' && 'bg-secondary && text-white py-3 px-6',

               styleType == 'secondary' && 'border-2 border-primary text-primary bg-none py-3 px-6',

               styleType == 'tertiary' && 'border-2 border-white text-white bg-none py-4 px-6',
               
               styleType == 'no-style-primary' && 'border-none bg-none text-primary underline px-0 py-0', 

               styleType == 'no-style-secondary' && 'border-none bg-none text-white underline px-0 py-0', 
          ])}>
               {children}
          </button>
     )
}

export default Button