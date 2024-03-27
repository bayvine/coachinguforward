import clsx from "clsx"
import React from "react"

const SectionWrapper = ({ className, children, id = "" }: {
     className?: string, 
     children: React.ReactNode, 
     id?: string
}) => {
	return (
		<section id={id} className={clsx([className])}>
			<div className="w-full  mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl p-5">
				{children}
			</div>
		</section>
	)
}

export default SectionWrapper