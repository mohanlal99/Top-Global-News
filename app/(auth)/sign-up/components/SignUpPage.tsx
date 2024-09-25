"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import {
  handleSignup,
  StateType,
  UserDataType,
} from "../../../../lib/action/UserAction";
import { Eye, EyeOff } from "lucide-react";

const SignUpPage = () => {
  const router = useRouter();
  const [visiable, setVisiable] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserDataType>({
    name: "",
    email: "",
    phone: "",
    password: "", // Fix: update key for password
  });
  const [state, setState] = useState<StateType>({
    loading: false,
    errors: {},
    success: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state,errors:''})
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ ...state, loading: true });
    const result = await handleSignup(userData);
    console.log(result?.errors);
    if (result?.errors) {
      setState({ ...state, loading: false, errors: result.errors });
    } else {
        console.log(result.validateUserData)
      setState({ ...state, loading: false, success: true, errors:{} });
    }
    // console.log(result.validateUserData);
  };

  return (
    <section className="flex flex-col items-center p-4 md:p-6 lg:p-8">
      <form
        className="flex flex-col gap-4 max-w-md w-full"
        onSubmit={handleSubmit}
      >
        <div>
          <Input
            id="name"
            name="name"
            label="Name"
            placeholder="Enter your Name"
            value={userData.name}
            onChange={handleChange}
            type="text"
            variant="bordered"
            isInvalid={state.errors?.name}
            errorMessage={state.errors?.name}
            className="w-full"
          />
        </div>
        <div>
          <Input
            id="email"
            name="email"
            label="Email"
            placeholder="Enter your Email"
            value={userData.email}
            onChange={handleChange}
            type="email"
            variant="bordered"
            isInvalid={state.errors?.email}
            errorMessage={state.errors?.email}
            className="w-full"
          />
        </div>
        <div>
          <Input
            id="phone"
            name="phone"
            label="Phone"
            placeholder="Enter your Phone No"
            value={userData.phone}
            onChange={handleChange}
            type="text"
            variant="bordered"
            isInvalid={state.errors?.phone}
            errorMessage={state.errors?.phone}
            className="w-full"
          />
        </div>
        <div>
          <Input
            id="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
            value={userData.password}
            onChange={handleChange}
            type={visiable?'text':'password'}
            variant="bordered"
            isInvalid={state.errors?.password}
            errorMessage={state.errors?.password}
            className="w-full"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={() => setVisiable(!visiable)}
                aria-label="toggle password visibility"
              >
                {visiable ? (
                  <Eye className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
          />
        </div>
        {/* <p className="text-sm text-danger">{state.errors}</p> */}
        <Button
          variant="bordered"
          color="secondary"
          type="submit"
          isDisabled={state.loading}
          isLoading={state.loading}
          className="mt-4 w-full"
        >
          Sign Up
        </Button>
      </form>
    </section>
  );
};

export default SignUpPage;
