import "./styles/DayCard.css";

function DayCard(props) {
  const breakfast = props.meals.breakfast;
  const lunch = props.meals.lunch;
  const dinner = props.meals.dinner;


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
        {breakfast != null ? ( 
            <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, 'breakfast')}
            >
            Breakfast:
            <img src={breakfast.image} width="50" height="50"></img>
            <button>{ breakfast.title }</button></div>
        ) : (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, 'breakfast')}
          >
          <h4>Breakfast: Add a recipe</h4></div>
        )}

        {lunch != null ? ( 
            <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, 'lunch')}
            >Lunch:
            <img src={lunch.image} width="50" height="50"></img> 
            <button>{ lunch.title }</button></div>
        ) : (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, 'lunch')}
          > 
            <h4>Lunch: Add a recipe</h4></div>
        )}

         {dinner != null ? ( 
            <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, 'dinner')}
            >Dinner:
            <img src={dinner.image} width="50" height="50"></img>
            <button>{ dinner.title }</button></div>
        ) : (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, 'dinner')}
          > 
            <h4>Dinner: Add a recipe</h4></div>
        )}
      </div>
    </div>
  );
}

export default DayCard;
