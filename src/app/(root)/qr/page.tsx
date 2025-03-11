import { cardsItems } from "@/components/cards/contants";
import Heading from "@/components/common/heading";
import QRForm from "@/components/forms/qr-form/qr-form";
import React from "react";

const page = () => {
  return (
    <div className="layout">
      <Heading
        subheading={cardsItems[2]?.subheading}
        heading={cardsItems[2]?.heading}
      />
      <QRForm />
    </div>
  );
};

export default page;
