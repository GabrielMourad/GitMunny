import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { BudgetAppContext } from "../context/BudgetAppContext";

export default function ExpenseList() {
  const { expenses, categories } = useContext(BudgetAppContext);
  const [viewExpenses, setViewExpenses] = useState(expenses);

  
  useEffect(() => { 
    setViewExpenses([...expenses]);   
  }, [expenses]);


  const handleCategoryView = (e) => {
    e.preventDefault();
  
    const categoryType = e.target.value;
    let filteredExpenses;
  
    if (categoryType === "all") {
      filteredExpenses = expenses;
    } else {
      filteredExpenses = expenses.filter((expense) => expense.category === categoryType);
    }
  
    setViewExpenses(filteredExpenses);
  };
  

  return (
    <>
      <select
        onChange={(e) => handleCategoryView(e)}
        className="form-select mb-2"
      >
        <option value="all">all</option>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>

      <div className="expense-list">
        <ul className="list-group mb-3">
          {viewExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
              date={expense.date}
              type={expense.type}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
