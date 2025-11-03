import express from "express";
import cors from "cors";
import "dotenv/config.js";
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
  res.send("API working successfully ✅");
});

// ===== Export App for Vercel =====
export default app;

// ===== Optional for Local Dev =====
// Uncomment below line when running locally (not on Vercel)
// app.listen(port, () => console.log("Server running on port", port));
