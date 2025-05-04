import mongoose from "mongoose"
import app from "./app.js"
import config from "./config/config.js"

mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log("MongoDB connected")
    // Start the server
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`)
    })
  })
  .catch((err) => console.error("Mongo connection error:", err))
