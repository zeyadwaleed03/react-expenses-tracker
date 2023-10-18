import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found!</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          );
        })}
      </ul>
    );
  }
}

export default ExpensesList;
