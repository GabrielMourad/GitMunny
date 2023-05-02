import { createContext, useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [action.payload, ...state.expenses],
        remainding:
          Math.round(100 * (state.remainding - action.payload.cost)) / 100,
        totalExpenses:
          Math.round(100 * (state.totalExpenses + action.payload.cost)) / 100,
      };
    //Math.round(100*X)/100
    case "DELETE_EXPENSE_P":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload.id
        ),

        remainding:
          Math.round(100 * (state.remainding + action.payload.cost)) / 100,
        totalExpenses:
          Math.round(100 * (state.totalExpenses - action.payload.cost)) / 100,
      };

    case "DELETE_EXPENSE_D":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload.id
        ),
        remainding:
          Math.round(100 * (state.remainding - action.payload.cost)) / 100,
      };

    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };

    case "SET_DEPOSIT":
      return {
        ...state,
        expenses: [action.payload, ...state.expenses],
        remainding:
          Math.round(100 * (state.remainding + action.payload.cost)) / 100,
      };

    case "UPDATE_EXPENSES":
      return {
        ...state,
        expenses: action.payload.expenses,
      };

    case "UPDATE_REMAINDING":
      return {
        ...state,
        totalExpenses: action.payload.totalExpenses,
        remainding: action.payload.remainding,
      };

    default:
      return state;
  }
}

const initialState = {
  budget: 0,
  expenses: [],

  categories: [
    {
      label: "Grocery",
      value: "grocery",
    },

    {
      label: "Rent",
      value: "rent",
    },

    {
      label: "Entertainment",
      value: "entertainment",
    },

    {
      label: "Bills",
      value: "bills",
    },

    {
      label: "Taxes",
      value: "taxes",
    },

    {
      label: "Misc",
      value: "misc",
    },

    {
      label: "Investing",
      value: "investing",
    },
  ],
};

initialState.totalExpenses = initialState.expenses
  .filter((expense) => expense.type === "p")
  .reduce((acc, expense) => acc + expense.cost, 0);

initialState.totalExpenses = Math.round(100 * initialState.totalExpenses) / 100;

initialState.remainding =
  Math.round(100 * (initialState.budget - initialState.totalExpenses)) / 100;

export const BudgetAppContext = createContext();

export const BudgetContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isAuth, setIsAuth] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return (
    <BudgetAppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        totalExpenses: state.totalExpenses,
        remainding: state.remainding,
        categories: state.categories,
        dispatch,
        userInfo,
        setUserInfo,
      }}
    >
      {props.children}
    </BudgetAppContext.Provider>
  );
};
