import React from "react";
import { PlanIDs, PlanType } from "./type";
import { RxCrossCircled } from "react-icons/rx";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { SiBoosty } from "react-icons/si";
import Button from "../ui/button";

type Props = {
  activePlans: PlanIDs[];
};

const Plan = ({
  description,
  features,
  id,
  name,
  price,
  activePlans,
}: PlanType & Props) => {
  const featureList = Object.keys(features);

  const isActive = activePlans.includes(id as PlanIDs);
  return (
    <div className="shadow shadow-border flex items-center flex-col mx-auto max-w-[280px] rounded-lg p-4 lg:p-8 justify-between">
      <div className="flex items-center flex-col">
        <div className="h-8 w-8 rounded-full center bg-purple-100 border border-purple-400 my-2 text-purple-800">
          <SiBoosty />
        </div>

        <p className="text-purple-600 font-bold">{name}</p>
        <p className="m-3 font-semibold text-2xl">{price}</p>
        <p className="text-[12px]  mb-4 md:text-[12px] text-center">
          {description}
        </p>

        <div className="flex flex-col gap-[10px]">
          {featureList.map((feature,i) => (
            <span key={i} className="text-[12px] flex items-start gap-2">
              <span className="mt-[2px]">
                {features[feature] ? (
                  <IoCheckmarkCircleOutline size={18} color="green" />
                ) : (
                  <RxCrossCircled color="red" size={18} />
                )}
              </span>
              {feature}
            </span>
          ))}
        </div>
      </div>

      <Button
        className="mt-6 w-full"
        variant={isActive ? "secondary" : "primary"}
      >
        {isActive ? "Active" : "Buy"}
      </Button>
    </div>
  );
};

export default Plan;
