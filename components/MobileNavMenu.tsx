import { NAV_ITEMS, getNavigationData } from "@/utils/utils";
import Link from "next/link";
import { Cta } from "./Cta";

export const MobileNavMenu = ({handleMenu, label} : {handleMenu: () => void, label : string | null}) => {

     return ( 
          <div className="flex items-start justify-center w-full h-full mt-20">
               <ul className="flex flex-col justify-center gap-8 text-center">
                    {NAV_ITEMS.map((item, index) => { 
                         return ( 
                         <li key={index}>
                              <Link
                                   onClick={handleMenu}
                                   href={`#${item.id}`}
                                   
                              >
                              {item.label}
                              </Link>
				</li>
                         )    
                    })}
                    <li>
                         <Cta onClick={handleMenu} label={label} />	
				</li>
			</ul>
		</div>
     )
}
