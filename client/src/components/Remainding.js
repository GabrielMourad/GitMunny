import React, { useContext } from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext'

export default function Remainding() {

  const {budget, expenses} = useContext(BudgetAppContext);

  const totalExpenses = expenses.reduce((totalSum, currentItem) => {
    return (totalSum = totalSum + currentItem.cost)
  }, 0)
  
  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'
  console.log(totalExpenses)

  return (
    <div className = {`alert ${alertType}`}>
        <span>Remainding : ${budget - totalExpenses}</span>
    </div>
  )
}
