import { RequestHandler } from "express"
import mongoose from "mongoose"
import { UserModel } from "../models/User.js"
import createError from "http-errors"

export const createUser: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const user = new UserModel(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (error) {
    next(error)
  }
}

export const getUsers: RequestHandler = async (_req, res, next) => {
  try {
    const users = await UserModel.find()
    res.json(users)
  } catch (error) {
    next(error)
  }
}

export const getUserById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createError(400, "Invalid user ID"))
    }

    const user = await UserModel.findById(id)

    if (!user) {
      return next(createError(404, "User not found"))
    }

    res.json(user)
  } catch (error) {
    console.error("Error fetching user:", error)
    next(error)
  }
}

export const updateUser: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(createError(400, "Invalid user ID"))
    }

    const user = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated user
    })

    if (!user) next(createError(404, "User not found"))
    res.json(user)
  } catch (error) {
    next(error)
  }
}

export const deleteUser: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id)
    if (!user) next(createError(404, "User not found"))
    res.json(user)
  } catch (error) {
    next(error)
  }
}
