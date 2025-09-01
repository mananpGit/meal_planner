import SavedRecipes from "./SavedRecipes";
import Search from "./Search";
import "./styles/HomePage.css"

function HomePage(props) {
    return (
        <div className="home">
            <h1>Welcome to MealMate</h1>
            <p>A place to plan your meals!</p>

            <div className="options">
                <button onClick={() => props.onNavigate('search')}>Search Recipes 🔎</button>
                <button onClick={() => props.onNavigate('saved')}>Saved Recipes 📌</button>
            </div>
        </div>
    );
}

export default HomePage;