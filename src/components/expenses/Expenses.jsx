import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('all')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    let filteredExpensesList = <h2 className='text-center text-slate-600 text-xl m-2'>No expenses found :(</h2>

    let filteredExpenses
    if (filteredYear === 'all')
        filteredExpenses = props.items
    else {
        filteredExpenses = props.items.filter((expense) => {
            return expense.date.getFullYear().toString() === filteredYear
        })
    }

    filteredExpenses.sort((a, b) => {
        return b.date - a.date
    })
    
    if(filteredExpenses.length > 0){
        filteredExpensesList = filteredExpenses.map((expense) => {
            return (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                />
            )
        })
    }

    return (
        <div>
            <Card className='bg-[#d0efff] max-w-5xl p-6 rounded-xl mx-auto'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {filteredExpensesList}
            </Card>
        </div>
    )
}

export default Expenses
