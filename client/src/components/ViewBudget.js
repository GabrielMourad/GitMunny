import React, { useContext } from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext'

export default function ViewBudget(props) {
  
  const {budget} = useContext(BudgetAppContext)
  
  
  return (
    <div >
        <span class = "">Budget: ${budget}</span>
        {/* <button align = "right" type = "button" onClick = {props.handleEdit} class = "btn btn-primary btn-sm">Set</button> */}
    </div>  
  )
}
