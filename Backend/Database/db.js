const mongoose = require("mongoose");

async function connectdb() {
  try {
    await mongoose.connect(process.env.Mongo_Url);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Failed to connect to database:", error.message);
    throw error;
  }
}

module.exports = connectdb;