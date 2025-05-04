import express from "express"
import { Request, Response, NextFunction } from "express"

const router = express.Router()

router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.send("This is a test")
})

export default router
