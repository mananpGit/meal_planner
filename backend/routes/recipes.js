import express from "express";
import axios from "axios";
import dotenv from "dotenv";

const router = express.Router();
dotenv.config();

const API_KEY = process.env.SPOON_API_KEY;

router.get('/', async (req, res) => {
    const query = req.query.query;
    console.log(query);

    try {
        const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
            params: {
                query: query,
                apiKey: API_KEY,
            },
        })
        res.json(response.data);
    } catch (e) {
        console.log(e);
    }
});

export default router;
