"use client";
import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import { checkSignInDetails } from "@/lib/action/UserAction";

const SignInForm: React.FC = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [signInState, setSignInState] = useState({
    message: "",
    loading: false,
    errors: "",
    success: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSignInData({ ...signInData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignInState({ ...signInState, loading: true });

    const result = await checkSignInDetails(signInData);

    if (result.error) {
      setSignInState({ ...signInState, loading: false, errors: result.error });

      return;
    } else {
      const token = result?.token;

      Cookies.set("authToken", token, { expires: 7 });
      setSignInState({
        ...signInState,
        loading: false,
        message: result.message,
        success: true,
      });
      router.push("/profile");
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        isRequired
        label="Email"
        name="email"
        placeholder="Enter your email"
        value={signInData.email}
        onChange={handleChange}
      />
      <Input
        isRequired
        endContent={
          <button
            aria-label="toggle password visibility"
            type="button"
            onClick={() => setVisible(!visible)}
          >
            {visible ? <Eye /> : <EyeOff />}
          </button>
        }
        label="Password"
        name="password"
        placeholder="Enter your password"
        type={visible ? "text" : "password"}
        value={signInData.password}
        onChange={handleChange}
      />
      {signInState.errors && (
        <p className="text-sm text-danger">{signInState.errors}</p>
      )}
      {signInState.message && (
        <p className="text-sm text-success">{signInState.message}</p>
      )}
      <Button
        fullWidth
        isDisabled={signInState.loading}
        isLoading={signInState.loading}
        type="submit"
      >
        Sign In
      </Button>
    </form>
  );
};

export default SignInForm;
