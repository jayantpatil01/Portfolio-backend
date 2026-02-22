import fs from "fs/promises";
import Resume from "../models/ResumeModel.js";

/**
 * Upload Resume
 */
export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "PDF file is required" });
    }

    // Optional: delete old resume (if only 1 allowed)
    const existing = await Resume.findOne();
    if (existing) {
      await fs.unlink(existing.filePath);
      await existing.destroy();
    }

    const resume = await Resume.create({
      filePath: req.file.path,
    });

    res.status(201).json({
      message: "Resume uploaded successfully",
      data: resume,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * Get Resume
 */
export const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      order: [["createdAt", "DESC"]],
    });

    if (!resume) {
      return res.status(404).json({ message: "No resume found" });
    }

    res.sendFile(process.cwd() + "/" + resume.filePath);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


/**
 * Delete Resume
 */
export const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findByPk(req.params.id);

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    await fs.unlink(resume.filePath);
    await resume.destroy();

    res.json({ message: "Resume deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};