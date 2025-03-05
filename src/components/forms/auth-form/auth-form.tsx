"use client";
import React, { ChangeEvent, Fragment, useState, useEffect } from "react";
import Input from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import BrandName from "@/components/ui/brand-name";
import Button from "@/components/ui/button";
import { UserInput } from "./type";
import { validateUserInput } from "@/lib/helpers/validate-user-input";
import { createPendingUser } from "@/lib/actions/user.action";
import { useActionState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [input, setInput] = useState<UserInput>({
    firstName: { value: "" },
    lastName: { value: "" },
    email: { value: "" },
    password: { value: "" },
  });
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  // Server action state
  const [state, formAction, isPending] = useActionState(createPendingUser, {
    message: "",
    success: false,
  });

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
    const allFieldsValid = Object.values(input).every(
      (field) => field.value.trim() !== "" && !field.error
    );
    setIsDisabled(!allFieldsValid);
  }, [input]);

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

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
    <div>
      {isLogin ? "Does not have an account?" : "Already have an account?"}{" "}
      <button
        className="text-primary cursor-pointer font-semibold"
        onClick={toggleLogin}
      >
        {isLogin ? "Sign Up" : "Sign In"}
      </button>
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div className="layout flex-col min-h-svh center">
        <form
          className="flex flex-col max-w-[400px] w-full px-[30px]"
          action={formAction}
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

          {state.success && <p className="text-green-500">{state.message}</p>}
          {!state.success && <p className="text-red-500">{state.message}</p>}
          
          <Button
            className={`mt-5 !rounded ${isDisabled && "opacity-50"}`}
            type="submit"
            disabled={isPending || isDisabled}
          >
            {isPending ? "Processing..." : isLogin ? "Sign In" : "Register"}
          </Button>
        </form>

        {renderFooter()}
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthForm;
