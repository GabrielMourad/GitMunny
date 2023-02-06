import React from 'react'
import Dashboard from './components/Dashboard';
import { BudgetContextProvider } from './context/BudgetAppContext';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  
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