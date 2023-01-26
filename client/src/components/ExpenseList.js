import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { BudgetAppContext } from '../context/BudgetAppContext'

export default function ExpenseList() {
    const {expenses} = useContext(BudgetAppContext);

 

  return (
    <div>
        <ul className = 'list-group'>
          
            {expenses.map((expense) => (
                
                <ExpenseItem key = {expense.id} id = {expense.id} name = {expense.name} cost = {expense.cost} date = {expense.date} type = {expense.type}/>
            ))}
        </ul>
    </div>
  )
}
