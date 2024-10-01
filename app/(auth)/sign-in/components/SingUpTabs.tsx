"use client";
import React, { useState } from "react";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";

import SignUpPage from "./SignUpForm";
import SignInForm from "./SignInForm";

const SignUpForm: React.FC = () => {
  const [selected, setSelected] = useState<string>("login");

  const handleSignUpSuccess = () => {
    setSelected("login");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-success-900 via-foreground-500 to-secondary-900 dark:from-orange-900  dark:via-amber-300  dark:to-rose-900">
      <Card className="max-w-full w-full mx-5 sm:w-[340px] ">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            selectedKey={selected}
            size="md"
            onSelectionChange={(key) => setSelected(key as string)}
          >
            <Tab key="login" title="Login">
              <SignInForm />
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <SignUpPage onSignUpSuccess={handleSignUpSuccess} />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default SignUpForm;
