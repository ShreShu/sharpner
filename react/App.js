import ExpenseItem from "./components/ExpenseItem";

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
    <div>
      <h2>Let's get started!</h2>
      {expenses.forEach((expense) => {
        <ExpenseItem
          date={expense.expensedate}
          amount={expenseAmount}
          LocationOfExpenditure={LocationOfExpenditure}
        />;
      })}
    </div>
  );
}

export default App;
