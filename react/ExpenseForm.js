import React from "react";

export const ExpenseForm = () => {
  const showExpenseChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="title">Expense Title</label>
        <input type="text" id="title" onChange={showExpenseChange} />

        <label htmlFor="title">Expense Amount</label>
        <input type="number" id="amount" onChange={showExpenseChange} />

        <label htmlFor="title">Expense Title</label>
        <input type="date" id="date" onChange={showExpenseChange} />
      </form>

      <button>Add</button>
    </div>
  );
};
