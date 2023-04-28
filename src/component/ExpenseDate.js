import "./ExpenseItem.js";
import "./ExpenseDate.css";
import ExpenseItem from "./ExpenseItem.js";
function ExpenseDate(props) {
  const day = props.date.toLocaleString("en-Us", { day: "numeric" });
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  return (
    <div className="expense-date">
      <div className="expense-date__day ">{day}</div>
      <div className="expense-date__month ">{month}</div>
      <div className="expense-date__year ">{year}</div>
    </div>
  );
}
export default ExpenseDate;
