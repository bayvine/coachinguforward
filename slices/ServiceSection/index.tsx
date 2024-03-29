import SectionWrapper from "@/components/SectionWrapper";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `ServiceSection`.
 */
export type ServiceSectionProps =
  SliceComponentProps<Content.ServiceSectionSlice>;

/**
 * Component for "ServiceSection" Slices.
 */
const ServiceSection = ({ slice }: ServiceSectionProps): JSX.Element => {
  return (
    <SectionWrapper
      id={slice.slice_type}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="font-title font-semibold text-3xl">
        {slice.primary.title}
      </h2>
      <div className="py-2"><PrismicRichText field={slice.primary.description} /></div>
      <div className="flex flex-col gap-5">
        {Array.isArray(slice.items) && slice.items.length > 0 && slice.items.map((item, index) => 
          <article key={index}>
            <Image alt={item.service_image.alt || ""} className="object-cover w-full aspect-square mb-3" src={item.service_image?.url || ""} width={item.service_image.dimensions?.width} height={item.service_image.dimensions?.height} />
            <span className="font-bold text-xl">{item.service_title
            }</span>
            <div className="">
              <PrismicRichText field={item.service_description} />
            </div>
          </article>
      )}
      </div>
    </SectionWrapper>
  );
};

export default ServiceSection;
