import { Document, Schema, model } from "mongoose"

export interface User extends Document {
  firstName: string
  lastName: string
  email: string
  dateOfBirth: Date
  gender: "male" | "female" | "other"
  lookingFor: "users" | "rooms" | "both"
  status: "active" | "inactive"
  isOnline: boolean
  createdAt: Date
  updatedAt?: Date
}

const UserSchema = new Schema<User>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    lookingFor: {
      type: String,
      enum: ["users", "rooms", "both"],
      required: true,
    },
    status: { type: String, enum: ["active", "inactive"], required: true },
    isOnline: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  },
)

export const UserModel = model<User>("User", UserSchema)
