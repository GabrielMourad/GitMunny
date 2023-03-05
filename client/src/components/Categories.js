import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { BudgetAppContext } from '../context/BudgetAppContext';

export default function Categories() {
    
  const {budget, expenses, categories} = useContext(BudgetAppContext);
  const [option, setOption] = useState(1);
  const [categoryColor, setCategoryColor] = useState({
      "grocery": 'success',
      "rent" : 'warning',
      "gas" : 'danger'
    }
  )

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


  if (option == 1){
    return(
      <>
    <div class="progress-category-together progress mt-4">
             <div class= {`progress-bar progress-category bar-total-grocery bg-success progress-category-together`} role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
             </div>
             <div class= {`progress-bar progress-category bar-total-rent bg-warning progress-category-together`} role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
            </div>
           <div class= {`progress-bar progress-category bar-total-gas bg-danger progress-category-together`} role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div> 
      
      <div>
        <ul className = "mt-2" style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', margin: 0, padding: 0, justifyContent: 'flex-start' }}>

        {categories.map((category) => (
            <li key = {category.label} className={`category-name text-${categoryColor[category.value]}`} style={{ marginRight: '10px', paddingLeft: '20px' }}>• {category.label}</li>
              
            ))}
        </ul>
    </div> 

    <div className="option-btn ">
      <button className = "btn btn-light" onClick = {() => setOption(option + 1)} >Toggle</button>
    </div>

      </>
    )
  }

  if (option === 3){
    //https://cdn.discordapp.com/attachments/1013580066309017603/1024099213019185212/Snapchat-866511628.jpg
    return(
      <>
      <img className = "sergio" src = 'https://cdn.discordapp.com/attachments/1013580066309017603/1024099213019185212/Snapchat-866511628.jpg'></img>
        <div className="option-btn">
          <button className = "btn btn-light" onClick = {() => setOption(1)} >Toggle</button>
        </div>
      </>
    )
  }

  return (
    <>
    

      <div className = "category-container">
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
      </div>

    <div className="option-btn">
      <button className = "btn btn-light" onClick = {() => setOption(option + 1)} >Toggle</button>
    </div>

    </>

  )
}
