import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
const Expenses = (props) => {
    return (
        <div>
            <Card className='bg-[#d0efff] max-w-5xl p-6 rounded-xl mx-auto'>
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
