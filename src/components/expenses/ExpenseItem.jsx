import React from 'react'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
    return (
        <div className='flex flex-1 max-sm:flex-col max-sm:items-start justify-between items-center gap-8 max-sm:gap-2 p-4 mx-2 my-4 rounded-xl shadow-xl text-xl bg-white'>
            <ExpenseDate date={props.date} />
            <div className="flex flex-1 max-sm:flex-col max-sm:items-start max-sm:gap-2 justify-between items-center">
                <h2 className='font-bold text-3xl max-sm:text-2xl text-slate-600'>{props.title}</h2>
                <div className='text-2xl font-bold bg-[#2a9df4] p-2 rounded-lg text-white sm:w-32 max-sm:max-w-32 text-center max-sm:text-start'>₹ {props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem
