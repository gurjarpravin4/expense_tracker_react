import './App.css';
import './index.css';
import { expenseList } from './constants/constants';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/new_expense/NewExpense';

function App() {
  const addExpenseHandler = (expense) => {
    console.log('In App.js', expense)
  }
  return (
    <div className='font-lato'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseList} />
    </div>
  );
}

export default App;
