import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './utils/ConnectDb.js';

// Connect to the database
connectDB();

const app = express();
const PORT = process.env.PORT ;


app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});