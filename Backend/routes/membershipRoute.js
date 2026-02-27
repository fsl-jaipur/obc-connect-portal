import express from "express";
import { uploadCloud } from "../middleware/cloudinaryUpload.js"
import { createMembership } from "../controllers/membershipController.js";

const router = express.Router();

router.post("/register", uploadCloud.single("imageFile"), createMembership);

export default router;