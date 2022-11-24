const express = require("express");
const dotenv = require("dotenv");
const { errorHandler } = require("../backend/middleware/errorMiddleware");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

connectDB();
