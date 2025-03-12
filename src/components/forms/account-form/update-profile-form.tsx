"use client";
import React, { useState } from "react";
import { UpdateProfieProps } from "./type";
import Input from "../resume-form/input";
import Button from "@/components/ui/button";
import { updateProfile } from "@/lib/actions/user.action";
import toast from "react-hot-toast";

const UpdateProfileForm = ({ setShowUpdate, user }: UpdateProfieProps) => {
  const [input, setInput] = useState<UpdateProfieProps["user"]>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await updateProfile(input.firstName, input.lastName || "");

    if (res.success) {
      toast.success(res.message);
      setShowUpdate(false);
    } else {
      toast.error(res.message);
    }

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative max-w-[350px] flex flex-col gap-[15px]"
    >
      <Input
        name="firstName"
        onChange={handleChange}
        value={input.firstName}
        label="First Name"
      />
      <Input
        name="lastName"
        onChange={handleChange}
        value={input.lastName || ""}
        label="Last Name"
      />
      <Button className="h-[40px] !rounded" variant="normal">
        Save Changes
      </Button>
    </form>
  );
};

export default UpdateProfileForm;
