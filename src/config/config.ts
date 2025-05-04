// Almost line for line from:
// https://blog.logrocket.com/express-typescript-node/

// My changes:
// Changed || to ?? in nodeEnv config
// Added mongoUri

import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  mongoUri: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV ?? "development",
  mongoUri: process.env.MONGO_URI ?? "mongodb://localhost:27017/myapp",
};

export default config;
