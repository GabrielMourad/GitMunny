import React, { useState, useContext } from "react";
import { BudgetAppContext } from "../context/BudgetAppContext";
import { auth, provider } from "../firebase/Firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { db } from "../firebase/Firebase";
import { updateDoc, setDoc, doc, getDoc, arrayUnion } from "firebase/firestore";

function Login({ setIsAuth }) {
  const { setUserInfo } = useContext(BudgetAppContext);
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(async (result) => {
      setUserInfo({
        name: result.user.displayName,
        email: result.user.email,
        uid: result.user.uid,
      });
      const categories = [
        "Groceries",
        "Rent",
        "Entertainment",
        "Bills",
        "Taxes",
        "Misc",
        "Investing",
      ];
      console.log(result.user.uid);
      const docRef = doc(db, "users", result.user.uid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.exists());
      if (!docSnap.exists()) {
        setDoc(docRef, {
          budget: "0",
          budgetStyle: "Manual",
          categories: categories,
          firstLogin: true,
          managementStyle: "Hybrid",
        });
      }
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
      toast.success("Successfully Logged In");
    });
  };

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
