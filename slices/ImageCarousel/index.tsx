import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageCarousel`.
 */
export type ImageCarouselProps =
  SliceComponentProps<Content.ImageCarouselSlice>;

/**
 * Component for "ImageCarousel" Slices.
 */
const ImageCarousel = ({ slice }: ImageCarouselProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_carousel (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ImageCarousel;
