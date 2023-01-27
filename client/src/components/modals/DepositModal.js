import React, { useContext, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { BudgetAppContext } from '../../context/BudgetAppContext';
import {v4 as uuidv4} from 'uuid';
//
export default function DepositModal() {
  
  const {setRemainding, remainding, deposit, setDeposit, dispatch} = useContext(BudgetAppContext);

  const handleDeposit = (e) => {
    e.preventDefault()
    setRemainding(deposit + remainding)
    setDeposit(deposit)
    const expense = {
      id: uuidv4(),
      name: "DEPOSIT",
      cost: parseFloat(deposit),
      date: new Date().toLocaleString(),
      type: 'd'
    }
   
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    })

    setDeposit(" ");
    toast.success("Deposit Set!")
    document.getElementById("deposit-close").click();

  }
  
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

                <form id = "deposit-form" onSubmit = {handleDeposit}>
                  <div className = 'col-sm'>
                    <label htmlFor = 'name'>Deposit Amount</label>
                    <input required = 'required' type = 'number' className = 'form-control' id='deposit' value = {deposit} onChange = {e => {setDeposit(parseFloat(e.target.value))}}>
                    </input>
                  </div>
                </form>
          
            </div>
            <div class="modal-footer">
              <button id = "deposit-close" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary" form = "deposit-form">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
