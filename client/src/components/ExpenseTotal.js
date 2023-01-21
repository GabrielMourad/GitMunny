import React, {useContext} from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext'
import BudgetModal from './modals/BudgetModal';

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


    
    <BudgetModal/>
    </>
  )
}
