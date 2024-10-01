import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { Connect } from "@/utils/connect";
import { User } from "@/models/User";

// Use your JWT secret from environment variables
const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 },
      );
    }

    // Connect to the database
    await Connect();

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found. Check email or sign up." },
        { status: 401 },
      );
    }

    // Check if the password matches
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { success: false, error: "Invalid password" },
        { status: 401 },
      );
    }

    // Create JWT token (valid for 1 day)
    const token = jwt.sign(
      { id: user._id, email: user.email, isAdmin: user.isAdmin },
      JWT_SECRET,
      { expiresIn: "1d" }, // Set expiration to 1 day
    );

    // Send the token and user data in response
    return NextResponse.json(
      {
        success: true,
        message: "Login Successful",
        token, // Send the token to the frontend
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          admin: user.isAdmin,
        },
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Server Error. Check network connection" },
      { status: 500 },
    );
  }
}
