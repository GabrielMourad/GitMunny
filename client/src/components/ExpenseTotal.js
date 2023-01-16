import React, {useContext} from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext'

export default function ExpenseTotal() {

  const {expenses} = useContext(BudgetAppContext);
  
  const totalExpenses = expenses.reduce((totalSum, currentItem) => {
    return (totalSum = totalSum + currentItem.cost)
  }, 0)

  return (
    <>
    <div className = "alert alert-primary type-card">
        <span>Spent so far: $ {totalExpenses}</span>
    </div>

    <div className = "d-flex justify-content-center">
        Set Budget
    </div>
    
    </>
  )
}
