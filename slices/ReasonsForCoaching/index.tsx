import SectionWrapper from "@/components/SectionWrapper";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `ReasonsForCoaching`.
 */
export type ReasonsForCoachingProps =
  SliceComponentProps<Content.ReasonsForCoachingSlice>;

/**
 * Component for "ReasonsForCoaching" Slices.
 */
const ReasonsForCoaching = ({
  slice,
}: ReasonsForCoachingProps): JSX.Element => {
  return (
    <SectionWrapper
      className=" bg-offwhite"
      data-slice-type={slice.slice_type}
      id={slice.slice_type}
      data-slice-variation={slice.variation}
    >

      {/* Title */}
      <div>
        <span className="underline">
            {slice.primary.subtitle}
        </span>
        <h4 className="font-title font-semibold text-3xl mb-2">{slice.primary.title}</h4>
        <PrismicRichText field={slice.primary.descriptiont_itle} />

        {/* Reasons */}
        <div className="flex justify-center flex-col items-center gap-5 my-8">
        {Array.isArray(slice.items) && slice.items.length > 0 && slice.items.map((reason, index) => { 
          return (
            <div key={index} className="flex flex-col gap-2 w-[320px]  items-center">
              {/* image */}
              <div className="bg-secondary w-[5rem] aspect-square rounded-full flex justify-center items-center"> 
                <Image src={reason.logo.url || ""} alt={reason.logo.alt || ""} width={reason.logo.dimensions?.width || 0} height={reason.logo.dimensions?.height || 0} className="w-[2.5rem] fill-white"/>
              </div>
              <div>
                <p className="text-center font-bold text-lg">{reason.reason_title}</p>
                <PrismicRichText components={(type, node, content, children) => <p className="text-center">{content}</p>} field={reason.reason_description} />
                </div>
            </div>
          )
        })}
        </div>
      </div>
      
      {/* Image */}
      <div>
        <Image className="rounded-lg aspect-video object-cover w-[40rem] " src={slice.primary.image.url || ""} width={slice.primary.image.dimensions?.width} height={slice.primary.image.dimensions?.height} alt={slice.primary.image.alt || ""} />
      </div>
    </SectionWrapper>
  );
};

export default ReasonsForCoaching;
