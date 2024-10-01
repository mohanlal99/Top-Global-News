import mongoose, { Schema } from "mongoose";

interface UserSchemaType {
  name: string;
  email: string;
  password: string;
  username: string;
  isAdmin: boolean;
  role: "owner" | "admin" | "user";
}

const UserSchema = new Schema<UserSchemaType>(
  {
    name: { type: String, require: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false },
    role: { type: String, default: "user" },
  },
  { timestamps: true },
);

export const User =
  (mongoose.models.User as mongoose.Model<UserSchemaType>) ||
  mongoose.model<UserSchemaType>("User", UserSchema);
