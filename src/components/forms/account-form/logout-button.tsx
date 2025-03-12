"use client";
import Button from "@/components/ui/button";
import { logout } from "@/lib/actions/login.action";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const LogoutButton = () => {
  const router = useRouter();
  const logoutHandler = async () => {
    const res = await logout();

    if (res?.success) {
      router.push("/auth");
    }else{
        toast.error("Failed to logout")
    }
  };
  return (
    <div>
      <Button className="h-[40px] px-6 !rounded" onClick={logoutHandler} variant="danger">
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;
