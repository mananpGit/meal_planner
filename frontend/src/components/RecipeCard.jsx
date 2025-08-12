import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './styles/RecipeCard.css';

function RecipeCard(props) {
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

        const isRecipeSaved = savedRecipes.some(recipe => recipe.id === props.id);

        setIsSaved(isRecipeSaved);
    }, []);

    const handleClick = () => {
        const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
        
        let updatedRecipes;
    
        if (isSaved) {
            updatedRecipes = savedRecipes.filter(recipe => {
            return recipe.id !== props.id;
        });
        } else {
            updatedRecipes = [...savedRecipes, {
                id: props.id,
                title: props.title,
                image: props.image
            }];
        }

        localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));

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