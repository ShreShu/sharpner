import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";
import { ExpenseForm } from "./components/ExpenseForm";
function App() {
  const expenses = [
    {
      expensedate: new Date(2021, 2, 28),
      expenseAmount: 294,
      LocationOfExpenditure: "Food",
    },
    {
      expensedate: new Date(2021, 2, 28),
      expenseAmount: 294,
      LocationOfExpenditure: "Food",
    },
    {
      expensedate: new Date(2021, 2, 28),
      expenseAmount: 294,
      LocationOfExpenditure: "Food",
    },
  ];
  return (
    <Card>
      <h2>Let's get started!</h2>
      <ExpenseForm />
      <h3>HEllo</h3>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key="1"
            date={expense.expensedate}
            amount={expense.expenseAmount}
            LocationOfExpenditure={expense.LocationOfExpenditure}
          />
        );
      })}
    </Card>
  );
}
export default App;
