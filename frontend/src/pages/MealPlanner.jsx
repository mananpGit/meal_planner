import { useState, useEffect } from "react";
import { getSavedRecipes } from "../utils/local";
import DayCard from "../components/DayCard";
import "./styles/MealPlanner.css";

function MealPlanner() {
    //get empty/inital week
    const createEmptyWeek = () => {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const emptyWeek = {};
  
        days.forEach(day => {
            emptyWeek[day] = { breakfast: null, lunch: null, dinner: null };
        });
  
        return emptyWeek;
    };

    const [mealPlan, setMealPlan] = useState(createEmptyWeek());
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        setSaved(getSavedRecipes());
    }, []);

    const updateMealPlan = (dayName, mealType, recipe) => {
        setMealPlan(prevPlan => ({
            ...prevPlan,
            [dayName]: {
            ...prevPlan[dayName],
            [mealType]: recipe
        }
        }))
    };

    return (
        <div className="meal-planner">
            <h1>Weekly Meal Planner</h1>

            <div className="saved-list">
                {saved.length > 0 ? (
                    saved.map((recipe) => (
                        <div  
                            key={recipe.id} className="sidebar-recipe-item" 
                            draggable={true}
                            onDragStart={(e) => {
                                e.dataTransfer.setData("application/json", JSON.stringify(recipe));
                                e.dataTransfer.effectAllowed = "copy";
                            }}
                        >
                            <img src={recipe.image} alt={recipe.title} />
                            <span>{recipe.title}</span>
                        </div>
                    ))
                ) : (
                    <h2>No Recipes Saved</h2> 
                )}
            </div>

            <div className="weekly-grid">
                {Object.keys(mealPlan).map((day) => {
                    // day component that takes in each meal as prop
                    return <DayCard dayName={day} meals={mealPlan[day]} onUpdateMeal={updateMealPlan}/>
                })}
            </div>

        </div>
    );
}

export default MealPlanner;