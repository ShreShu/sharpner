import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);
  /* function provided by react library allows to define values as state where changes to these values should reflect in component function
  useState is a hook and all the hooks can only be called inside the comonent function and they also should not be called in any nested function
  we can also set the initial value of state using useState(initialvalue)
  it returns a array with two elements, in which 1st element is the current state value itself and 2nd element is a function to update that value
  
  calling state Updating function not just set a new value of amount but also the component function in which we are calling the update state function
  will be executed again and the whole component will be re-evaluated and rendered with new value

  */

  console.log(props);
  const deleted = () => {
    console.log("deleted");
  };

  const changeAmount = () => {
    setAmount(100);
  };
  return (
    <div>
      <h1> Expense Items</h1>
      <ExpenseDetails amount={amount} />
      <ExpenseDate date={props.date} />

      <div>
        <button onClick={deleted}>Delete</button>
        <button onClick={changeAmount}>Change amount</button>
        {/* we have to pass only the name of function ie we are poitning to that function here not with parenthesis ,if we use delete() then JS will execute it when the onClick event is parsed
     and that will be parsed when the JSX is returned
     */}
      </div>
    </div>
  );
};

export default ExpenseItem;
