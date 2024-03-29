import SectionWrapper from "@/components/SectionWrapper";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as prismicio from '@prismicio/client'
import Image from "next/image";
import Button from "@/components/Button";

/**
 * Props for `AboutSection`.
 */
export type AboutSectionProps = SliceComponentProps<Content.AboutSectionSlice>;

/**
 * Component for "AboutSection" Slices.
 */
const AboutSection = ({ slice }: AboutSectionProps): JSX.Element => {
  return (
    <SectionWrapper
      className="bg-dark text-white py-5 relative"
      id={slice.slice_type}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col gap-10">

        <div>
          <h3 className="text-3xl font-title font-semibold mb-8">
          <PrismicRichText components={{
            strong: (payload) => <strong className="text-primary">{payload.children}</strong>
          }} field={slice.primary.title} />
        </h3>
        {Array.isArray(slice.items) && slice.items.length > 0 && slice.items.map((paragraphWithQuote, index) => { 
          return ( 
            <div className="text-lg" key={index}>
              <PrismicRichText field={paragraphWithQuote.paragraph} />
            
              {prismicio.asText(paragraphWithQuote.quote_field)  &&
                <div className="italic text-xl my-5  font-quote text-primary ">
                  {prismicio.asText(paragraphWithQuote.quote_field)}
                </div>
              }
            </div>
          )
        })}
        
        </div>
      
        <div className="flex flex-col gap-8">
          <div className="relative ">
            <Image className="aspect-square object-cover" src={slice?.primary.anns_profile_picture.url || ""} alt={slice.primary.anns_profile_picture.alt || ""} width={slice.primary.anns_profile_picture.dimensions?.width} height={slice.primary.anns_profile_picture.dimensions?.height} />
            <Image className="absolute bottom-0  right-0 w-[120px]" src={slice?.primary.credential_symbol.url || ""} alt={slice.primary.credential_symbol.alt || ""} width={slice.primary.credential_symbol.dimensions?.width} height={slice.primary.credential_symbol.dimensions?.height} />
          </div>  
          {/* Button group */}
          {slice.primary.free_consultation_label && slice.primary.cta_label && <div className="flex flex-col gap-4">
            <Button styleType="primary">{slice.primary.cta_label}</Button>
            <Button styleType='tertiary'>{slice.primary.free_consultation_label}</Button>
          </div>}
        </div>
      </div>

      
    </SectionWrapper>
  );
};

export default AboutSection;
