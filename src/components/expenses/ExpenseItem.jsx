import React from 'react'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = (props) => {
    return (
        <div className='flex flex-1 justify-between items-center gap-8 p-4 mx-2 my-4 rounded-xl shadow-xl text-xl bg-white'>
            <ExpenseDate date={props.date} />
            <div className="flex flex-1 justify-between items-center">
                <h2 className='font-bold text-3xl text-slate-600'>{props.title}</h2>
                <div className='text-2xl font-bold bg-[#2a9df4] p-2 rounded-lg text-white w-32 text-center'>₹ {props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem
