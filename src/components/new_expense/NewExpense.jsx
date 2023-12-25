import React from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (props.expenses.length + 1).toString()
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
