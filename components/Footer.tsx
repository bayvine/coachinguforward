import { repositoryName } from '@/prismicio';
import { asText, createClient } from '@prismicio/client';
import React from 'react'
import SectionWrapper from './SectionWrapper';
import { NAV_ITEMS } from '@/utils/utils';
import Link from 'next/link';
import SocialMedia from './SocialMedia';

const Footer = async () => {
     const client = createClient(repositoryName);
     const { data } = await client.getSingle("home")

     console.log(data);
     
     return (   
          <footer>
               <SectionWrapper>
                    <div>
                         <p className='font-semibold text-xl font-title pb-2'>{data.your_business_name}</p>
                         <p className='opacity-50'>{data.your_business_motto}</p>
                         <ul className='mt-4 flex flex-col gap-2 font-semibold'>
                              {NAV_ITEMS.map((item, index) => { 
                              return ( 
                                   <li key={index} >
                                   <Link href={`#${item.id}`}>
                                   {item.label}
                                   </Link>
                                   </li>
                                   )
                              })}
                         </ul>
                    </div>
                    <div className='mt-4 flex flex-col gap-4'>
                         <div>
                              <p className='font-semibold text-xl font-title pb-2'>Contact</p>
                              <p>{data.location}</p>
                              <p>Email: <a className='underline' href={`mailto:${data.email_address}`}>{data.email_address}</a></p>
                              <p>Phone: <a  className='underline' href={`tel:${data.phone_number}`}>{data.phone_number}</a></p>
                         </div>
                         <div>
                              <p className='font-semibold text-xl font-title pb-2'>Hours</p>
                              <p className='w-80'>{asText( data.hours_opened)}</p>
                         </div>
                    </div>

                    <hr className='border border-solid my-4'/>
                    <div>

                         <p className='opacity-50'>{data.copyright_label}</p>
                                   <SocialMedia  className='mt-3' />

                    </div>
               </SectionWrapper>                             
          </footer>         
     )
}

export default Footer