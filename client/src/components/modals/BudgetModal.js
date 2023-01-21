import React from 'react'
import EditBudget from '../EditBudget'

export default function BudgetModal(props) {

  
    
  return (
    <>
      <div>
        <a data-bs-toggle="modal" data-bs-target="#budget-modal" className = "modalTitle d-flex justify-content-center" href = "#" 
        >Set Budget</a>
      </div>

      <div class="modal fade" id="budget-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog text-dark">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Set Budget</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <EditBudget/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary" form = "budget-form">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
