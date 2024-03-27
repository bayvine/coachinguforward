import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for session_scheduling (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default SessionScheduling;
