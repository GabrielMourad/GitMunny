import React, { useContext, useState } from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


export default function EditBudget() {
  const {budget, dispatch} = useContext(BudgetAppContext)
  const [newBudget, setNewBudget] = useState(budget) 
  
  const onSubmit = (e) => {
      e.preventDefault()
      
        dispatch({
          type: 'SET_BUDGET',
          payload: newBudget
        })
        
        document.getElementById("close-modal-budget").click();
        toast.success("Budget Set")
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
