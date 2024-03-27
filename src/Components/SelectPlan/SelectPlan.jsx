import React, { useContext, useEffect, useState } from 'react'
import style from './SelectPlan.module.css'
import { data } from '../../Context/data';
import img1 from '../../Assets/images/icon-arcade.svg'
import img2 from '../../Assets/images/icon-advanced.svg'
import img3 from '../../Assets/images/icon-pro.svg'
import ReactSwitch from 'react-switch';
import { useNavigate } from 'react-router-dom';


export default function SelectPlan() {
const {personalInfo,setPersonalInfo,checked ,setChecked ,cards ,setSelectedCard,selectedCard} = useContext(data);


const navigate = useNavigate()
const setData  = () => {
  if(localStorage.getItem("personalInfo")){
    setPersonalInfo(JSON.parse(localStorage.getItem("personalInfo")))
  }else {
    setPersonalInfo(null)
  }
}
useEffect(()=>{
setData();
},[])




  const handleChange = val => {
    setChecked(val)
   
  }



  const DeleteLocal = () => {
    localStorage.removeItem("personalInfo");
    localStorage.removeItem("selectedCard");
    navigate("/personalInfo");

  }




  return (<>
  <h1 className='text-color fw-bold'>Select your plan</h1>
    <p className='text-muted'>You have the option of monthly or yearly billing</p>
    <form onSubmit={e => e.preventDefault()}>
    <div className="row">
      {cards.map((card)=>    <div key={card.id} className="col-md-4" onClick={() => {setSelectedCard(checked? {id: card.id , price:card.price , time : card.time , name: card.name} : {id: card.id , price:card.price2 , time: card.time2, name: card.name}) ; localStorage.setItem("selectedCard",JSON.stringify(checked? {id: card.id , price:card.price , time : card.time, name: card.name} : {id: card.id , price:card.price2, time: card.time2, name: card.name}))}}>
        <div className={`card mb-4 rounded-3 shadow-sm text-center ${style.card} ${selectedCard?.id === card.id ? style.selected : ""} `}>
         <div className="img px-3 pb-3 pt-1">
         <img src={card.img} className={`${style.image}`} alt="" />
         </div>
         <p className='text-color fw-bold  px-3 m-0'>{card.name}</p>
         {checked ? <span className='text-muted px-3 py-2'>${card.price}/mo</span> :<> <span className='text-muted px-3 py-2'>${card.price2}/yr</span><p className='text-color px-3'>2 months free</p></>}
        </div>

      </div>
      )}
     
      
    </div>
    <div className="daily d-flex justify-content-center w-100 bg-white p-3 rounded-3 text-center">
      <p className={` me-2 ${checked ? 'text-muted' : "text-color"}`}>Yearly</p>  
    <ReactSwitch
        checked={checked}
        onChange={handleChange}
        offColor='#17135d'
        onColor='#17135d'
        uncheckedIcon = {checked}
        checkedIcon = {checked}
        
      />
      <p className={` ms-2 ${checked ? 'text-color' :'text-muted' }`}>Monthly</p>
    </div>
    <div className="btns py-5 d-flex justify-content-between">
      <button className='btn text-muted' onClick={() =>DeleteLocal()} >Go Back</button>
    <button className='btn bg-color text-white' disabled={localStorage.getItem("selectedCard") ? false : true} onClick={() => navigate("/AddsOns")}>Next Step</button>
    </div>
    </form>

  </>
  )
}
