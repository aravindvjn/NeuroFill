"use client";
import React, { ChangeEvent, useState } from "react";
import Input from "./input";
import Button from "@/components/ui/button";
import { createResume } from "@/lib/actions/resume.action";
import { useRouter } from "next/navigation";

const CreateTitle = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [warning, setWarning] = useState<string>("3 - 20 characters required");
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);

    if (e.target.value.length < 3 || e.target.value.length > 30) {
      setWarning("3 - 30 characters required");
    } else {
      setWarning("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.length < 3 || title.length > 30) {
      setError("3 - 30 characters required");
      return;
    }

    setIsPending(true);
    setError(null);

    const res = await createResume(title);

    if (!res?.success) {
      setError(res?.message || "Failed to create a resume.");
      setIsPending(false);
    } else {
      if (!res?.id) return;
      router.push(`/v1/resume/${res?.id}/edit`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[10px] text-text text-start"
    >
      <p className="p2 font-bold">Create new resume</p>

      <Input
        onChange={handleChange}
        value={title}
        maxLength={30}
        minLength={3}
        name="title"
        label="Title"
      />
      {warning && !error && (
        <p className="text-text-secondary text-[12px]">{warning}</p>
      )}
      {error && <p className="text-red-500 text-[12px]">{error}</p>}
      <Button
        isLoading={isPending}
        disabled={isPending}
        className="!rounded !h-[35px] w-[80px]"
      >
        Create
      </Button>
    </form>
  );
};

export default CreateTitle;
