const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
require("../src/db/conn");
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
const activityRoutes=require("./routes/ActivityRoutes")

app.use("/api/auth", authRoutes); //setting routes for our user routes
app.use("/api/activity/",activityRoutes)

const PORT = process.env.PORT ?? 5000;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
