import dotenv from "dotenv";
import { createServer } from "http";
import app from "./app.js";

dotenv.config();

const PORT = process.env.SERVER_PORT || 3000;
const server = createServer(app);
server.listen(PORT);

console.log(`Server Listening on  http://localhost:${PORT} 🚀`);