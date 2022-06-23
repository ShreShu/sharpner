import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div>
      <h1> Expense Items</h1>
      <p>{props.expensedate}</p>
      <p>{props.expensedate}</p>
      <p>{props.expenseAmount}</p>
    </div>
  );
};

export default ExpenseItem;
