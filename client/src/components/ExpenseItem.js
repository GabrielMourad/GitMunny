import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti'
import { BudgetAppContext } from '../context/BudgetAppContext'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export default function ExpenseItem(props) {

  const {dispatch} = useContext(BudgetAppContext);

  let badgeColor = 'danger'
  let sign = "-"
  

  const handleDeleteExpense = () => {
    
    toast.dark("Expense Deleted")
    const currentPayload = {
      id: props.id,
      cost: props.cost
    }
    
    if(props.type === "p"){
      dispatch({
        type: 'DELETE_EXPENSE_P',
        payload: currentPayload
      })
      
    }else{
      
      dispatch({
        type: 'DELETE_EXPENSE_D',
        payload: currentPayload
      })
    }
    



   
  }

  if(props.type === "d"){
    badgeColor = "success"
    sign = "+"
  }

    


  return (
    <>
    {/* d-flex justify-content-between align-items-center */}
    <li className = "list-group-item">
      <div className = "d-flex justify-content-between align-items-center">
        {props.name}
        <div>
            
            <span className = {`badge bg-${badgeColor} rounded-pill mr-3`} >
                {sign} ${props.cost}
            </span>
            <TiDelete size = '1.3em' onClick ={handleDeleteExpense}></TiDelete>
            
            
              
            
        </div>
      </div>

        <span className = "text-secondary">{props.date}</span>
    </li>
    
    </>
  )
}
