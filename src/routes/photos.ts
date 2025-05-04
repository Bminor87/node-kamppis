import express from "express"
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
router.post("/", createPhoto)
router.put("/:id", updatePhoto)
router.delete("/:id", deletePhoto)

export default router
