import express from "express"
import {
  createProfile,
  getProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
} from "../controllers/ProfileController.js"

const router = express.Router()

router.get("/", getProfiles)
router.get("/:id", getProfileById)
router.post("/", createProfile)
router.put("/:id", updateProfile)
router.delete("/:id", deleteProfile)

export default router
