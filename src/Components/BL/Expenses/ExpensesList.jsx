import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  return (
    <div>
      {props.expeseItems.map((item) => (
        <ExpenseItem key={item.id} expense={item} />
      ))}
    </div>
  );
}

export default ExpensesList;
