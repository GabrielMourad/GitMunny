import React from 'react'
import AddExpenseForm from './components/AddExpenseForm';
import BudgetCard from './components/BudgetCard';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import BudgetModal from './components/modals/BudgetModal';
import ProgressBar from './components/ProgressBar';
import Remainding from './components/Remainding';
import { BudgetContextProvider } from './context/BudgetAppContext';
import 'react-toastify/dist/ReactToastify.css';
import {  toast, ToastContainer } from 'react-toastify';

const App = (props) => {
    
    return(
        <BudgetContextProvider>
            <div className = "container">
                <ToastContainer/>
                <h1 className = "mt-3 mb-4">GITMUNNY 😈😈😈😈 </h1>
             
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

        </BudgetContextProvider>
    );
   
    
}

export default App;