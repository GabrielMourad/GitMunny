import React, { useContext } from 'react'
import { BudgetAppContext } from '../context/BudgetAppContext';

export default function Categories() {
    
    const {budget, totalExpenses} = useContext(BudgetAppContext);
    // initialState.totalExpenses = initialState.expenses
    // .filter(expense => expense.type === "p")
    // .reduce((acc, expense) => acc + expense.cost, 0);

    
  
  const percent = (Math.floor((totalExpenses/budget) * 100));
  return (
    <div>
        <h5 className = "mt-3">Groceries</h5>
        <div class="progress progress-category mt-2">
            <div class= {`progress-bar bar-total bg-danger`} role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <h5 className = "mt-3">Rent</h5>
        <div class="progress progress-category mt-2">
            <div class= {`progress-bar bar-total bg-danger`} role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <h5 className = "mt-3">Gas</h5>
        <div class="progress progress-category mt-2">
            <div class= {`progress-bar bar-total bg-danger`} role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
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
