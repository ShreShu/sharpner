import React, { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";
import { ExpenseForm } from "./components/ExpenseForm";
function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <Card>
      <h2>Let's get started!</h2>
      <ExpenseForm addExpense={addExpense} />
      <h3>HEllo</h3>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={Math.random()}
            date={expense.expenseDate}
            amount={expense.expenseAmount}
            title={expense.expenseTitle}
          />
        );
      })}
    </Card>
  );
}
export default App;
