import express from "express";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";

const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json()); // will allow us to parser req.body
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", movieRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});
