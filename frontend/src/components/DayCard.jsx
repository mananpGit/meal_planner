import "./styles/DayCard.css";

function DayCard(props) {
  const mealTypes = ["breakfast", "lunch", "dinner"];

  const handleDrop = (e, mealType) => {
    e.preventDefault();
    const recipeData = e.dataTransfer.getData("application/json");
    const recipe = JSON.parse(recipeData);

    // Call the function passed from parent
    props.onUpdateMeal(props.dayName, mealType, recipe);
  };

  return (
    <div className="day-container">
      <h3>{props.dayName}</h3>

      <div className="meals">
        {mealTypes.map((mealType) => {
          const currentMeal = props.meals[mealType]; // This gets breakfast/lunch/dinner data

          return (
            <div
              key={mealType}
              className="meal-slot" // Add a CSS class for styling
              onDragOver={(e) => e.preventDefault()} // Move these to the outer div
              onDrop={(e) => handleDrop(e, mealType)}
            >
              {currentMeal != null ? (
                <div>
                  {mealType.charAt(0).toUpperCase() + mealType.slice(1)}:
                  <img src={currentMeal.image} width="50" height="50"></img>
                  <button>{currentMeal.title}</button>
                </div>
              ) : (
                <div>
                  <h4>
                    {mealType.charAt(0).toUpperCase() + mealType.slice(1)}: Add
                    a recipe
                  </h4>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DayCard;
