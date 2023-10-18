import './Expenses.css';
import ExpenseChart from './ExpensesChart';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2023');
  const selectingYearHandler = (selected) => {
    setFilteredYear(selected);
  };
  const filteredArr = props.expenses.filter((expense) => {
    if (expense.date.getFullYear() === +filteredYear) {
      return expense;
    }
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        currentYear={filteredYear}
        onSelectingYear={selectingYearHandler}
      />
      <ExpenseChart expenses={filteredArr} />
      <ExpensesList items={filteredArr} />
    </Card>
  );
}
export default Expenses;
