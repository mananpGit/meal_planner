import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import {getSavedRecipes} from "../utils/local";
import "./styles/SavedRecipes.css";

function SavedRecipes() {
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        setSaved(getSavedRecipes());
    }, []);

    return (
        <>
        <h1>Your Recipes</h1>
        <div className="saved-grid">
            {saved.length > 0 ? (
                saved.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    id={recipe.id}
                    image={recipe.image}
                    title={recipe.title}
                />))
            ) : (
                <h2>No Recipes Saved</h2> 
            )}
        </div>
        </>
    );
}

export default SavedRecipes;