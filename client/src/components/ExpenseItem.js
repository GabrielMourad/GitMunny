import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti'
import { BudgetAppContext } from '../context/BudgetAppContext'

export default function ExpenseItem(props) {

  const {dispatch} = useContext(BudgetAppContext);
  const date = new Date();

  const handleDeleteExpense = () => {

    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    })
  }

  return (
    <>
    {/* d-flex justify-content-between align-items-center */}
    <li className = "list-group-item">
      <div className = "d-flex justify-content-between align-items-center">

        {props.name}
        
        
        
        <div>
            
            <span className = "badge bg-danger rounded-pill mr-3 ">
                - ${props.cost}
            </span>
            <TiDelete size = '1.3em' onClick ={handleDeleteExpense}></TiDelete>
            
            
              
            
        </div>
      </div>

        <span className = "text-secondary">{props.date}</span>
    </li>
    
    </>
  )
}
