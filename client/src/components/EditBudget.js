import React, { useContext, useState } from "react";
import { BudgetAppContext } from "../context/BudgetAppContext";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { collection, getDocs, query } from "firebase/firestore";

export default function EditBudget() {
  const { userInfo, budget, dispatch } = useContext(BudgetAppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const onSubmit = async (e) => {
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
    let totalExpenses = transactionsData.reduce(
      (acc, expense) =>
        expense.type === "p"
          ? acc + expense.cost
          : expense.type === "d"
          ? acc - expense.cost
          : acc,
      0
    );
    totalExpenses = Math.round(100 * totalExpenses) / 100;
    const remainding = Math.round(100 * (newBudget - totalExpenses)) / 100;
    dispatch({
      type: "UPDATE_REMAINDING",
      payload: {
        totalExpenses: totalExpenses,
        remainding: remainding,
      },
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
