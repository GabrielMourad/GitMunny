import { createContext, useReducer} from "react"

function reducer(state, action){
    switch(action.type){
        case 'ADD_EXPENSE':
            
            return {
                ...state,
                expenses: [action.payload, ...state.expenses],
                remainding: Math.round(100* (state.remainding - action.payload.cost))/100,
                totalExpenses : Math.round(100* (state.totalExpenses + action.payload.cost))/100
            }
        //Math.round(100*X)/100
        case 'DELETE_EXPENSE_P':
            return{
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload.id
                ),

                remainding: Math.round(100* (state.remainding + action.payload.cost))/100,
                totalExpenses : Math.round(100*(state.totalExpenses - action.payload.cost ))/100  

            };
        
        case 'DELETE_EXPENSE_D':
            return{
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload.id
                ),
                remainding : Math.round(100*(state.remainding - action.payload.cost))/100,
                 
            
            };
            
        case 'SET_BUDGET':
            return{
                ...state,
                budget: action.payload
            }
        
        case 'SET_DEPOSIT':
            return{
                ...state,
                expenses: [action.payload, ...state.expenses],
                remainding: Math.round(100*(state.remainding + action.payload.cost))/100
                
            }

        default:
            return state;
    }
}

const initialState = {
    budget: 5000,
    expenses: [
        { name: 'E-bike Jetson', cost: 276.13, date: '12/6/2022, 10:34:22', type: 'p', id: 1, category: "Groceries" },
        { name: 'iPhone 14', cost: 1311.98, date: '12/6/2022, 10:34:22', type: 'p', id: 2, category: "Groceries" },
        { name: 'DEPOSIT', cost: 40, date: '12/6/2022, 10:34:22', type: 'd', id: 3, category: "Groceries" },
        { name: 'DEPOSIT', cost: 50, date: '12/6/2022, 10:34:22', type: 'd', id: 4, category: "Groceries" },
        { name: 'Macbook Air', cost: 881.21, date: '12/6/2022, 10:34:22', type: 'p', id: 5, category: "Groceries" },
        { name: 'DEPOSIT', cost: 120, date: '12/6/2022, 10:34:22', type: 'd', id: 6, category: "Groceries" },
        { name: 'Subway', cost: 11.13, date: '12/6/2022, 10:34:22', type: 'p', id: 7, category: "Groceries" },
        { name: 'El Pollo Loco', cost: 7.66, date: '12/6/2022, 10:34:22', type: 'p', id: 8, category: "Rent" },
        { name: 'DEPOSIT', cost: 50, date: '12/6/2022, 10:34:22', type: 'd', id: 9, category: "Groceries" },
    ],

    
    
    
    
}

initialState.totalExpenses = initialState.expenses
  .filter(expense => expense.type === "p")
  .reduce((acc, expense) => acc + expense.cost, 0);

initialState.remainding = initialState.budget - initialState.totalExpenses;



export const BudgetAppContext = createContext();

export const BudgetContextProvider = (props) => {
    const [state,dispatch] = useReducer(reducer, initialState)
    
     
    return(
        <BudgetAppContext.Provider value = {{
            budget: state.budget,
            expenses: state.expenses,
            totalExpenses: state.totalExpenses,
            remainding: state.remainding,
            dispatch
            
           
           

        }}>
            {props.children}
        </BudgetAppContext.Provider>
    )
}