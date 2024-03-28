import clsx from 'clsx'
import React from 'react'

const Button = ({
     className,
     children,
     type = 'primary'
}: { 
          className?: string, 
          children?: React.ReactNode
          type: 'primary' | 'secondary' | 'tertiary' | 'no-style-primary' | 'no-style-secondary'
}) => {
     return (
          <button className={clsx([
               'shrink-0 rounded-lg px-6  active:top-0.5 relative font-semibold py-3',
               type == 'primary' && "text-neutral-900 bg-primary",
               type == 'secondary' && 'border-2 border-primary text-primary bg-none',
               type == 'tertiary' && 'border-2 border-white text-white bg-none',
               type == 'no-style-primary' && 'border-none bg-none text-primary underline', 
               type == 'no-style-secondary' && 'border-none bg-none text-white underline px-0 py-0', 
               className
          ])}>
               {children}
          </button>
     )
}

export default Button