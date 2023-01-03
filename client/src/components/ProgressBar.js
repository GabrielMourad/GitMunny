import React, { useContext, useEffect, useState } from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext'

export default function ProgressBar() {
    // const [theme, setTheme] = useState("light");
    // const [mode, setMode] = useState("Light");
    

    // const toggleTheme = () => {
    //     setTheme((curr) => (curr === "light" ? "dark" : "light"));
    //     setMode((curr => (theme === "light" ? "Dark" : "Light")))

    //     if(theme === "light"){
    //         document.documentElement.style.setProperty('--bg-color',' rgb(59, 32, 34)')
    //     }else{
    //         document.documentElement.style.setProperty('--bg-color',' rgb(224, 99, 109)')
            
    //     }


  const {budget, expenses} = useContext(BudgetAppContext);
  

  const totalExpenses = expenses.reduce((totalSum, currentItem) => {
    return (totalSum = totalSum + currentItem.cost)
  }, 0)

  const percent = (Math.floor((totalExpenses/budget) * 100) ) + "%"
 
  document.documentElement.style.setProperty('--prog-percent', `${percent}`)
  useEffect(() => {
 
  },[])
  

  
  return (
    <div class="progress mt-2">
        <div class="progress-bar bg-success" role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  )
}
