import React from "react";
import { useState, useEffect } from "react";
import RecipeModal from "./RecipeModal";
import axios from "axios";
import { saveRecipe, removeSavedRecipe, isRecipeSaved } from '../utils/local';
import './styles/RecipeCard.css';

function RecipeCard(props) {
    const [isSaved, setIsSaved] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    //useEffect for getting saved recipes
    useEffect(() => {
        setIsSaved(isRecipeSaved(props.id));
    }, []);

    //handle remove saved recipe button or add it to our saved recipes
    const handleClick = () => {    
        if (isSaved) {
            removeSavedRecipe(props.id);
        } else {
            const recipeToSave = {
                id: props.id,
                title: props.title,
                image: props.image
            };
            saveRecipe(recipeToSave);
        }
        setIsSaved(!isSaved);
    };

    //get data through route call
    const getRecipeDetails = async (recipeId) => {
        try {
            const res = await axios.get(`http://localhost:3000/recipes/${recipeId}`);
            console.log(res.data);
            return res.data;
        } catch (e) {
            console.log(e);
        }
    };

    //button for view details
    const handleViewDetails = async (recipeId) => {
        const details = await getRecipeDetails(recipeId);
        setSelectedRecipe(details);
        setShowModal(true);
    };

    return (
        <div className="recipe-card">
            <img src={props.image} width="200" height="200"/>
            <p>{props.title}</p>
            <button onClick={handleClick}>{isSaved ? 'Remove' : 'Save Recipe'}</button>
            <button onClick={() => handleViewDetails(props.id)}>View Details</button>

            <RecipeModal 
                recipe={selectedRecipe}
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />
        </div>
    );
}

export default RecipeCard;