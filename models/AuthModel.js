import { DataTypes } from "sequelize";
import sequelize  from "../config/Database.js";

const AuthModel = sequelize.define("Auth", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "auth",
    timestamps: false,
}); 

export default AuthModel;