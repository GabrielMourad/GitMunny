import React, {useContext, useState} from 'react'
import '../styles.css'
import { BudgetAppContext } from '../context/BudgetAppContext'
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import TransactionModal from './modals/TransactionModal';

export default function BudgetCard(props) {

  const {dispatch} = useContext(BudgetAppContext);
  const [editBudget, setEditBudget] = useState(false);
  const transactionModal = document.getElementById("transaction-modal")
  

  const handleEdit = () =>{
    
    setEditBudget(!editBudget);
  }

  const handleSave = (newBudget) => {
    dispatch({
      type: 'SET_BUDGET',
      payload: newBudget
    })

    setEditBudget(false);
    
  }


  return (
    <>
      
      <div className = 'alert alert-secondary p-3 d-flex  justify-content-between type-card'>
        {!editBudget ? 
        
        <ViewBudget handleEdit = {handleEdit} /> 

        : 

        <EditBudget handleSave = {handleSave}/> }

      </div>
      
      <TransactionModal/>
    </>
    
  )
}
