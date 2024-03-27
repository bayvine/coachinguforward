import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogSlider`.
 */
export type BlogSliderProps = SliceComponentProps<Content.BlogSliderSlice>;

/**
 * Component for "BlogSlider" Slices.
 */
const BlogSlider = ({ slice }: BlogSliderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_slider (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BlogSlider;
