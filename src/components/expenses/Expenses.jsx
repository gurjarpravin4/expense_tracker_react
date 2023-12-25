import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
const Expenses = (props) => {
    const currentYear = (new Date().getFullYear()).toString()
    const [filteredYear, setFilteredYear] = useState(currentYear)

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    return (
        <div>
            <Card className='bg-[#d0efff] max-w-5xl p-6 rounded-xl mx-auto'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {
                    props.items.map((expense) => {
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
            </Card>
        </div>
    )
}

export default Expenses
