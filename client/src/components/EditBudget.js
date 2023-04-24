import React, { useContext, useState } from "react";
import { BudgetAppContext } from "../context/BudgetAppContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { updateDoc, setDoc, doc, getDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase/Firebase";

export default function EditBudget() {
  const { userInfo, budget, dispatch } = useContext(BudgetAppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const onSubmit = (e) => {
    e.preventDefault();
    // Firebase update budget
    console.log(userInfo.uid, newBudget);
    const currentDocumentRef = doc(db, "users", userInfo.uid);
    updateDoc(currentDocumentRef, {
      budget: newBudget,
    });
    //

    dispatch({
      type: "SET_BUDGET",
      payload: newBudget,
    });

    document.getElementById("close-modal-budget").click();
    toast.success("Budget Set");
  };

  return (
    <>
      <form id="budget-form" onSubmit={onSubmit}>
        <div className="col-sm">
          <label htmlFor="name">Budget Amount</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="budget"
            value={newBudget}
            onChange={(e) => setNewBudget(e.target.value)}
          ></input>
        </div>
      </form>
    </>
  );
}
