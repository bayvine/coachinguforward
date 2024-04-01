import { repositoryName } from '@/prismicio';
import { createClient } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';


interface SocialMediaProps { 

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
            <ul>
                 {linkedin && <PrismicNextLink field={linkedin} ><FaLinkedin /></PrismicNextLink>}
                 {facebook && <PrismicNextLink field={facebook} ><FaFacebook /></PrismicNextLink>}
                 {whatsapp && <PrismicNextLink field={whatsapp} ><FaWhatsapp /></PrismicNextLink>}
                 {twitter && <PrismicNextLink field={twitter} ><FaTwitter /></PrismicNextLink>}
                 {instagram && <PrismicNextLink field={instagram} ><FaInstagram /></PrismicNextLink>}
            </ul>
    </div>
  )
}

export default SocialMedia