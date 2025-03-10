import React from "react";
import Banner from "./banner";

const InvoiceBanner = () => {
  return (
    <Banner
      title="Create Professional Invoices"
      description="Generate and download invoices quickly for your business transactions."
      link="/invoice"
       background="bg-gradient-to-t from-green-400 to-green-800"
       icon="invoice"
    />
  );
};

export default InvoiceBanner;
