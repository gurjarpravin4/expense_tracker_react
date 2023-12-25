import React from 'react'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: "long" })
    const year = props.date.getFullYear()
    const day = props.date.toLocaleString('en-US', { day: "2-digit" })
    return (
        <div className='text-center max-sm:text-start max-sm:flex max-sm:gap-2 max-sm:items-baseline text-white sm:w-32 max-sm:flex-1 max-sm:px-4 rounded-xl p-2 bg-[#2a9df4]'>
            <div className='text-3xl font-bold'>{day}</div>
            <div className='text-xl font-bold'>{month}</div>
            <div className='text-md font-vollkorn'>{year}</div>
        </div>
    )
}

export default ExpenseDate
