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

initialState.totalExpenses = initialState.expenses.reduce((acc, expense) => acc + expense.cost, 0);
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