import classes from "../../UI/CSS/AvailableMealsList.module.css";
import MealItem from "./MealItem";
import Card from "../../UI/Containers/Card";
import { useEffect, useState } from "react";

function AvailableMealsList() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-app-10ae0-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}!`);
      }

      const data = await response.json();

      const fetchedMeals = [];
      for (const key in data) {
        fetchedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: +data[key].price,
        });
      }
      setMeals(fetchedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setIsError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <h2 className={`${classes.message} ${classes.loading}`}>Loading...</h2>
    );
  }

  if (isError) {
    return <h2 className={`${classes.message} ${classes.error}`}>{isError}</h2>;
  }

  return (
    <div className={classes.meals}>
      <Card>
        <ul>
          {meals.map((meal) => {
            return <MealItem key={meal.id} meal={meal} />;
          })}
        </ul>
      </Card>
    </div>
  );
}

export default AvailableMealsList;
