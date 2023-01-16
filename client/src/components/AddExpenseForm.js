import React, { useState, useContext } from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext';
import {v4 as uuidv4} from 'uuid';

export default function AddExpenseForm() {
  const {dispatch} = useContext(BudgetAppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  
  const ForumButton = () => {
    return 
  }

  function onSubmit(e){
    e.preventDefault();
    alert('name ' + name+ ' cost ' +cost)

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
      date: new Date().toLocaleString()
    }
   
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    })
    
    
  }

  return (
    <form id = "expense-form" onSubmit={onSubmit}>
        <div className = 'col-sm'>
            <label htmlFor = 'name'>Name</label>
            <input required = 'required' type = 'text' className = 'form-control' id='name' value = {name} onChange = {e => setName(e.target.value)}>
            </input>
        </div>

        <div className = 'col-sm'>
            <label for = 'cost'>Cost</label>
            <input required = 'required' type = 'text' className = 'form-control' id ='cost' value = {cost} onChange = {e => setCost(e.target.value)}></input>
        </div>
        
        <div class="modal-footer">
          
          <button type = "submit" className = ' btn btn-primary mt-3'>Save</button>

        </div>
    </form>
  )
}
