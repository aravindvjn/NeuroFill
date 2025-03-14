"use client";
import Button from "@/components/ui/button";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

const LogoutButton = () => {

  const logoutHandler = async () => {
    try {
      await signOut({ callbackUrl: "/" });
    } catch {
      toast.error("Failed to logout");
    }
  };

  return (
    <div>
      <Button className="h-[40px] mt-2 px-6 !rounded" onClick={logoutHandler} variant="danger">
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;
