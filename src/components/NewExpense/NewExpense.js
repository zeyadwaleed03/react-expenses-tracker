import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props) {
  function submitDataGetter(newData) {
    const expenseData = {
      ...newData,
      id: Math.random().toString(),
    };
    props.onAddingNewExp(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitting={submitDataGetter} />
    </div>
  );
}

export default NewExpense;
