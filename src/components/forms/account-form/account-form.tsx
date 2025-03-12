"use client";
import Button from "@/components/ui/button";
import PopUp from "@/components/ui/pop-up";
import { requestResetPassword } from "@/lib/actions/login.action";
import React, { Fragment, useState } from "react";
import toast from "react-hot-toast";
import UpdateProfileForm from "./update-profile-form";
import { AccountFormProps } from "./type";
import LogoutButton from "./logout-button";

const AccountForm = ({ user }: AccountFormProps) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  //request a mail to reset the passsword
  const requestChangePassword = async () => {
    setIsLoading(true);

    const res = await requestResetPassword(user?.email);

    setIsLoading(false);
    if (res.success) {
      toast.success(res.message);
      setShowPopUp(false);
    } else {
      toast.error(res.message);
    }
  };

  const classes = "px-4 py-2 rounded text-white";

  return (
    <Fragment>
      <PopUp onClose={() => setShowPopUp(false)} isOpen={showPopUp}>
        <p>Would you like to request a password reset?</p>

        <div className="horizontally-center mt-2">
          <button
            onClick={() => setShowPopUp(false)}
            className={`${classes} bg-red-500 hover:bg-red-600`}
          >
            Cancel
          </button>
          <button
            onClick={requestChangePassword}
            className={`${classes} bg-blue-500 hover:bg-blue-600`}
          >
            {isLoading ? "Processing..." : "Proceed"}
          </button>
        </div>
      </PopUp>

      <div className="self-start horizontally-center">
        <Button
          onClick={() => setShowUpdate((p) => !p)}
          variant="white"
          className="my-3 !shadow !h-[40px] !rounded-md text-[16px]"
        >
          Edit Profile
        </Button>

        <Button
          onClick={() => setShowPopUp(true)}
          variant="white"
          className="my-3 !shadow !h-[40px] leading-tight !rounded-md text-[16px]"
        >
          Change Password
        </Button>
      </div>

      {showUpdate && (
        <UpdateProfileForm user={user} setShowUpdate={setShowUpdate} />
      )}
      <LogoutButton />
    </Fragment>
  );
};

export default AccountForm;
