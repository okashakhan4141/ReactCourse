import classes from "../../UI/CSS/AvailableMealsList.module.css";
import MealItem from "./MealItem";
import Card from "../../UI/Containers/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function AvailableMealsList() {
  return (
    <div className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return <MealItem key={meal.id} meal={meal} />;
          })}
        </ul>
      </Card>
    </div>
  );
}

export default AvailableMealsList;
