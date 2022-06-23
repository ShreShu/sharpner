import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  return (
    <div>
      <h1> Expense Items</h1>
      <ExpenseDetails amount={props.amount} />
      <ExpenseDate date={props.date} />
    </div>
  );
};

export default ExpenseItem;
