import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { getSavedRecipes, saveRecipe, removeSavedRecipe, isRecipeSaved } from '../utils/local';
import './styles/RecipeCard.css';

function RecipeCard(props) {
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        setIsSaved(isRecipeSaved(props.id));
    }, []);

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

    return (
        <div className="recipe-card">
            <img src={props.image} width="200" height="200"/>
            <p>{props.title}</p>
            <button onClick={handleClick}>{isSaved ? 'Remove' : 'Save Recipe'}</button>
            <button onClick={() => props.onViewDetails(props.id)}>View Details</button>
        </div>
    );
}

export default RecipeCard;