import React from "react";

type Props = {
  heading: string;
  subheading: string;
};
const Heading = ({ heading, subheading }: Props) => {
  return (
    <div>
      <p className="p1 font-semibold">{heading}</p>
      <p className="p3">{subheading}</p>
    </div>
  );
};

export default Heading;
