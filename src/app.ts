import express from "express"
import cookieParser from "cookie-parser"
import logger from "morgan"
import { fileURLToPath } from "url"
import path, { dirname } from "path"

import { errorHandler } from "./middlewares/errorHandler.js"
import indexRouter from "./routes/index.js"
import usersRouter from "./routes/users.js"
import profilesRouter from "./routes/profiles.js"
import photosRouter from "./routes/photos.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "jade")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use("/", indexRouter)
app.use("/users", usersRouter)
app.use("/profiles", profilesRouter)
app.use("/photos", photosRouter)

// Error handling middleware
app.use(errorHandler)

export default app
