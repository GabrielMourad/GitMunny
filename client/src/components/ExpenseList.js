import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { BudgetAppContext } from "../context/BudgetAppContext";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase/Firebase";

export default function ExpenseList() {
  const { dispatch, budget, expenses, categories, userInfo } =
    useContext(BudgetAppContext);
  const [viewExpenses, setViewExpenses] = useState(expenses);
  const [expenseCategory, setExpenseCategory] = useState("all");

  useEffect(() => {
    // if (expenseCategory === "all") {
    //   setViewExpenses(expenses);
    // } else {
    //   setViewExpenses(
    //     expenses.filter((expense) => expense.category === expenseCategory)
    //   );
    // }

    const getTransactions = async () => {
      const transactionsRef = collection(
        db,
        "users",
        userInfo.uid,
        "transactions"
      );
      const q = query(transactionsRef);
      const querySnapshot = await getDocs(q);
      const transactionsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setViewExpenses(transactionsData);
      let totalExpenses = transactionsData
        .filter((expense) => expense.type === "p")
        .reduce((acc, expense) => acc + expense.cost, 0);
      totalExpenses = Math.round(100 * totalExpenses) / 100;
      const remainding = Math.round(100 * (budget - totalExpenses)) / 100;
      dispatch({
        type: "UPDATE_REMAINDING",
        payload: {
          totalExpenses: totalExpenses,
          remainding: remainding,
        },
      });
    };
    getTransactions();
  }, [budget, expenses, expenseCategory]);

  const handleCategoryView = (e) => {
    e.preventDefault();

    const categoryType = e.target.value;
    setExpenseCategory(categoryType);
  };

  console.log(expenseCategory);

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
          {viewExpenses
            .filter(
              (expense) =>
                expenseCategory === "all" ||
                expense.categoryName === expenseCategory
            )
            .map((expense) => (
              <ExpenseItem
                key={expense.id}
                id={expense.id}
                name={expense.transactionName}
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
