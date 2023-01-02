import React, { useContext } from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext'

export default function ViewBudget(props) {
  
  const {budget} = useContext(BudgetAppContext)
  
  
  return (
    <div >
        <span>Budget: ${budget}</span>
        <button type = "button" onClick = {props.handleEdit} className = "btn btn-primary mr-3">Set</button>
    </div>  
  )
}
