import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 18th, 2021</div>
      <div className="expense-item__description">
        <h2 className="expense-item__title">Car Insurance</h2>
        <div className="expense-item__price">249.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
