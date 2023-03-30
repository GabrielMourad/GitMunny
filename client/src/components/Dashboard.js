import React from 'react'
import BudgetCard from './BudgetCard';
import Remainding from './Remainding';
import ExpenseTotal from './ExpenseTotal';
import ProgressBar from './ProgressBar';
import ExpenseList from './ExpenseList';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer } from 'react-toastify';
import Categories from './Categories';

function Dashboard({isAuth}) {
 
  return (
    <div className = "container">
    <ToastContainer/>

        <div className = "row mt-3">
            <div className = "col-sm ">
                <BudgetCard/>
            </div>

            <div className = "col-sm ">
                <Remainding/>
            </div>
            
            <div className = "col-sm ">
                <ExpenseTotal/>
            </div>
        
        </div>
    
        <div class = "mt-3">
            <ProgressBar/>
        </div>

        <h3 className = 'mt-5'>Categories</h3>

        <div>
            <Categories/>
        </div>

        <h3 className = 'mt-5'>Expenses</h3>
        <div className = 'mt-3'>
            <div className = 'col-sm'>
                <ExpenseList/>
            
            </div>

        </div>

    </div>      


    

  )
}

export default Dashboard