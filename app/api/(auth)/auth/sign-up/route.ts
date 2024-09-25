import { createSession } from "@/lib/action/cookies";
import { SignupFormSchema } from "@/lib/action/definitions";
import { UserDataType } from "@/lib/action/UserAction";
import { User } from "@/models/User";
import { Connect } from "@/utils/connect";
import { errors } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { promise } from "zod";

export async function POST(req: NextRequest) {
  const { name, email, phone, password }: UserDataType = await req.json();
  try {
    await Connect();
    const newUserName = `@${(name.trim().replace(/\s+/g, "").replace(/[^\w]/g, "_") + phone.slice(-5)).slice(0, 20)}`;
    // const exitsusername = await User.findOne({ username: newUserName });
    // const exitsuseremail = await User.findOne({ email });
    // const exitsuserphone = await User.findOne({ phone });
    const [exitsusername, exitsuseremail, exitsuserphone] = await Promise.all([
      User.findOne({ username: newUserName }),
      User.findOne({ email }),
      User.findOne({ phone }),
    ]);
    if (exitsusername || exitsuseremail || exitsuserphone) {
      return NextResponse.json({success:false ,error:"User allredy exits"});
    }
    const newUser = new User({
      name,
      email,
      phone,
      username: newUserName,
      password,
    });
    await newUser.save();
    await createSession(newUser._id.toString());
    return NextResponse.json({ success: true, message: "SignUp Successfull" });
  } catch (error) {
    return NextResponse.json({
      errors: { error: "Something went wrong" },
    });
  }
}
