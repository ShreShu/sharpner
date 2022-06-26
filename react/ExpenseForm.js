import React, { useState } from "react";

export const ExpenseForm = () => {
  const [enteredtitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const showExpenseTitle = (e) => {
    setTitle(e.target.value);
  };

  const showExpenseAmount = (e) => {
    setAmount(e.target.value);
  };

  const showExpensedate = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="title">Expense Title</label>
        <input type="text" id="title" onChange={showExpenseTitle} />

        <label htmlFor="title">Expense Amount</label>
        <input type="number" id="amount" onChange={showExpenseAmount} />

        <label htmlFor="title">Expense Title</label>
        <input type="date" id="date" onChange={showExpensedate} />
      </form>

      <button>Add</button>
    </div>
  );
};
