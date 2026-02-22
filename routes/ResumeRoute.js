import express from "express";
import upload from "../middleware/uploadResume.js";
import {
  uploadResume,
  getResume,
  deleteResume,
} from "../controller/ResumeController.js";

const router = express.Router();

router.post("/", upload.single("resume"), uploadResume);
router.get("/", getResume);
router.delete("/:id", deleteResume);

export default router;