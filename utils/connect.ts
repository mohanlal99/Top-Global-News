import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const Connect = async (): Promise<void> => {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    return;
  }

  try {
    await mongoose.connect(MONGO_URI);
    // if (connection.connection.readyState === 1) {
    //   console.log("Connected to MongoDB");
    // }
  } catch (error) {
    NextResponse.json(error);
    process.exit(1);
    // Exit process on failure in production
  }
};

// import mongoose from "mongoose";
// import winston from "winston";

// // Create a logger instance
// const logger = winston.createLogger({
//     level: process.env.NODE_ENV === "production" ? "error" : "debug",
//     transports: [
//         new winston.transports.Console(), // Logs to console
//         new winston.transports.File({ filename: "error.log", level: "error" }), // Logs errors to a file
//     ],
// });

// export const Connect = async (): Promise<void> => {
//     const MONGO_URI = process.env.MONGO_URI;

//     if (!MONGO_URI) {
//         logger.error("MongoDB connection string is missing.");
//         return;
//     }

//     try {
//         await mongoose.connect(MONGO_URI);
//         logger.info("Connected to MongoDB");
//     } catch (error) {
//         logger.error("MongoDB connection error:", error);
//         process.exit(1); // Exit the process if the connection fails
//     }
// };
