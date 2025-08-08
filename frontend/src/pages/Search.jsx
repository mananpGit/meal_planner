import React from "react";
import { useState } from "react";
import "./pages.css";
import axios from "axios";

function Search() {
  const [input, setInput] = useState("");

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
      console.log(res.data);
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
    </div>
  );
}

export default Search;
