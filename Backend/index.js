import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import membershipRoute from "./routes/membershipRoute.js";
import donationRoute from "./routes/donationRoute.js";

dotenv.config();

const app = express();

// ✅ Database connection (cached for serverless)
connectDB(process.env.MONGODB_URI);

// ✅ CORS - Vercel ke liye bhi kaam karega
app.use(cors({
  origin: [
    "http://localhost:8080",
    "http://localhost:3000",
    "https://www.obcmahasabha.co.in",
    "https://obcmahasabha.co.in"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/api/membership", membershipRoute);
app.use("/api/donations", donationRoute);

// ✅ Health check
app.get("/api", (req, res) => {
  res.json({ 
    message: "Backend API is running on Vercel!",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

// ✅ Local development ke liye
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Local server running on port ${PORT}`);
  });
}

// ✅ Export for Vercel
export default app;
