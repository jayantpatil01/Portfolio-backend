import sequelize from '../config/Database.js';

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Connected Successfully");
  } catch (error) {
    console.error("❌ Unable to connect to DB:", error.message);
    process.exit(1);
  }
};




