import React, { useState } from "react";

import "./ExpenseItem.css";
import "./ExpenseDate.js";
import "../UI/Card.js";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const cangeButton = () => {
    setTitle("Updated!!!");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}
export default ExpenseItem;
