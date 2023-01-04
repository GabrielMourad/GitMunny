import { createContext, useReducer } from "react"

function reducer(state, action){
    switch(action.type){
        case 'ADD_EXPENSE':
            console.log(...state.expenses, action.payload);
            return {
                ...state,
            
                expenses: [...state.expenses, action.payload]
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
    budget: 2000,
    expenses: [
        {id: 12, name: "E-bike Jetson", cost: 40, date: '12/6/2022, 10:34:22'},
        {id: 13, name: "iPhone 14", cost: 20, date: '12/6/2022, 10:34:22'},
        {id: 14, name: "Macbook Air", cost: 4, date: '12/6/2022, 10:34:22' },
        {id: 15, name: "Subway", cost: 40, date: '12/6/2022, 10:34:22'},
        {id: 16, name: "El Pollo Loco", cost: 20, date: '12/6/2022, 10:34:22'},
        {id: 17, name: "shopping3", cost: 4, date: '12/6/2022, 10:34:22'}
    ]
}

const totalExpenses = initialState.expenses.reduce((totalSum, currentItem) => {
    return (totalSum = totalSum + currentItem.cost)
  }, 0)



export const BudgetAppContext = createContext();

export const BudgetContextProvider = (props) => {
    const [state,dispatch] = useReducer(reducer, initialState)

    return(
        <BudgetAppContext.Provider value = {{
            budget: state.budget,
            expenses: state.expenses.reverse(),
            dispatch,
            totalExpenses

        }}>
            {props.children}
        </BudgetAppContext.Provider>
    )
}