import React from 'react'

//
export default function DepositModal() {
  return (
    <>
      <div>
        <a data-bs-toggle="modal" data-bs-target="#deposit-modal" className = "modalTitle d-flex justify-content-center" href = "#" 
        >Deposit Money</a>
      </div>
      <div class="modal fade" id="deposit-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog text-dark">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Deposit Money</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
