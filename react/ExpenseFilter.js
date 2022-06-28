import React from "react";

export const ExpenseFilter = ({ selected, onChangeFilter }) => {
  const dropDownChange = (e) => {
    onChangeFilter(e.target.value);
  };

  return (
    <div>
      <select value={selected} onChange={dropDownChange}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};
