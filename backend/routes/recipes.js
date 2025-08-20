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

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);

    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`, {
            params: {
                apiKey: API_KEY,
            },
        });
        res.json(response.data);
    } catch (e) {
        console.log(e);
    }
});

router.get('/:id/nutrition', async (req, res) => {
    const id = req.params.id;

    try {
        const response = axios.get(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json`, {
            params: {
                apiKey: API_KEY,
            },
        });
        res.json(response.data);
    } catch (e) {
        console.log(e);
    }
});

export default router;
