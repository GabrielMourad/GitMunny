import React, { useState, useContext } from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext';
import {v4 as uuidv4} from 'uuid';
import 'react-toastify/dist/ReactToastify.css';
import {  toast } from 'react-toastify';



export default function AddExpenseForm() {
  const {dispatch} = useContext(BudgetAppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [category, setCategory] = useState('');

  const categories = [
    {
      label: "Grocery",
      value: "grocery",
    },

    {
      label: "Rent",
      value: "rent",
    },

    {
      label: "Gas",
      value: "gas",
    },

  ]

  function onSubmit(e){
    e.preventDefault();
    
    alert(category)

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseFloat(cost),
      date: new Date().toLocaleString(),
      type: 'p'
    }
   
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    })

    
    
    toast.success("Expense Set Successfully")
    document.getElementById("close-modal").click();
    
    
    
    
  }
  

  return (
    <>
    
    <form id = "expense-form" onSubmit={onSubmit}>
        <div className = 'col-sm'>
            <label htmlFor = 'name'>Name</label>
            <input required = 'required' type = 'text' className = 'form-control' id='name' value = {name} onChange = {e => setName(e.target.value)}>
            </input>
        </div>

        <div className = 'col-sm mt-3 mb-3'>
            <label for = 'cost'>Cost</label>
            <input required = 'required' type = 'number' className = 'form-control' id ='cost' value = {cost} onChange = {e => setCost(e.target.value)}></input>
        </div>

        <select value = {category} onChange = {e => setCategory(e.target.value)} class="form-select form-select-sm"  aria-label=".form-select-sm example">
          <option selected>Select Category</option>
          {categories.map((category) => (
              <option value = {category.value}>{category.label}</option>
            ))}
      
       </select>

     
    </form>
      
    </>
  )
}
