import React from 'react'
import BudgetCard from './components/BudgetCard';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import ProgressBar from './components/ProgressBar';
import Remainding from './components/Remainding';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {
  return (
    <div className = "container">
    <ToastContainer/>
        <h1 className = "mt-3 mb-4">GITMUNNY 😈😈😈<span onClick = {devil}>😈</span></h1>
 
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