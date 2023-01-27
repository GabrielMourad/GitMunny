import React, { useContext } from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext'
import DepositModal from './modals/DepositModal';

export default function Remainding() {

  const {budget,remainding, totalExpenses} = useContext(BudgetAppContext);

  
  
  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'
  

  return (
    <>

     <div className = {`alert ${alertType} type-card`}>
          <span>Remainding : ${remainding.toFixed(2)}</span>
     </div>

      <DepositModal/>
    
    </>
  )
}
