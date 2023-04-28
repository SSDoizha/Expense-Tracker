import "./ExpenseItem.css";

function ExpenseItem(props) {
  const day = props.date.toLocaleString("en-Us", { day: "numeric" });
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  return (
    <div className="expense-item">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
