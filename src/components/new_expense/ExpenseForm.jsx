import React, { useState } from 'react'

const ExpenseForm = (props) => {
    const today = new Date()
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='flex flex-wrap max-w-5xl border-2 border-[#d0efff] mx-auto my-8 rounded-lg p-2 justify-between gap-4'>
                <div className='flex gap-2 items-center'>
                    <label className='text-slate-600'>Title: </label>
                    <input type="text" onChange={titleHandler} value={enteredTitle} className='border-b-[#d0efff] border-b-2 focus:border-[#2a9df4] focus:outline-none h-8' />
                </div>
                <div className='flex gap-2 items-center'>
                    <label className='text-slate-600'>Amount (₹):</label>
                    <input type="number" onChange={amountHandler} value={enteredAmount} min={1.0} step={1.00} className='border-b-[#d0efff] border-b-2 focus:border-[#2a9df4] focus:outline-none h-8' />
                </div>
                <div className='flex gap-2 items-center'>
                    <label className='text-slate-600'>Date: </label>
                    <input type="date" onChange={dateHandler} value={enteredDate} min="2019-01-01" max={today} className='border-b-[#d0efff] border-b-2 focus:border-[#2a9df4] focus:outline-none h-8' />
                </div>
                <div>
                    <button type="submit" className='bg-[#2a9df4] p-2 text-white rounded-lg'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm
