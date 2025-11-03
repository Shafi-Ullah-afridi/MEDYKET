import express from "express";
import cors from "cors";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoutes.js";
import doctorRouter from "./routes/doctorRoutes.js";
import userRouter from "./routes/userRoutes.js";

// ===== App Config =====
const app = express();
const port = process.env.PORT || 4000;

// ===== Database & Cloudinary Connections =====
connectDB();
connectCloudinary();

// ===== Middleware =====
app.use(express.json());
app.use(cors());

// ===== API Routes =====
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);

// ===== Test Route =====
app.get("/", (req, res) => {
  res.send("API working successfully");
});

// ===== Serve Frontend Build (for Vercel) =====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// ===== Export App for Vercel =====
export default app;

// ===== Optional for Local Dev =====
// Uncomment this only if testing locally
// app.listen(port, () => console.log("Server started on port", port));
