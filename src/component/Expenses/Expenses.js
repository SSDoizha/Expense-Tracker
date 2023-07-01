import React, { useState } from "react";
import ExpensesList from "./ExpensesList.js";
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart.js";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpensesYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChanged={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpensesYear} />
        <ExpensesList items={filteredExpensesYear} />
      </Card>
    </div>
  );
};

export default Expenses;
