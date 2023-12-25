import React from 'react'

const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }
    return (
        <div className='flex justify-between items-center px-4 font-lato text-slate-600'>
            <label htmlFor="year">Select year:</label>
            <select className='w-28 h-8 rounded-md text-center focus:outline-none focus:border-2 focus:border-[#2a9df4]' name="year" value={props.selected} onChange={dropdownChangeHandler}>
                <option value="all">All</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
        </div>
    )
}

export default ExpenseFilter
