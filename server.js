import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();


const app = express();

connectDB();
//middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

// DB Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Connection to MongoDB failed:", error.message);
    });

app.get("/", (req, res) => {
    res.send("Api is running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
