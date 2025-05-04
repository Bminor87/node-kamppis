import { Application, RequestHandler, Request, Response, NextFunction } from "express"
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

export const getUserById: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const user = await UserModel.findById(req.params.id)
    if (!user) createError(404, "User not found")
    res.json(user)
  } catch (error) {
    next(error)
  }
}

// export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     })
//     if (!user) return res.status(404).json({ message: "User not found" })
//     res.json(user)
//   } catch (error) {
//     next(error)
//   }
// }

// export const deleteUser = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ): Promise<Response<any, Record<string, any>> | undefined> => {
//   try {
//     const user = await UserModel.findByIdAndDelete(req.params.id)
//     if (!user) return res.status(404).json({ message: "User not found" })
//     res.json(user)
//   } catch (error) {
//     next(error)
//   }
// }
