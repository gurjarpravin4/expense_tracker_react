import './App.css';
import './index.css';
import { expenseList } from './constants/constants';
import Expenses from './components/expenses/Expenses';
import Card from './components/UI/Card';

function App() {

  return (
    <div>
      <h2 className='text-xl font-bold m-6'>Let's get started!</h2>
      <Card className='bg-violet-100 max-w-5xl p-6 rounded-xl mx-auto'>
        <Expenses items={expenseList} />
      </Card>
    </div>
  );
}

export default App;
