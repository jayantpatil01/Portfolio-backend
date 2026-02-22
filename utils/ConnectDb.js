import sequelize from "../config/Database.js";

export const connectDB = async () => {
  try {
    // Test connection
    await sequelize.authenticate();
    console.log("✅ MySQL Connected Successfully");

    // Sync all models
    await sequelize.sync();
    console.log("✅ All models synchronized");

  } catch (error) {
    console.error("❌ Unable to connect to DB:", error.message);
    process.exit(1);
  }
};