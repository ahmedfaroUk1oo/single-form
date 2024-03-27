import React, { useContext, useEffect, useState } from 'react'
import style from './Summary.module.css'
import { data } from '../../Context/data';
import { NavLink, useNavigate } from 'react-router-dom';


export default function Summary() {
  const {personalInfo,selectedCard,addOns,StorePersonalInfo,StoreSelectedCard,StoreAddOns} = useContext(data);

  const navigate =useNavigate()

  function Store () {
    StorePersonalInfo();
    StoreSelectedCard();
    StoreAddOns();

  }
  useEffect(()=>{
    Store();
  },[])


  function Remove () {
    localStorage.removeItem("selectedCard");
    localStorage.removeItem("addOns");
  }

  function DeleteLocal() {
    localStorage.removeItem("addOns");
    navigate('/AddsOns');
  }

  return (
   <>
     <h1 className='text-color fw-bold'>Finishing up</h1>
    <p className='text-muted'>Double-check everything looks OK before confirming.</p>

    <div className="check bg-card shadow rounded-2">
     <div className="row p-3">
      <div className="col-md-12 px-3 d-flex justify-content-between align-items-center pb-4 border-bottom border-bottom-1 border-secondary-subtle ">
        <div className="type">
          <h4 className='p-0 m-0 text-color'>{selectedCard?.name} ({selectedCard?.time})</h4>
          <NavLink to='/select-plan' className=' text-muted' onClick={() => Remove()}>Change</NavLink>
        </div>
        <div className="price text-color fw-bold">${selectedCard?.price}/{selectedCard?.time === "Monthly" ? "mo" : "yr"}</div>
      </div>
      {addOns?.map((add)=> <div key={add.id} className="col-md-12 px-3 d-flex justify-content-between align-items-center py-3  ">
          <p className='p-0 m-0 text-muted'>{add.name}</p>
        <p className="price text-color">${selectedCard?.time ==="Monthly" ? add.price : add.price2 }/{selectedCard?.time === "Monthly" ? "mo" : "yr"}</p></div>)}
     </div>
    </div>
   <div className="total d-flex justify-content-between align-items-center">
   <p className='mt-4 p-3 text-muted'>Total (per {selectedCard?.time === "Monthly" ? "month" : "year"})</p>
   <p className='mt-4 p-3 text-total fs-4 fw-bold'>${selectedCard?.price +Number( selectedCard?.time ==="Monthly" ? addOns.reduce((total, item) => total + item.price, 0) : addOns.reduce((total, item) => total + item.price2, 0))}/{selectedCard?.time === "Monthly" ? "mo" : "yr"}</p>
   </div>
   <div className="btns pt-5 d-flex  px-3 justify-content-between">
      <button className='btn text-muted' onClick={() =>DeleteLocal()} >Go Back</button>
    <button className='btn bg-color text-white'  onClick={() => navigate("/End")}>Confirm</button>
    </div>
   </>
  )
}
