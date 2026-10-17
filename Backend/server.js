
require("dotenv").config();

const app = require("./src/app");
const connectdb = require("./Database/db");

async function server() {
  try {
    await connectdb();

    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

server();
