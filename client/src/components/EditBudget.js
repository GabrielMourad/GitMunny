import React, { useContext, useState } from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext'

export default function EditBudget(props) {
  const {budget} = useContext(BudgetAppContext)
  const [newBudget, setNewBudget] = useState(budget) 

  return (
    <>
     <input required = 'required' type = 'number' className = 'form-control' id='budget' 
      value = {newBudget} onChange = {e => setNewBudget(e.target.value)}></input>

     <button onClick = {() => props.handleSave(newBudget)}>Save</button>
    
    </>

  )
}
