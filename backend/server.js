const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");
const port = process.env.PORT || 4000;

//Handling UnCaught Exception

process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

//Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//Connecting To Database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const server = app.listen(process.env.APP_PORT, () => {
  console.log(`Server is working on http://localhost:${port}`);
});

//unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server due to unhandled promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
