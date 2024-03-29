import SectionWrapper from "@/components/SectionWrapper";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { asText } from '@prismicio/client'
import Button from "@/components/Button";
/**
 * Props for `ContactSection`.
 */
export type ContactSectionProps =
  SliceComponentProps<Content.ContactSectionSlice>;

/**
 * Component for "ContactSection" Slices.
 */
const ContactSection = ({ slice }: ContactSectionProps): JSX.Element => {
  return (
    <SectionWrapper
      id={slice.slice_type}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-dark text-white py-8"
    >
      <div>
        <h6 className="text-3xl font-title font-semibold mb-2">{slice.primary.title}</h6>
        <p>{asText(slice.primary.subtitle)}</p>

        <form className="my-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstname" className="opacity-80">First name *</label>
            <input name="firstname" placeholder="John..." required className="bg-transparent focus:outline-dotted  border-b-2 pb-2 text-white"></input>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="lastname" className="opacity-80">Last name</label>
            <input name="lastname" placeholder="Doe..." className="bg-transparent focus:outline-dotted  border-b-2 pb-2 text-white"></input>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="opacity-80">Email *</label>
            <input name="email" type="email" required placeholder="John@doe.com..." className="bg-transparent focus:outline-dotted  border-b-2 pb-2 text-white"></input>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="opacity-80">Phone number</label>
            <input name="phone" type="text"  placeholder="(123)-456-7890" className="bg-transparent focus:outline-dotted  border-b-2 pb-2 text-white"></input>
          </div>

          <fieldset className="grid grid-cols-3 gap-4">
            <legend className="opacity-80 mb-4">Nature of inquiry *</legend>
            {Array.isArray(slice.items) && slice.items.length > 0 && slice.items.map((inquiry, index) => { 
              return ( 
                <div key={index} className="flex items-center gap-2">
                  <input required  type="radio" className="w-[25px] h-[25px]" name={inquiry.inquiry_option || ""} value={inquiry.inquiry_option || ""}  />
                  <label htmlFor={inquiry.inquiry_option || ""}>{inquiry.inquiry_option || ""}</label>
                  </div>
              )
          })}
          </fieldset>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="opacity-80">Message</label>
            <textarea name="message" rows={1}  placeholder="I'm interested in.." className="bg-transparent focus:outline-dotted border-b-2 pb-2 text-white"></textarea>
          </div>
          <Button type="submit" className="mt-2" styleType="primary">
            Submit form
          </Button>
          
        </form>
     </div>
    </SectionWrapper>
  );
};

export default ContactSection;
