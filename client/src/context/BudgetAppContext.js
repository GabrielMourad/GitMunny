import { createContext, useReducer, useState } from "react"

function reducer(state, action){
    switch(action.type){
        case 'ADD_EXPENSE':
            
            return {
                ...state,
                expenses: [action.payload, ...state.expenses]
            }
        
        case 'DELETE_EXPENSE':
            return{
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };
        
        case 'SET_BUDGET':
            return{
                ...state,
                budget: action.payload
            }

        default:
            return state;
    }
}

const initialState = {
    budget: 5000,
    expenses: [
        { name: 'E-bike Jetson', cost: 276.13, date: '12/6/2022, 10:34:22',  id: 1, type: 'p' },
        { name: 'iPhone 14', cost: 1311.98, date: '12/6/2022, 10:34:22',  id: 2, type: 'p'},
        { name: 'Purchase 4', cost: 40, date: '12/6/2022, 10:34:22',  id: 3, type: 'p'},
        { name: 'Purchase 3', cost: 50, date: '12/6/2022, 10:34:22',  id: 4, type: 'p'},
        { name: 'Macbook Air', cost: 881.21, date: '12/6/2022, 10:34:22',  id: 5, type: 'p'},
        { name: 'Purchase 2', cost: 120, date: '12/6/2022, 10:34:22',  id: 6, type: 'p'},
        { name: 'Subway', cost: 11.13, date: '12/6/2022, 10:34:22',  id: 7, type: 'p'},
        { name: 'El Pollo Loco', cost: 7.66, date: '12/6/2022, 10:34:22',  id: 8, type: 'p'},
        { name : 'Purchase 1', cost: 50, date: '12/6/2022, 10:34:22',  id: 9, type: 'p'}
    ],
    
    
    
}


initialState.totalExpense = initialState.expenses.reduce((acc, expense) => acc + expense.cost, 0);


export const BudgetAppContext = createContext();

export const BudgetContextProvider = (props) => {
    const [state,dispatch] = useReducer(reducer, initialState)
    const [deposit, setDeposit] = useState(0);
    const [remainding, setRemainding] = useState(initialState.budget - initialState.totalExpense);
    
    const [totalExpenses, setTotalExpenses] = useState(initialState.expenses.reduce((totalSum, currentItem) => {
        return (totalSum = totalSum + currentItem.cost)
     }, 0))
  

    
    
    return(
        <BudgetAppContext.Provider value = {{
            budget: state.budget,
            expenses: state.expenses,
            totalExpense: state.totalExpense,
            dispatch,
            deposit,
            setDeposit,
            totalExpenses,
            setTotalExpenses,
            remainding,
            setRemainding
            
           
           

        }}>
            {props.children}
        </BudgetAppContext.Provider>
    )
}