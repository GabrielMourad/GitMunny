import React, { useState, useContext } from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext';
import {v4 as uuidv4} from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      date: new Date().toLocaleString()
    }
   
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    })
    
    toast.success("Yup")
    
  }

  return (
    <form id = "expense-form" onSubmit={onSubmit}>
        <div className = 'col-sm'>
            <label htmlFor = 'name'>Name</label>
            <input required = 'required' type = 'text' className = 'form-control' id='name' value = {name} onChange = {e => setName(e.target.value)}>
            </input>
        </div>

        <div className = 'col-sm mt-3 mb-3'>
            <label for = 'cost'>Cost</label>
            <input required = 'required' type = 'text' className = 'form-control' id ='cost' value = {cost} onChange = {e => setCost(e.target.value)}></input>
        </div>
       
    </form>
  )
}
