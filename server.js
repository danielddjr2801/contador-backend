import express from "express";
import cors from "cors";
import "./config/mongodb.js";

import userRoutes from "./routes/userRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRoutes);

app.listen(8080);