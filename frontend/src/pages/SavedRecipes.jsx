import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import getSavedRecipes from "../utils/local"

function SavedRecipes() {
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        setSaved(getSavedRecipes());
    }, []);

    return (
        <div className="saved-grid">
            <h1>Your Saved Recipes</h1>
            {saved ? (
                saved.map((recipe) => {
                <RecipeCard
                    key={recipe.id}
                    id={recipe.id}
                    image={recipe.image}
                    title={recipe.title}
                />})
            ) : (
                <h2>No Recipes Saved</h2> 
            )}
        </div>
    );
}

export default SavedRecipes;