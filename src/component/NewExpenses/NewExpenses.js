import React, { useState } from "react";
import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm.js";

const NewExpenses = (props) => {
  const [isReset, setReset] = useState(false);
  const addNewHandler = (event) => {
    setReset(false);
  };
  const hideHandler = (event) => {
    setReset(false);
  };
  const addFormHandler = (event) => {
    setReset(true);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setReset(false);
  };

  return (
    <div className="new-expense">
      {isReset ? (
        <ExpensesForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideHandler}
        />
      ) : (
        <button onClick={addFormHandler}>AddNewExpenses</button>
      )}
    </div>
  );
};
export default NewExpenses;
