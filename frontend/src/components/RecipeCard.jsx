import React from "react";

function RecipeCard(props) {

    return (
        <div className="recipe-card">
            <img src={props.image} width="200" height="200"/>
            <p>{props.title}</p>
            <button>Save Recipe</button>
            <button>View Details</button>
        </div>
    );
}

export default RecipeCard;