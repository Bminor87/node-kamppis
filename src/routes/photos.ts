import express from "express"
import { upload } from "../middlewares/uploadMiddleware.js"
import {
  createPhoto,
  getPhotos,
  getPhotoById,
  updatePhoto,
  deletePhoto,
} from "../controllers/PhotoController.js"

const router = express.Router()

router.get("/", getPhotos)
router.get("/:id", getPhotoById)
router.post("/", upload.single("photo"), createPhoto)
router.put("/:id", updatePhoto)
router.delete("/:id", deletePhoto)

export default router
