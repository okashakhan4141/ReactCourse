import { Fragment } from "react";
import AvailableMealsList from "./AvailableMealsList";

//import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMealsList />
    </Fragment>
  );
};

export default Meals;
