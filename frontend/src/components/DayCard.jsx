import "./styles/DayCard.css";

function DayCard(props) {
  const breakfast = props.meals.breakfast;
  const lunch = props.meals.lunch;
  const dinner = props.meals.dinner;

  return (
    <div className="day-container">
      <h3>{props.dayName}</h3>
      
      <div className="meals">
        {breakfast != null ? ( 
            <div>Breakfast: <button>{ breakfast.title }</button></div>
        ) : ( 
            <h4>Add a recipe</h4>
        )}

        {lunch != null ? ( 
            <div>Lunch: <button>{ lunch.title }</button></div>
        ) : ( 
            <h4>Add a recipe</h4>
        )}

         {dinner != null ? ( 
            <div>Dinner: <button>{ dinner.title }</button></div>
        ) : ( 
            <h4>Add a recipe</h4>
        )}
      </div>
    </div>
  );
}

export default DayCard;
