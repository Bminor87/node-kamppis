import { RequestHandler } from "express"
import mongoose from "mongoose"
import createError from "http-errors"
import { PhotoModel } from "../models/Photo.js"

export const createPhoto: RequestHandler = async (req, res, next) => {
  try {
    const photo = new PhotoModel(req.body)
    await photo.save()
    res.status(201).json(photo)
  } catch (error) {
    next(error)
  }
}

export const getPhotos: RequestHandler = async (_req, res, next) => {
  try {
    const photos = await PhotoModel.find().populate("profile")
    res.json(photos)
  } catch (error) {
    next(error)
  }
}

export const getPhotoById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createError(400, "Invalid photo ID"))
    }

    const photo = await PhotoModel.findById(id).populate("profile")

    if (!photo) {
      return next(createError(404, "Photo not found"))
    }

    res.json(photo)
  } catch (error) {
    next(error)
  }
}

export const updatePhoto: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createError(400, "Invalid photo ID"))
    }

    const photo = await PhotoModel.findByIdAndUpdate(id, req.body, {
      new: true,
    })

    if (!photo) {
      return next(createError(404, "Photo not found"))
    }

    res.json(photo)
  } catch (error) {
    next(error)
  }
}

export const deletePhoto: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createError(400, "Invalid photo ID"))
    }

    const photo = await PhotoModel.findByIdAndDelete(id)

    if (!photo) {
      return next(createError(404, "Photo not found"))
    }

    res.json(photo)
  } catch (error) {
    next(error)
  }
}
