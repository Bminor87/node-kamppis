import express from "express"
import { Request, Response, NextFunction } from "express"
const router = express.Router()

/* GET home page. */
router.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.send("REST API Working")
})

export default router
