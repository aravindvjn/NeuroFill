import { cardsItems } from "@/components/cards/contants";
import Heading from "@/components/common/heading";
import InvoiceForm from "@/components/forms/invoice-form/invoice-form";
import React from "react";

const page = () => {
  return (
    <div className="layout">
      <Heading
        subheading={cardsItems[3].subheading}
        heading={cardsItems[3].heading}
      />
      <InvoiceForm />
    </div>
  );
};

export default page;
