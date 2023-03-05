import React, { useContext, useState } from 'react'
import ExpenseItem from './ExpenseItem'
import { BudgetAppContext } from '../context/BudgetAppContext'

export default function ExpenseList() {
    const {expenses, categories} = useContext(BudgetAppContext);
    const [viewExpenses, setViewExpenses] = useState(expenses)
    

    const handleCategoryView = (e) => {

        e.preventDefault();
        if(e.target.value === "all"){
           setViewExpenses(expenses)
           
        }else{
          setViewExpenses(expenses.filter(expense => expense.category === e.target.value)) 
        }
    }
    

  return (
    <>
    
    <select onChange = {e => handleCategoryView(e)} className = "form-select mb-2"> 

      <option value = "all">all</option>
      {categories.map((category) => (
              <option value = {category.value}>{category.label}</option>
            ))}
    </select>
    
    <div className='expense-list'>
        <ul className = 'list-group mb-3'>

            {viewExpenses.map((expense) => (
                
                <ExpenseItem key = {expense.id} id = {expense.id} name = {expense.name} cost = {expense.cost} date = {expense.date} type = {expense.type}/>
            ))}
        </ul>
    </div>
    </>
  )
}
