import express from "express";
import { uploadCloud } from "../middleware/cloudinaryUpload.js"
import { createMembership, getAllMemberships, getSingleMembership } from "../controllers/membershipController.js";

const router = express.Router();

router.post("/register", uploadCloud.single("imageFile"), createMembership);
router.get("/", getAllMemberships);           // Get all
router.get("/:id", getSingleMembership);  

export default router;