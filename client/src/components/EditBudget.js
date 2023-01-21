import React, { useContext, useState } from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext'

export default function EditBudget() {
  const {budget, dispatch} = useContext(BudgetAppContext)
  const [newBudget, setNewBudget] = useState(budget) 
  
  const onSubmit = (e) => {
      e.preventDefault()
      
        dispatch({
          type: 'SET_BUDGET',
          payload: newBudget
        })
    
     
  }


  return (
    <>
    
      <form id = "budget-form" onSubmit = {onSubmit}>
        <div className = 'col-sm'>
            <label htmlFor = 'name'>Budget Amount</label>
            <input required = 'required' type = 'number' className = 'form-control' id='budget' value = {newBudget} onChange = {e => setNewBudget(e.target.value)}>
            </input>
        </div>

       
        </form>
    
    
    </>

  )
}
