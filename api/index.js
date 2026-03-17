import express from "express";
import cors from "cors";
import serverless from "serverless-http";

// ✅ Import main backend app
import app from "../Backend/index.js";

// ✅ CORS setup for production
const corsOptions = {
  origin: [
    "http://localhost:8080",
    "http://localhost:3000",
    "https://www.obcmahasabha.co.in",
    "https://obcmahasabha.co.in"
  ],    
  credentials: true,
};

app.use(cors(corsOptions));

// ✅ Vercel handler
export const handler = serverless(app);