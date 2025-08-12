import React from "react";
import './styles/RecipeModal.css';

function RecipeModal({ recipe, isOpen, onClose }) {
    if(!isOpen || !recipe) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{recipe.title}</h2>
                    <button className="close-btn" onClick={onClose}>X</button>
                </div>
                
                <div className="ingredients-section">
                    <h3>Ingredients:</h3>
                    <ul>
                        {recipe.extendedIngredients?.map((ingredient, index) => (
                            <li key={index}>
                                {ingredient.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="instructions-section">
                    <h3>Instructions:</h3>
                    <ol>
                        {recipe.analyzedInstructions?.[0]?.steps?.map((step, index) => (
                            <li key={index}>{step.step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    ); 
}

export default RecipeModal;