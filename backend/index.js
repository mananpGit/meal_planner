import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import recipeRoutes from "./routes/recipes.js";

const app = express();
const port = 3000;
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/recipes", recipeRoutes);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})