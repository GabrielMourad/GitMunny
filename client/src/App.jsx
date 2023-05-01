import React, {useState} from 'react'
import Dashboard from './components/Dashboard';
import { BudgetContextProvider } from './context/BudgetAppContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import {auth} from "../src/firebase/Firebase"
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import Leaderboard from './components/Leaderboard';

const App = () => {

    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

    const signOut = () => {
        auth.signOut().then(() => {
            localStorage.clear()
            setIsAuth(false)
            window.location.pathname = "/login"
        })
        
    }
    

      
    return(
        <BudgetContextProvider>
            <BrowserRouter>
                <Navbar isAuth = {isAuth} signOut = {signOut}/>

                <Routes>
                    <Route exact path="/login" element={!isAuth ? <LoginPage setIsAuth = {setIsAuth}/> : (<Navigate to = '/'/>)}/>
                    <Route exact path="/" element={isAuth ? <Dashboard isAuth = {isAuth}/> : (<Navigate to = '/login'/>)}/>
                    <Route exact path="/leaderboard" element={isAuth ? <Leaderboard isAuth = {isAuth}/> : (<Navigate to = '/login'/>)}/>
                    
                </Routes>
            </BrowserRouter>

        </BudgetContextProvider>
    );
   
    
}

export default App;