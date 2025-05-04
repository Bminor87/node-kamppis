import { RequestHandler } from "express"
import mongoose from "mongoose"
import { ProfileModel } from "../models/Profile.js"
import createError from "http-errors"

export const createProfile: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const profile = new ProfileModel(req.body)
    await profile.save()
    res.status(201).json(profile)
  } catch (error) {
    next(error)
  }
}

export const getProfiles: RequestHandler = async (_req, res, next) => {
  try {
    const profiles = await ProfileModel.find().populate("user").populate("photos")
    res.json(profiles)
  } catch (error) {
    next(error)
  }
}

export const getProfileById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createError(400, "Invalid profile ID"))
    }

    const profile = await ProfileModel.findById(id).populate("user").populate("photos")

    if (!profile) {
      return next(createError(404, "Profile not found"))
    }

    res.json(profile)
  } catch (error) {
    console.error("Error fetching profile:", error)
    next(error)
  }
}

export const updateProfile: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createError(400, "Invalid profile ID"))
    }

    const profile = await ProfileModel.findByIdAndUpdate(id, req.body, {
      new: true,
    })

    if (!profile) return next(createError(404, "Profile not found"))

    res.json(profile)
  } catch (error) {
    next(error)
  }
}

export const deleteProfile: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createError(400, "Invalid profile ID"))
    }

    const profile = await ProfileModel.findByIdAndDelete(id)

    if (!profile) return next(createError(404, "Profile not found"))

    res.json(profile)
  } catch (error) {
    next(error)
  }
}
