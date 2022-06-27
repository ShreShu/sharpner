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

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredtitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    console.log(expenseData);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Expense Title</label>
        <input type="text" id="title" onChange={showExpenseTitle} />

        <label htmlFor="title">Expense Amount</label>
        <input type="number" id="amount" onChange={showExpenseAmount} />

        <label htmlFor="title">Expense Title</label>
        <input type="date" id="date" onChange={showExpensedate} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};
