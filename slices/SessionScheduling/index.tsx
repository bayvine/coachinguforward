import SectionWrapper from "@/components/SectionWrapper";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { asText } from '@prismicio/client'
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import Button from "@/components/Button";
/**
 * Props for `SessionScheduling`.
 */
export type SessionSchedulingProps =
  SliceComponentProps<Content.SessionSchedulingSlice>;

/**
 * Component for "SessionScheduling" Slices.
 */
const SessionScheduling = ({ slice }: SessionSchedulingProps): JSX.Element => {
  return (
    <SectionWrapper
      id={slice.slice_type}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-offwhite"
    >
      <h5 className="font-semibold text-3xl font-title">{slice.primary.title}</h5>
      <p className="text-lg mt-2"> {asText(slice.primary.description)} </p>
      <div className="py-5 gap-4 flex flex-col">
        {Array.isArray(slice.items) && slice.items.length > 0 && slice.items.map((schedule, index) => { 

          return (
            
            <PrismicNextLink target="_blank" rel="noreferrer" key={index} className="w-full" field={schedule.button_link}>
                {schedule.button_color == 'Blue background, white text' && <Button className="w-full" styleType="blue"> {schedule.button_text}</Button>}
              {schedule.button_color == 'Green background, white text' && 
                  <Button className="w-full" styleType="primary"> {schedule.button_text}</Button>
                }
              {schedule.button_color == 'White background, green border, green text' &&
                <Button className="w-full" styleType="secondary"> {schedule.button_text}</Button>
                }
            </PrismicNextLink>
          )
        })}
      </div>
    </SectionWrapper>
  );
};

export default SessionScheduling;
