import multer from "multer"
import path, { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, path.join(__dirname, "../uploads"))
  },
  filename: (_req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  },
})

export const upload = multer({ storage })
