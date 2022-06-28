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

      {filteredExpenses.length === 0 ? (
        <p>No expense</p>
      ) : filteredExpenses.length === 1 ? (
        filteredExpenses.map((expense) => {
          return (
            <>
              <ExpenseItem
                key={Math.random()}
                date={expense.expenseDate}
                amount={expense.expenseAmount}
                title={expense.expenseTitle}
              />
              <p>only one expense here, please add more</p>
            </>
          );
        })
      ) : (
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={Math.random()}
              date={expense.expenseDate}
              amount={expense.expenseAmount}
              title={expense.expenseTitle}
            />
          );
        })
      )}
    </Card>
  );
}
export default App;
