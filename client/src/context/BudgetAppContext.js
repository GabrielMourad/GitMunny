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
        { name: 'Rent', cost: 1200.00, date: '02/01/2023, 09:00:00', type: 'p', id: 1, category: 'rent' },
        { name: 'Gas Station', cost: 45.23, date: '02/02/2023, 12:30:00', type: 'p', id: 2, category: 'gas' },
        { name: 'Grocery Store', cost: 56.98, date: '02/03/2023, 14:45:00', type: 'p', id: 3, category: 'grocery' },
        { name: 'Gas Bill', cost: 50.00, date: '02/04/2023, 11:00:00', type: 'p', id: 4, category: 'gas' },
        { name: 'DEPOSIT', cost: 200, date: '02/05/2023, 10:00:00', type: 'd', id: 5, category: 'misc' },
        { name: 'Grocery Store', cost: 72.51, date: '02/06/2023, 16:30:00', type: 'p', id: 6, category: 'grocery' },
        { name: 'Car Insurance', cost: 150, date: '02/07/2023, 13:00:00', type: 'p', id: 7, category: 'misc' },
        { name: 'DEPOSIT', cost: 100, date: '02/08/2023, 09:00:00', type: 'd', id: 8, category: 'misc' },
        { name: 'Gas Station', cost: 39.55, date: '02/09/2023, 11:45:00', type: 'p', id: 9, category: 'gas' },
        { name: 'Grocery Store', cost: 43.76, date: '02/10/2023, 15:15:00', type: 'p', id: 10, category: 'grocery' },
        { name: 'Rent', cost: 1200, date: '02/11/2023, 09:00:00', type: 'p', id: 11, category: 'rent' },
        { name: 'Gas Station', cost: 34.12, date: '02/12/2023, 10:30:00', type: 'p', id: 12, category: 'gas' },
        { name: 'Grocery Store', cost: 61.27, date: '02/13/2023, 12:15:00', type: 'p', id: 13, category: 'grocery' },
        { name: 'Gas Bill', cost: 50.00, date: '02/14/2023, 11:00:00', type: 'p', id: 14, category: 'gas' },
        { name: 'DEPOSIT', cost: 300, date: '02/15/2023, 10:00:00', type: 'd', id: 15, category: 'misc' },
    ],

    
    
    
    
}

initialState.totalExpenses = initialState.expenses
  .filter(expense => expense.type === "p")
  .reduce((acc, expense) => acc + expense.cost, 0);

  initialState.totalExpenses = Math.round(100*initialState.totalExpenses) /100

initialState.remainding = Math.round(100* (initialState.budget - initialState.totalExpenses))/100;



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