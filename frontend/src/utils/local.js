function getSavedRecipes() {
    return JSON.parse(localStorage.getItem("savedRecipes")) || [];
}

function saveRecipe(recipe) {
    const saved = getSavedRecipes();
    let recipes = [...saved, {
                id: recipe.id,
                title: recipe.title,
                image: recipe.image
            }];

    localStorage.setItem('savedRecipes', JSON.stringify(recipes));
}

function removeSavedRecipe(recipeId) {
    const saved = getSavedRecipes();

    let recipes = saved.filter(recipe => {
            return recipe.id !== recipeId;
    });

    localStorage.setItem('savedRecipes', JSON.stringify(recipes));
}

function isRecipeSaved(recipeId) {
    const saved = getSavedRecipes();

    return saved.some((recipe) => recipe.id === recipeId);
}

export { getSavedRecipes, saveRecipe, removeSavedRecipe, isRecipeSaved };