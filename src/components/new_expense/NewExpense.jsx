import React from 'react'
import ExpenseForm from './ExpenseForm'
import { expenseList } from '../../constants/constants'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (expenseList.length + 1).toString()
    }
    props.onAddExpense(expenseData)
  } 
  return (
    <div>
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
