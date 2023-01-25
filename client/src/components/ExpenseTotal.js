import React, {useContext} from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext'
import BudgetModal from './modals/BudgetModal';

export default function ExpenseTotal() {

  const {expenses, totalExpenses, deposit} = useContext(BudgetAppContext);
  
  
  
  

  return (
    <>
    <div className = "alert alert-primary type-card">
        <span>Spent so far: $ {totalExpenses.toFixed(2)}</span>
    </div>


    
    <BudgetModal/>
    </>
  )
}
