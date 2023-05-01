import React, { useContext, useState, useEffect } from "react";
import BudgetCard from "./BudgetCard";
import Remainding from "./Remainding";
import ExpenseTotal from "./ExpenseTotal";
import ProgressBar from "./ProgressBar";
import ExpenseList from "./ExpenseList";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Categories from "./Categories";
import { BudgetAppContext } from "../context/BudgetAppContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";

function Dashboard({ isAuth }) {
  const { userInfo, budget, setBudget, dispatch } =
    useContext(BudgetAppContext);

  // Sergio was here
  useEffect(() => {
    // WORKING ON STARTING APPLICATION WITH CORRECT BUDGET VALUE //
    const currentDocumentRef = doc(db, "users", userInfo.uid);
    getDoc(currentDocumentRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          dispatch({
            type: "SET_BUDGET",
            payload: data.budget,
          });
        } else {
          console.log("Document doesn't exist");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <div className="container">
      <ToastContainer />

      <div className="row mt-3">
        <div className="col-sm ">
          <BudgetCard />
        </div>

        <div className="col-sm ">
          <Remainding />
        </div>

        <div className="col-sm ">
          <ExpenseTotal />
        </div>
      </div>

      <div class="mt-3">
        <ProgressBar />
      </div>

      <h3 className="mt-5">Categories</h3>

      <div>
        <Categories />
      </div>

      <h3 className="mt-5">Expenses</h3>
      <div className="mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
