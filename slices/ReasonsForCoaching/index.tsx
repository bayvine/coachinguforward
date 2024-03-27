import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for reasons_for_coaching (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ReasonsForCoaching;
