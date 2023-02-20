import dotenv from "dotenv";
import { createServer } from "http";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 9000;
const server = createServer(app);
server.listen(PORT);

console.log(`Server Listening on  http://localhost:${PORT} 🚀`);