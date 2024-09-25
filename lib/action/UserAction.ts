import { Connect } from "@/utils/connect";
import { SignupFormSchema } from "./definitions";
import { User } from "@/models/User";
import { JWTPayload } from "jose";
import { createSession } from "./cookies";

export type UserDataType = {
  name: string;
  email: string;
  phone: string;
  password: string;
};
export type StateType = {
  loading: boolean;
  errors: any;
  success: boolean;
};


export interface SessionPayload extends JWTPayload {
  userId: string;
  expiresAt: Date;
}

export const handleSignup = async (userData: UserDataType) => {
  const validation = SignupFormSchema.safeParse({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    password: userData.password,
  });
  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }
  const validateUserData = validation.data;
  try {
    //  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/`)
    return { success: true, message: "success", validateUserData };
  } catch (error) {
    return { errors: { database: "Error saving user to database" } };
  }
};
