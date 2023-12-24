import React from 'react'

const ExpenseForm = () => {
    const today = new Date()
    return (
        <form>
            <div className='flex flex-wrap max-w-5xl border-2 border-[#d0efff] mx-auto my-8 rounded-lg p-2 justify-between gap-4'>
                <div className='flex gap-2 items-center'>
                    <label className='text-slate-600'>Title: </label>
                    <input type="text" className='border-b-[#d0efff] border-b-2 focus:border-[#2a9df4] focus:outline-none h-8' />
                </div>
                <div className='flex gap-2 items-center'>
                    <label className='text-slate-600'>Amount (₹):</label>
                    <input type="number" min={1.0} step={1.00} className='border-b-[#d0efff] border-b-2 focus:border-[#2a9df4] focus:outline-none h-8' />
                </div>
                <div className='flex gap-2 items-center'>
                    <label className='text-slate-600'>Date: </label>
                    <input type="date" min="2019-01-01" max={today} className='border-b-[#d0efff] border-b-2 focus:border-[#2a9df4] focus:outline-none h-8' />
                </div>
                <div>
                    <button type="submit" className='bg-[#2a9df4] p-2 text-white rounded-lg'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm
