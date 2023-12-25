import './App.css';
import './index.css';
import { expenseList } from './constants/constants';
import Expenses from './components/expenses/Expenses';
import Card from './components/UI/Card';
import NewExpense from './components/new_expense/NewExpense';

function App() {
  const addExpenseHandler = (expense) => {
    console.log('In App.js', expense)
  }
  return (
    <div className='font-lato'>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Card className='bg-[#d0efff] max-w-5xl p-6 rounded-xl mx-auto'>
        <Expenses items={expenseList} />
      </Card>
    </div>
  );
}

export default App;
