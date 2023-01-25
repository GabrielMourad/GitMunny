import React, { useContext, useState } from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext'
import DepositModal from './modals/DepositModal';

export default function Remainding() {

  const {budget, expenses, deposit, totalExpenses} = useContext(BudgetAppContext);

  
  
  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'


  return (
    <>

     <div className = {`alert ${alertType} type-card`}>
          <span>Remainding : ${totalExpenses}</span>
     </div>

      <DepositModal/>
    
    </>
  )
}
