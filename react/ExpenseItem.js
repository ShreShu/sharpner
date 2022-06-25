import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  const deleted = () => {
    console.log("deleted");
  };
  return (
    <div>
      <h1> Expense Items</h1>
      <ExpenseDetails amount={props.amount} />
      <ExpenseDate date={props.date} />

      <div>
        <button onClick={deleted}>Delete</button>
        {/* we have to pass only the name of function ie we are poitning to that function here not with parenthesis ,if we use delete() then JS will execute it when the onClick event is parsed
     and that will be parsed when the JSX is returned
     */}
      </div>
    </div>
  );
};

export default ExpenseItem;
