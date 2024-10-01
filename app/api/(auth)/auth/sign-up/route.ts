import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { UserDataType } from "@/lib/action/UserAction";
import { User } from "@/models/User";
import { Connect } from "@/utils/connect";

export async function POST(req: NextRequest) {
  const { name, email, password }: UserDataType = await req.json();

  try {
    if (!name || !email || !password) {
      return NextResponse.json({
        success: false,
        error: "All filed are required",
      });
    }
    await Connect();

    const newUserName = `@${name.trim().replace(/\s+/g, "").replace(/[^\w]/g, "_")}`;
    // const exitsusername = await User.findOne({ username: newUserName });
    // const exitsuseremail = await User.findOne({ email });
    // const exitsuserphone = await User.findOne({ phone });
    const [exitsusername, exitsuseremail] = await Promise.all([
      User.findOne({ username: newUserName }),
      User.findOne({ email }),
    ]);

    if (exitsusername || exitsuseremail) {
      return NextResponse.json({ success: false, error: "User already exits" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      username: newUserName,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({
      success: true,
      message: "Signup Successfull",
      newUser,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Server Error Check Network Connection",
      },
      { status: 500 },
    );
  }
}
