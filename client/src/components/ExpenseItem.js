import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti'
import { BudgetAppContext } from '../context/BudgetAppContext'

export default function ExpenseItem(props) {

  const {dispatch} = useContext(BudgetAppContext);

  const handleDeleteExpense = () => {

    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    })
  }

  return (
    <li className = "list-group-item d-flex justify-content-between align-items-center">
        {props.name}
        <div>
            <span className = "badge bg-dark rounded-pill mr-3">
                ${props.cost}
            </span>
            <TiDelete size = '1.5em' onClick ={handleDeleteExpense}></TiDelete>
        </div>
    </li>
  )
}
