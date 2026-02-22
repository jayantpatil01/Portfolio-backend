import { DataTypes } from "sequelize";
import sequelize  from "../config/Database.js";


const ResumeModel = sequelize.define(
  "Resume",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    filePath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "resumes",
    timestamps: true,
  }
);

export default ResumeModel;