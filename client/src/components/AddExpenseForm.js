import React, { useState, useContext } from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext';
import {v4 as uuidv4} from 'uuid';

export default function AddExpenseForm() {
  const {dispatch} = useContext(BudgetAppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  function onSubmit(e){
    e.preventDefault();
    alert('name ' + name+ ' cost ' +cost)

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    }

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    })

  }

  return (
    <form onSubmit={onSubmit}>
        <div className = 'col-sm'>
            <label for = 'name'>Name</label>
            <input required = 'required' type = 'text' className = 'form-control' id='name' value = {name} onChange = {e => setName(e.target.value)}>
            </input>
        </div>

        <div className = 'col-sm'>
            <label for = 'cost'>Cost</label>
            <input required = 'required' type = 'text' className = 'form-control' id ='cost' value = {cost} onChange = {e => setCost(e.target.value)}></input>
        </div>

        <button type = "submit" className = 'btn btn-primary mt-3'>Save</button>
    </form>
  )
}
