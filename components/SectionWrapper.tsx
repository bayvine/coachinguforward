import clsx from "clsx"
import React from "react"


interface SectionWrapperProps extends React.ComponentPropsWithoutRef<"section" | "nav"> { 
	className?: string, 
	as?: 'section' | 'nav'
	id?: string,
	children: React.ReactNode;
}

const SectionWrapper =
	({ className, id = "", as = 'section', ...props } : SectionWrapperProps) => {

	const Component = as
		
	return (
		<Component id={id} className={clsx([className])} {...props}>
		<div className="w-full mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-5 py-4">
			{props.children}
		</div>
		</Component>
	)
}

export default SectionWrapper