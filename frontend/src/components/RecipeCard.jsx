import React from "react";
import './RecipeCard.css';
import axios from "axios";

function RecipeCard(props) {
    async function handleClick() {
        let input = props.id;
        console.log(input);
        try {
            const res = await axios.get(`http://localhost:3000/recipes/${input}`);
            console.log(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="recipe-card">
            <img src={props.image} width="200" height="200"/>
            <p>{props.title}</p>
            <button>Save Recipe</button>
            <button onClick={handleClick}>View Details</button>
        </div>
    );
}

export default RecipeCard;