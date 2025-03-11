"use client";
import Button from "@/components/ui/button";
import React from "react";

const AccountForm = () => {


  const requestChangePassword= async()=>{
    
  }

  return (
    <div className="self-start horizontally-center">

      <Button variant="white" className="my-3  !h-[40px] !rounded-md text-[16px]">Edit Profile</Button>

      <Button onClick={requestChangePassword} variant="white" className="my-3  !h-[40px] leading-tight !rounded-md text-[16px]">Change Password</Button>

    </div>
  );
};

export default AccountForm;
