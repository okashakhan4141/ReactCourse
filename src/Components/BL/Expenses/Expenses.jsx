import Card from "../../Layouts/Card";
import ExpensesList from "./ExpensesList";
import "../../Layouts/CSS/Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenseData.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        year={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseChart expeseItems={filteredExpenses} />
      <ExpensesList expeseItems={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
