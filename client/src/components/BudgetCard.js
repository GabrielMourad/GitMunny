import React, {useContext, useState} from 'react'
import '../styles.css'
import $ from "jquery";
import { BudgetAppContext } from '../context/BudgetAppContext'
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import TransactionModal from './modals/TransactionModal';

export default function BudgetCard(props) {
  



  return (
    <>
      
      <div className = 'alert alert-secondary p-3 d-flex  justify-content-between type-card'>
      
        
        <ViewBudget  /> 


      </div>

      <div>
        <a data-bs-toggle="modal" data-bs-target="#transaction-modal" className = "modalTitle d-flex justify-content-center" href = "#" 
        >Add Transaction</a>
      </div>

       <TransactionModal/>
    </>
    
  )
}
