import { repositoryName } from '@/prismicio';
import { createClient } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';


interface SocialMediaProps { 
     className?: string

}
const SocialMedia = async (props : SocialMediaProps) => {
     const client = createClient(repositoryName);
     const home = await client.getSingle("home")
     
     const linkedin = home.data.linkedin || null;
     const facebook = home.data.facebook || null;
     const whatsapp = home.data.whatsapp || null;
     const twitter = home.data.twitter || null;
     const instagram = home.data.instagram || null;

     
  return (
       <div>
            <ul className={clsx([
                 props.className,
                    'flex gap-2 text-3xl'
            ])}>
                 {linkedin && <PrismicNextLink field={linkedin} ><FaLinkedin  className='fill-blue-600 '/></PrismicNextLink>}
                 {facebook && <PrismicNextLink field={facebook} ><FaFacebook className=' fill-blue-700' /></PrismicNextLink>}
                 {whatsapp && <PrismicNextLink field={whatsapp} ><FaWhatsapp className=' fill-green-600'/></PrismicNextLink>}
                 {twitter && <PrismicNextLink field={twitter} ><FaXTwitter className=' fill-current'/></PrismicNextLink>}
                 {instagram && <PrismicNextLink field={instagram} ><FaInstagram className=' fill-rose-600' /></PrismicNextLink>}
            </ul>
    </div>
  )
}

export default SocialMedia