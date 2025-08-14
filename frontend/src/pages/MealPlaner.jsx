import { useState, useEffect } from "react";
import { getSavedRecipes } from "../utils/local";

function MealPlaner() {
    const createEmptyWeek = () => {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const emptyWeek = {};
  
        days.forEach(day => {
            emptyWeek[day] = { breakfast: null, lunch: null, dinner: null };
        });
  
        return emptyWeek;
    };

    const [mealPlan, setMealPlan] = useState(createEmptyWeek());

    return (
        <div className="meal-planner">
            <h1>Weekly Meal Planner</h1>

            <div className="saved-list">

            </div>

            <div className="weekly-grid">
                {Object.keys(mealPlan).map((day) => {
                    // day component that takes in each meal as prop
                })}
            </div>

        </div>
    );
}

export default MealPlaner;