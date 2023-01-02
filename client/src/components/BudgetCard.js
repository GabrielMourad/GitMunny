import React, {useContext, useState} from 'react'
import '../styles.css'
import { BudgetAppContext } from '../context/BudgetAppContext'
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';

export default function BudgetCard() {

  const {dispatch} = useContext(BudgetAppContext)
  const [editBudget, setEditBudget] = useState(false);

  const handleEdit = () =>{
    
    setEditBudget(true);
  }

  const handleSave = (newBudget) => {
    dispatch({
      type: 'SET_BUDGET',
      payload: newBudget
    })

    setEditBudget(false);
  }

  return (
    <div className = 'alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
      {!editBudget ? 
      
      <ViewBudget handleEdit = {handleEdit} /> 

      : 

      <EditBudget handleSave = {handleSave}/> }

    </div>
    
  )
}
