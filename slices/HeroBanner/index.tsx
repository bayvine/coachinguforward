'use client';

import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>;

/**
 * Component for "HeroBanner" Slices.
 */
const HeroBanner = ({ slice }: HeroBannerProps): JSX.Element => {
  return (
    <SectionWrapper
      id={slice.slice_type}
      className="min-h-[40rem] flex justify-end pb-[4rem] flex-col bg-black relative text-white"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
  
      <div className="z-10 relative">
        <h1 className="text-3xl font-title font-bold uppercase text-center">
          <PrismicRichText field={slice.primary.title} components={{
          strong: (payload) => <strong className="text-primary underline">{payload.children}</strong>
          }}/>
        </h1>
      
        <div className="py-2 mt-4 text-center">
        <PrismicRichText field={slice.primary.title_description} />
        </div>
        {/* Button group */}
        <div className="mt-4 flex flex-col gap-3 items-center">
          <Button type="primary" className="w-full">Get a free consultation</Button>
          <span>Or</span>
          <Button type="no-style-secondary" className="w-fit">Contact me</Button>
        </div>
      </div>

      {/* Background video or image */}
      <div className="opacity-40 border-solid border-2 h-full w-full absolute top-0 left-0 z-0">
        <Image alt="" priority className="object-cover w-full h-full"  src={slice.primary.background_media?.url || ""} width={slice.primary.background_media?.width} height={slice.primary.background_media?.height} />
      </div>
    </SectionWrapper>
  );
};

export default HeroBanner;
