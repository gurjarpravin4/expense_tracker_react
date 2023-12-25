import './App.css';
import './index.css';
import { expenseList } from './constants/constants';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/new_expense/NewExpense';
import { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState(expenseList)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div className='font-lato'>
      <NewExpense onAddExpense={addExpenseHandler} expenses={expenses} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
