import React, { useContext } from 'react'
import { BudgetAppContext } from '../../context/BudgetAppContext'
import AddExpenseForm from '../AddExpenseForm'

export default function BudgetModal(props) {
  const {modal} = useContext(BudgetAppContext)
  
  

 
  
  return (
    <>
     

      <div class="modal fade modal-lg" id="transaction-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog text-dark">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Expense</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        <div class="modal-body">
          <AddExpenseForm/>
        </div>
          <div class="modal-footer">
            <button id = "close-modal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button class="btn btn-primary" form = "expense-form" type = "submit"  >Save</button>
              </div>
          </div>
        </div>
      </div>
    </>
 
  )
}
