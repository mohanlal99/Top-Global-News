import { JWTPayload } from "jose";

import { SignupFormSchema } from "./definitions";

export type UserDataType = {
  name: string;
  email: string;
  password: string;
};
export type StateType = {
  loading: boolean;
  errors: any;
  success: boolean;
};
export type DataStateType = {
  message: string;
  errors: any;
  success: boolean;
};

export interface SessionPayload extends JWTPayload {
  userId: string;
  expiresAt: Date;
}

export interface SignInDataType {
  email: string;
  password: string;
}
export interface SignInStateType {
  message: string;
  loading: boolean;
  errors: any;
  success: boolean;
}

export const handleSignup = async (userData: UserDataType) => {
  const validation = SignupFormSchema.safeParse({
    name: userData.name,
    email: userData.email,
    password: userData.password,
  });

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }
  const validatedData = validation.data;

  return { success: true, validatedData };
};

export const saveSingUpData = async (validatedData: UserDataType) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/sign-up`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      },
    );

    if (!res.ok) {
      return { success: false, error: "Failed to sign up" };
    }
    const response = await res.json();

    return response;
  } catch {
    return { success: false, error: "Sing-up Something went wrong" };
  }
};
export const checkSignInDetails = async (signInData: SignInDataType) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/sign-in`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
      },
    );

    if (!res.ok) {
      const errorResponse = await res.json();

      return {
        success: false,
        error: errorResponse.error || "Failed to sign in",
      };
    }

    const response = await res.json();

    return response; // Return the token and user data
  } catch {
    return { error: "Sign-in Something went wrong", success: false };
  }
};

export const fetchUserDetails = async ({ token }: { token: string }) => {
  if (!token) {
    return { success: false, error: "Unauthorized" };
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/profile`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the headers
        },
      },
    );

    if (!res.ok) {
      const errorData = await res.json();

      return { success: false, error: errorData.error };
    }

    const data = await res.json();

    return { success: true, user: data.user };
  } catch {
    return { success: false, error: "Failed to fetch user data" };
  }
};

export function verifyToken(token: string | null) {
  if (!token) return null;

  try {
    const decoded = JSON.parse(atob(token.split(".")[1]));

    return decoded;
  } catch {
    return null;
  }
}
