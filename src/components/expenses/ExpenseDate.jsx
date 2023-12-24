import React from 'react'

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: "long" })
    const year = props.date.getFullYear()
    const day = props.date.toLocaleString('en-US', { day: "2-digit" })
    return (
        <div className='text-center text-white w-32 rounded-xl p-2 bg-[#2a9df4]'>
            <div className='text-xl font-bold'>{month}</div>
            <div className='text-md font-vollkorn'>{year}</div>
            <div className='text-3xl font-bold'>{day}</div>
        </div>
    )
}

export default ExpenseDate
