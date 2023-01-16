import React, {useContext, useState} from 'react'
import '../styles.css'
import { BudgetAppContext } from '../context/BudgetAppContext'
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import BudgetModal from './modals/BudgetModal';

export default function BudgetCard() {

  const {dispatch} = useContext(BudgetAppContext);
  const [editBudget, setEditBudget] = useState(false);
  const [openModal, setOpenModal] = useState(false);


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
      
      <BudgetModal/>
    </>
    
  )
}
