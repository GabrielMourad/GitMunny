import React from 'react'
import Dashboard from './components/Dashboard';
import { BudgetContextProvider } from './context/BudgetAppContext';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import Signup from './components/Signup';

const App = () => {
  
    return(
        <BudgetContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>}/>
                    <Route exact path="/signup" element={<Signup/>}/>
                    <Route exact path="/" element={<Dashboard/>}/>
                    
                </Routes>
            </BrowserRouter>

        </BudgetContextProvider>
    );
   
    
}

export default App;