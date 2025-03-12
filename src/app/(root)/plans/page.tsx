import { plans } from "@/components/cards/contants";
import Plan from "@/components/cards/plan";
import Heading from "@/components/common/heading";
import React from "react";

const page = () => {
  return (
    <div className="my-[20px] layoutx">
      <Heading
        heading="Our Pricing Plans"
        subheading="Choose a plan that fits your needs"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-[20px] lg:gap-[30px] max-w-[900px] my-8">
        {plans.map((plan, index) => (
          <Plan activePlans={["basic"]} key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default page;
