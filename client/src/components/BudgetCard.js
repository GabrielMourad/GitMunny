import React, {useContext, useState} from 'react'
import '../styles.css'

import { BudgetAppContext } from '../context/BudgetAppContext'
import ViewBudget from './ViewBudget';
import TransactionModal from './modals/TransactionModal';
import 'react-toastify/dist/ReactToastify.css';


export default function BudgetCard() {
  

  return (
    <>
   
      
      <div className = 'alert alert-secondary p-3 d-flex  justify-content-between type-card'>
    
        <ViewBudget /> 

      </div>

      <div>
        <a data-bs-toggle="modal" data-bs-target="#transaction-modal" className = "modalTitle d-flex justify-content-center" href = "#" 
        >Add Transaction</a>
      </div>

       <TransactionModal/>
    </>
    
  )
}
