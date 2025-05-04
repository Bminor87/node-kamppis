import { Document, Schema, model, Types } from "mongoose"

import { User } from "./User.js"
import { Photo } from "./Photo.js"

export interface Profile extends Document {
  id?: string
  user: User // or userId?
  bio: string
  photos: Photo[]
  status: "active" | "inactive"
  createdAt: Date
  updatedAt?: Date
}

const ProfileSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    photos: [
      {
        type: Types.ObjectId,
        ref: "Photo",
      },
    ],
    status: {
      type: String,
      enum: ["active", "inactive"],
      required: true,
    },
  },
  {
    timestamps: true, // createdAt and updatedAt
  },
)

export const ProfileModel = model("Profile", ProfileSchema)
