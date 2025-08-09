import React from "react";
import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import "./Search.css";
import axios from "axios";

function Search() {
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getFoods();
  };

  async function getFoods() {
    try {
      const res = await axios.get(
        `http://localhost:3000/recipes?query=${input}`
      );
      console.log(res.data.results);
      setRecipes(res.data.results);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleSearch} />
        <button type="button" onClick={getFoods}>
          Search
        </button>
      </form>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard image={recipe.image} title={recipe.title} id={recipe.id} key={recipe.id}/>
        ))}
      </div>
    </div>
  );
}

export default Search;
