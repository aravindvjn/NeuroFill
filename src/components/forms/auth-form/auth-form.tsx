"use client";
import React, { ChangeEvent, Fragment, useState, useEffect } from "react";
import Input from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import BrandName from "@/components/ui/brand-name";
import Button from "@/components/ui/button";
import { UserInput } from "./type";
import { validateUserInput } from "@/lib/validations/validate-user-input";
import { createPendingUser } from "@/lib/actions/user.action";
import { useActionState } from "react";
import { defaultInputValue } from "./constants";
import ForgotPasswordButton from "./forgot-pass-button";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import AuthOptions from "./auth-options";
const AuthForm = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [input, setInput] = useState<UserInput>(defaultInputValue);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const initialState = {
    message: "",
    success: false,
    data: defaultInputValue,
  };

  // Server action state
  const [state, formAction, isPending] = useActionState(
    createPendingUser,
    initialState
  );

  //handle Login
  const handleAction = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!password || !email) {
      toast.error("Please fill all fields");
      return;
    }

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.dismiss();
      router.push("/");
    }
  };

  // Sync state data with input
  useEffect(() => {
    if (state?.data) {
      setInput((prev) => ({
        firstName: {
          value: state?.data?.firstName?.value || prev.firstName?.value || "",
        },
        lastName: {
          value: state?.data?.lastName?.value || prev.lastName?.value || "",
        },
        email: { value: state?.data?.email?.value || prev.email.value },
        password: {
          value: state?.data?.password?.value || prev.password.value,
        },
      }));
    }
  }, [state?.data]);

  // Enable button only if all required fields are filled and valid
  useEffect(() => {
    const allFieldsValid = isLogin
      ? true
      : Object.values(input).every(
          (field) => field.value.trim() !== "" && !field.error
        );
    setIsDisabled(!allFieldsValid);
  }, [input]);

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  //useEffect to listen to the state
  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
      } else {
        toast.error(state.message);
      }
    }
  }, [state.message]);

  // Monitor input changes and validate
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = !isLogin && validateUserInput(name, value);

    setInput((prev) => ({
      ...prev,
      [name]: { value, error },
    }));
  };

  // Render register-only inputs
  const renderForRegister = !isLogin && (
    <Fragment>
      <Input
        label="First Name"
        error={input.firstName?.error || ""}
        name="firstName"
        type="text"
        onChange={handleChange}
        value={input.firstName?.value || ""}
      />
      <Input
        label="Last Name"
        error={input.lastName?.error || ""}
        name="lastName"
        type="text"
        onChange={handleChange}
        value={input.lastName?.value || ""}
      />
    </Fragment>
  );

  // Render footer
  const renderFooter = () => (
    <div className="mt-2">
      {isLogin ? "Does not have an account?" : "Already have an account?"}{" "}
      <button className="text-blue-600 hover:underline " onClick={toggleLogin}>
        {isLogin ? "Sign Up" : "Sign In"}
      </button>
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div className="layout flex-col min-h-svh center">
        <form
          className="flex flex-col gap-[10px] max-w-[400px] w-full px-[30px]"
          action={isLogin ? handleAction : formAction}
        >
          <div className="center mb-4">
            <BrandName size={30} />
          </div>

          {renderForRegister}

          <Input
            label="Email"
            name="email"
            type="email"
            onChange={handleChange}
            value={input.email.value}
            error={input.email.error}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
            value={input.password.value}
            error={input.password.error}
          />

          {state.success && (
            <p className="text-green-500 text-[14px] md:text-[16px]">
              {state.message}
            </p>
          )}
          {!state.success && (
            <p className="text-red-500 text-[14px] md:text-[16px]">
              {state.message}
            </p>
          )}

          <Button
            className={`mt-[5px] !rounded ${isDisabled && "opacity-50"}`}
            type="submit"
            disabled={isPending || isDisabled}
          >
            {isPending ? "Processing..." : isLogin ? "Sign In" : "Register"}
          </Button>
        </form>


        <AuthOptions />
        {renderFooter()}
        {isLogin && <ForgotPasswordButton />}
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthForm;
