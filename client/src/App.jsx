import React from 'react'
import AddExpenseForm from './components/AddExpenseForm';
import BudgetCard from './components/BudgetCard';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import ProgressBar from './components/ProgressBar';
import Remainding from './components/Remainding';
import Dashboard from './components/Dashboard';
import { BudgetContextProvider } from './context/BudgetAppContext';
import 'react-toastify/dist/ReactToastify.css';
import {  toast, ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {
    const devil = () => {
        toast.success("get Xunfeid")

        toast('get Xunfeid', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        
        toast.error('get Xunfeid', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });     
                
        toast('get Xunfeid', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
        
        toast('get Xunfeid', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                        toast.warn('get Xunfeid', {
                            position: "top-left",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            });
    }


    return(
        <BudgetContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Dashboard />}>
                    
                    </Route>
                </Routes>
            </BrowserRouter>

        </BudgetContextProvider>
    );
   
    
}

export default App;