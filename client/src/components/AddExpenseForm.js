import React, { useState, useContext } from "react";
import { BudgetAppContext } from "../context/BudgetAppContext";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function AddExpenseForm() {
  const { dispatch, categories, userInfo } = useContext(BudgetAppContext);

  const [cost, setCost] = useState("");

  // NEW DATA
  const [categoryBackgroundColor, setCategoryBackgroundColor] =
    useState("blue");
  const [categoryIcon, setCategoryIcon] = useState("Sunglass emoji");
  const [categoryName, setCategoryName] = useState("");
  const [categoryTextColor, setCategoryTextColor] = useState("black");
  const [isWithdrawl, setIsWithdrawl] = useState(true);
  const [pendingSort, setPendingSort] = useState(false);
  const [transactionName, setTransactionName] = useState("");
  //

  function onSubmit(e) {
    e.preventDefault();

    const newDate = new Date().toLocaleString();

    const expense = {
      id: uuidv4(),
      categoryBackgroundColor: categoryBackgroundColor,
      categoryIcon: categoryIcon,
      transactionName: transactionName,
      categoryTextColor: categoryTextColor,
      categoryName: categoryName,
      cost: parseFloat(cost),
      date: newDate,
      type: "p",
      isWithdrawl: isWithdrawl,
      pendingSort: pendingSort,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    toast.success("Expense Set Successfully");
    document.getElementById("close-modal").click();

    setTransactionName("");
    setCategoryName("");
    setCost("");
  }

  return (
    <>
      <form id="expense-form" onSubmit={onSubmit}>
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={transactionName}
            onChange={(e) => setTransactionName(e.target.value)}
          ></input>
        </div>

        <div className="col-sm mt-3 mb-3">
          <label for="cost">Cost</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          ></input>
        </div>

        <select
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          class="form-select form-select-sm"
          aria-label=".form-select-sm example"
          required
          onInvalid={(e) => {
            e.target.setCustomValidity("Please select a category");
          }}
        >
          <option disabled selected value="">
            Select Category
          </option>
          {categories.map((category) => (
            <option value={category.value}>{category.label}</option>
          ))}
        </select>
      </form>
    </>
  );
}
