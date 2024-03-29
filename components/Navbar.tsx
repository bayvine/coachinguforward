'use client';

import React, { useEffect, useState } from 'react'
import SectionWrapper from './SectionWrapper'
import clsx from 'clsx';
import { MobileNavMenu } from './MobileNavMenu';
import { getNavigationData } from '@/utils/utils';
import { Hamburger } from './Hamburger';


const Navbar = () => {

     const [labelForConsultation, setLabelForConsultation] = useState<string | null>('')
     const [title, setTitle] = useState<string | null>('')
     const [navBg, setNavBg] = useState(false);

     const [mobileMenu, setMobileMenu] = useState(false)
     const handleMenu = () => setMobileMenu((prev) => !prev)
     
     const changeNavBg = () => {
     const heroBannerHeight = document.getElementById('hero_banner')?.offsetHeight as number / 2  || 300
     window.scrollY >= heroBannerHeight  ? setNavBg(true) : setNavBg(false);
     }

     useEffect(() => {
          getNavigationData().then(res =>{
               setTitle(res.title);
               setLabelForConsultation(res.label_for_consultation)}
          ).catch(err => console.log({ err }))
      } , [])

     useEffect(() => {
     window.addEventListener('scroll', changeNavBg);
     return () => {
          window.removeEventListener('scroll', changeNavBg);
     }
     }, [])

     return (
          <>
               

               <SectionWrapper onScroll={changeNavBg} as='nav' id="nav" className={clsx([
               navBg ? 'bg-offwhite text-black' : 'bg-none text-white',
               'fixed z-50 top-0 left-0 w-full transition-all duration-75 ease-linear'
          ])}>
               <div className='flex justify-between items-center w-full'>

                         <div className='font-bold'>{title}</div>
               <div className=''>
                    <Hamburger  
                         handleClick={() => setMobileMenu((prev) => !prev)}
                    />
               </div>
               </div>
              
               </SectionWrapper>
               
               {/* This is the collapsed mobile menu. */}
               <SectionWrapper
				className={clsx([
					"fixed left-0 w-full top-0 h-full bg-black z-[100] text-white",
					mobileMenu ? "visible" : "hidden",
				])}
			>
				<div className="flex items-center justify-between w-full">
					<div className='font-bold'>
                              {title}
					</div>
					<div>
						<Hamburger
							closed
							handleClick={() => setMobileMenu((prev) => !prev)}
						/>
					</div>
                    </div>
                    <div>

                    </div>
                    <MobileNavMenu handleMenu={handleMenu} label={labelForConsultation} />
			</SectionWrapper>
          </>
         
  )
}

export default Navbar