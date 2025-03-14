import Heading from "@/components/common/heading";
import AccountForm from "@/components/forms/account-form/account-form";
import { currentUser } from "@/lib/get-calls/get-current-user";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/auth");
  }

  return (
    <div className="my-[10px] layoutx">
      <Heading heading="Account Settings" subheading="" />

      <div className="flex flex-col text-[16px] md:text-[18px]">
        <Image
          className="aspect-square rounded-full w-[150px] md:w-[200px] my-3"
          height={500}
          width={500}
          alt=""
          src={user?.profilePic || "/images/defaultProfile.png"}
        />
        <p className="font-semibold">
          {user?.firstName} {user?.lastName}
        </p>
        <p>{user?.email}</p>
        <AccountForm user={user} />
      </div>
    </div>
  );
};

export default Page;
