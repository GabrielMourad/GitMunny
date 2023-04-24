import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { BudgetAppContext } from '../context/BudgetAppContext';

export default function Categories() {
    
  const {budget, expenses, categories} = useContext(BudgetAppContext);
  const [option, setOption] = useState(1);
  const [categoryColor, setCategoryColor] = useState({
      "grocery": 'success',
      "rent" : 'warning',
      "entertainment" : 'danger',
      "bills": 'secondary',
      'taxes': 'info',
      'misc' : 'primary',
      'investing': 'investcolor'
  
    }
  )
  
  function calculateTotal(type){
      return expenses
      .filter(expense => expense.category === type)
      .reduce((acc, expense) => acc + expense.cost, 0);
  }

  function calculatePercentage(total){
    return (Math.floor((total/budget) * 100));
  }

  const totalGrocery = calculateTotal("grocery")
  const totalRent = calculateTotal("rent")
  const totalEntertainment = calculateTotal("entertainment")
  const totalBills = calculateTotal("bills")
  const totalTaxes = calculateTotal("taxes")
  const totalMisc = calculateTotal("misc")
  const totalInvesting = calculateTotal("investing")

  const groceryPercent = calculatePercentage(totalGrocery)
  const rentPercent = calculatePercentage(totalRent)
  const entertainmentPercent = calculatePercentage(totalEntertainment)
  const billsPercent = calculatePercentage(totalBills)
  const taxesPercent = calculatePercentage(totalTaxes)
  const miscPercent = calculatePercentage(totalMisc)
  const investingPercent = calculatePercentage(totalInvesting)

  console.log(categories)
 
 
  useEffect(() => {
    const variables = {
      '--prog-percent-grocery': groceryPercent,
      '--prog-percent-rent': rentPercent,
      '--prog-percent-taxes': taxesPercent,
      '--prog-percent-entertainment': entertainmentPercent,
      '--prog-percent-bills': billsPercent,
      '--prog-percent-misc': miscPercent,
      '--prog-percent-investing': investingPercent
    };
  
    for (let variable in variables) {
      document.documentElement.style.setProperty(variable, `${variables[variable]}%`);
    }
  }, [groceryPercent, rentPercent, taxesPercent, entertainmentPercent, billsPercent, miscPercent, investingPercent]);
  





  if (option === 1){
    return(
      <>
    <div class="progress-category-together progress mt-4">
        {categories.map((category) => (
                <div key = {category.value} class= {`progress-bar progress-category bar-total-${category.value} bg-${categoryColor[category.value]} progress-category-together`} role="progressbar"  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                </div>
                  
                ))}
            
            
             
        </div> 
      
      <div>
        <ul className = "mt-2" style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none', margin: 0, padding: 0, justifyContent: 'flex-start' }}>

        {categories.map((category) => (
            <li key = {category.label} className={`d-flex category-name text-${categoryColor[category.value]}`} style={{ marginRight: '10px', paddingLeft: '20px' }}>• {category.label}</li>
              
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
      {categories.map((category) => (
        <>
          <h5 className="mt-3">{category.label}</h5>
          <div className="progress progress-category mt-2">
              <div className={`progress-bar bar-total-${category.value} bg-success`} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
    </>
       ))}

        


      
      </div>

    <div className="option-btn">
      <button className = "btn btn-light" onClick = {() => setOption(option + 1)} >Toggle</button>
    </div>

    </>

  )
}
