import React, { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseFilter } from "./components/ExpenseFilter";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredYear, setFilteredYear] = useState("2020");

  const addExpense = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.expenseDate.getFullYear().toString() === filteredYear;
  });

  return (
    <Card>
      <h2>Let's get started!</h2>
      <ExpenseForm addExpense={addExpense} />
      <h3>HEllo</h3>

      <ExpenseFilter selected={filteredYear} onChangeFilter={filterHandler} />

      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={Math.random()}
            /*if we don't use key, to react all the items will look similar
            it only sees that the array has changed and then add the new one to the array and walk through all the divs and channge the contect of all divs to match array content 
            so new value will be there but performance wise its not good as all the element are visited and updated  
            */
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
