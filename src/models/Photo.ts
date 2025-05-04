import { Document, Schema, model, Types } from "mongoose"

import { Profile } from "./Profile.js"

export interface Photo {
  id?: string
  profile: Profile // or profileId?
  url: string
  isProfilePhoto: boolean
  createdAt: Date
  updatedAt?: Date
}

const PhotoSchema = new Schema(
  {
    profile: {
      type: Types.ObjectId,
      ref: "Profile",
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    isProfilePhoto: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // createdAt and updatedAt
  },
)

export const PhotoModel = model("Photo", PhotoSchema)
