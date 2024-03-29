import { repositoryName } from "@/prismicio";
import { createClient } from "@prismicio/client";

export const getNavigationData = async ()  => { 
     const client = createClient(repositoryName);
     const { data } = await client.getSingle("menu")
     
     if (!data) return {
          title: 'CoachingUForward', 
          label_for_consultation: "Book Consultation"
     };
     
     return data ;
}

export const NAV_ITEMS = [ 
     { 
          id: 'service_section', 
          label: 'Services'
     }, 
     { 
          id: 'about_section', 
          label: 'About Ann'
     }, 
     { 
          id: 'reasons_for_coaching', 
          label: 'Why Coaching?'
     }, 
     { 
          id: 'session_scheduling', 
          label: 'Schedule Session'
     }, 
     { 
          id: 'contact_section', 
          label: 'Contact Ann'
     }, 
]