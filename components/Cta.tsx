import Link from "next/link"
import Button from "./Button"


interface CtaProps extends React.ComponentPropsWithoutRef<'a'> { 
     label: string | null,
     href?: string
}

export const Cta = ({ 
     label = ' ', 
     href = '/', 
     ...rest
} : CtaProps) => { 
     return (
          <Link href={href} target="_blank" rel='noreferrer' {...rest}>
                    <Button styleType='primary'>{label}</Button>
          </Link>)
}
