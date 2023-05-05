import React from "react";

import "./ExpenseItem.js";
import "./ExpenseDate.css";

import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";
function ExpenseDate(props) {
  const day = props.date.toLocaleString("en-Us", { day: "numeric" });
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  return (
    <Card className="expense-date">
      <div className="expense-date__day ">{day}</div>
      <div className="expense-date__month ">{month}</div>
      <div className="expense-date__year ">{year}</div>
    </Card>
  );
}
export default ExpenseDate;
