import { Button } from "@nextui-org/button";
import {
  Input,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { Eye, EyeOff, SquareCheckBig } from "lucide-react";
import React, { useState } from "react";
import { useDisclosure } from "@nextui-org/react";

import {
  DataStateType,
  handleSignup,
  saveSingUpData,
  StateType,
  UserDataType,
} from "@/lib/action/UserAction";

// Initial state
const initialState: UserDataType = {
  name: "",
  email: "",
  password: "",
};

const SignUpPage: React.FC<{ onSignUpSuccess: () => void }> = ({
  onSignUpSuccess,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useState<UserDataType>(initialState);
  const [state, setState] = useState<StateType>({
    loading: false,
    errors: {},
    success: false,
  });
  const [database, setDatabase] = useState<DataStateType>({
    message: "",
    errors: "",
    success: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Reset errors and clear server-side messages
    setDatabase({ ...database, errors: "", message: "" });
    setUserData({ ...userData, [name]: value });

    // Clear specific error when the input changes
    if (state.errors[name]) {
      setState((prev) => ({
        ...prev,
        errors: { ...prev.errors, [name]: "" },
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ ...state, loading: true });

    // Validate form data using the custom `handleSignup` function
    const result = await handleSignup(userData);

    if (result.errors) {
      setState({ ...state, loading: false, errors: result.errors });

      return;
    }

    // Clear errors after validation success
    setState({ ...state, errors: {} });

    if (result.success) {
      const validatedData = result.validatedData;

      const response = await saveSingUpData(validatedData);

      if (response.error) {
        setDatabase({ ...database, errors: response.error });
        setState({ ...state, loading: false });

        return;
      }

      // Display success message and open modal
      setDatabase({ ...database, message: response.message });
      setState({ ...state, loading: false, success: true });
      onOpen(); // Open modal

      // Clear form upon successful signup
      setUserData(initialState);
    } else {
      setState({ ...state, loading: false });
    }
  };

  const handleModalClose = () => {
    onOpenChange();
    onSignUpSuccess();
  };

  return (
    <section className="flex flex-col items-center p-4 md:p-6 lg:p-8">
      <form
        className="flex flex-col gap-4 max-w-md w-full"
        onSubmit={handleSubmit}
      >
        <div>
          <Input
            className="w-full"
            errorMessage={state.errors.name}
            id="name"
            isInvalid={!!state.errors.name}
            label="Name"
            name="name"
            placeholder="Enter your Name"
            type="text"
            value={userData.name}
            variant="bordered"
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            className="w-full"
            errorMessage={state.errors.email}
            id="email"
            isInvalid={!!state.errors.email}
            label="Email"
            name="email"
            placeholder="Enter your Email"
            type="email"
            value={userData.email}
            variant="bordered"
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            className="w-full"
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-none"
                type="button"
                onClick={() => setVisible(!visible)}
              >
                {visible ? (
                  <Eye className="text-2xl" />
                ) : (
                  <EyeOff className="text-2xl" />
                )}
              </button>
            }
            errorMessage={state.errors.password}
            id="password"
            isInvalid={!!state.errors.password}
            label="Password"
            name="password"
            placeholder="Enter your Password"
            type={visible ? "text" : "password"}
            value={userData.password}
            variant="bordered"
            onChange={handleChange}
          />
        </div>

        {/* Display server-side errors */}
        {database.errors && (
          <p className="text-danger text-sm">{database.errors}</p>
        )}
        {/* Display success message */}
        {database.message && (
          <p className="text-success text-sm">{database.message}</p>
        )}

        <Button
          fullWidth
          isDisabled={state.loading}
          isLoading={state.loading}
          type="submit"
        >
          Sign Up
        </Button>
      </form>

      {/* Modal to show success message */}
      <Modal
        isOpen={isOpen}
        placement="center"
        size="sm"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalBody className="flex flex-col gap-2 font-bold">
            <SquareCheckBig size={50} />
            <p className="text-success">Signup Successful</p>
            <p>Your account has been created successfully!</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={handleModalClose}>
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default SignUpPage;
