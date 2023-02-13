import React, { useContext, useEffect } from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext';

export default function Categories() {
    
    const {budget, totalExpenses, expenses} = useContext(BudgetAppContext);
    // initialState.totalExpenses = initialState.expenses
    // .filter(expense => expense.type === "p")
    // .reduce((acc, expense) => acc + expense.cost, 0);

    // useEffect(() => {
    //     document.documentElement.style.setProperty('--prog-percent', `${percent}%`)
    //   },[percent])
  const totalGrocery = expenses
    .filter(expense => expense.category === "grocery")
    .reduce((acc, expense) => acc + expense.cost, 0);

  const totalRent = expenses
    .filter(expense => expense.category === "rent")
    .reduce((acc, expense) => acc + expense.cost, 0);

  const totalGas = expenses
    .filter(expense => expense.category === "gas")
    .reduce((acc, expense) => acc + expense.cost, 0);

  
 
  const groceryPercent = (Math.floor((totalGrocery/budget) * 100));
  const rentPercent = (Math.floor((totalRent/budget) * 100));
  const gasPercent = (Math.floor((totalGas/budget) * 100));


  useEffect(() => {
    document.documentElement.style.setProperty('--prog-percent-grocery', `${groceryPercent}%`)
  },[groceryPercent])

  useEffect(() => {
    document.documentElement.style.setProperty('--prog-percent-rent', `${rentPercent}%`)
  },[rentPercent])

  useEffect(() => {
    document.documentElement.style.setProperty('--prog-percent-gas', `${gasPercent}%`)
  },[gasPercent])

  return (
    <div>
        <h5 className = "mt-3">Groceries</h5>
        <div class="progress progress-category mt-2">
            <div class= {`progress-bar bar-total-grocery bg-danger`} role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <h5 className = "mt-3">Rent</h5>
        <div class="progress progress-category mt-2">
            <div class= {`progress-bar bar-total-rent bg-danger`} role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <h5 className = "mt-3">Gas</h5>
        <div class="progress progress-category mt-2">
            <div class= {`progress-bar bar-total-gas bg-danger`} role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        {/* <div class="progress">
            <div class="progress-bar progress-bar-success" role="progressbar">
                Free Space
            </div>
            <div class="progress-bar progress-bar-warning" role="progressbar">
                Warning
            </div>
            <div class="progress-bar progress-bar-danger" role="progressbar" >
                Danger
            </div>
        </div> */} 

        </div>
  )
}
