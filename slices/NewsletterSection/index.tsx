import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NewsletterSection`.
 */
export type NewsletterSectionProps =
  SliceComponentProps<Content.NewsletterSectionSlice>;

/**
 * Component for "NewsletterSection" Slices.
 */
const NewsletterSection = ({ slice }: NewsletterSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for newsletter_section (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default NewsletterSection;
