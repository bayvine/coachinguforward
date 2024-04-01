import { repositoryName } from '@/prismicio';
import { createClient } from '@prismicio/client';
import React from 'react'
import SectionWrapper from './SectionWrapper';
import { NAV_ITEMS } from '@/utils/utils';
import Link from 'next/link';

const Footer = async () => {
     const client = createClient(repositoryName);
     const {data} = await client.getSingle("home")
     return (   
          <footer>
               <SectionWrapper>
                    <div>
                         <p className='font-semibold text-xl font-title pb-2'>{data.your_business_name}</p>
                         <p className='opacity-50'>{data.your_business_motto}</p>
                         <ul className='mt-4 flex flex-col gap-2'>
                              {NAV_ITEMS.map((item, index) => { 
                              return ( 
                                   <li key={index} className='font-semibold'>
                                   <Link href={`#${item.id}`}>
                                   {item.label}
                                   </Link>
                                   </li>
                                   )
                              })}
                         </ul>
                    </div>
                    <div>
                         <div>
                              <p className='font-semibold text-xl font-title pb-2'>Contact</p>
                         </div>
                         <div>
                              <p className='font-semibold text-xl font-title pb-2'>Hours</p>

                         </div>
                    </div>

                    <div>

                    </div>
               </SectionWrapper>                             
          </footer>         
     )
}

export default Footer