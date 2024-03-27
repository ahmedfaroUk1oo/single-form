import React, { useContext, useEffect, useState } from 'react'
import style from './AddsOns.module.css'
import { data } from '../../Context/data'
import { useNavigate } from 'react-router-dom';

export default function AddsOns() {
  const {adds,selectedCard,addOns ,setAddOns,StorePersonalInfo,StoreSelectedCard} = useContext(data);
  const [checked,setChecked] = useState(false);
const navigate =useNavigate();

function DeleteLocal () {
  localStorage.removeItem("selectedCard");
  navigate("/select-plan");
}


 function store () {
  StorePersonalInfo();
  StoreSelectedCard();
 }


useEffect(()=>{
store();
},[])



function Moving() {
  localStorage.setItem("addOns",JSON.stringify(addOns));
  navigate("/summary");
}


  return (
  <>
  <h1 className='text-color fw-bold'>Pick add-ons</h1>
    <p className='text-muted'>Add-ons help enhance your gaming experience</p>
    <form onSubmit={e => e.preventDefault()}>
    {adds.map((add)=>    <div key={add.id}  className={`row mb-5 p-2 bg-white rounded-2 align-items-center ${addOns.length && addOns.find(item => item?.id === add.id) ? style.selected : ""} ${style.cursor}`}
     onClick={()=>
      {addOns.length ? addOns.find(item => item?.id === add.id) ? setAddOns(addOns.filter(item => item.id !== add.id)) : setAddOns([...addOns , {id:add.id,price: add.price,price2: add.price2 ,name: add.name}])  : setAddOns([...addOns , {id:add.id,price: add.price,price2: add.price2,name: add.name}]); setChecked(!checked)}}   >
      <div className="col-md-2">
        <div className="form-check">
          <input className="form-check-input p-2" type="checkbox" name ="adds" value="1" id={add.id} checked={addOns.length ? addOns.find(item => item?.id === add.id) ? true : false : false} onChange={e => setChecked(!checked)}  />
          <label className="form-check-label" htmlFor={add.id} >
         
          </label>
    </div>
      </div>
      <div className="col-md-6"> 
        <p className='m-0 p-0 '>{add.name}</p>
            <span className=' text-muted'>{add.content}</span></div>
      <div className="col-md-4 text-end">
        {selectedCard?.time === "Monthly" ? <span className='text-color'>+${add.price}/mo</span> : <span className='text-color'>+${add.price2}/yr</span>}
      </div>
    </div>)}
    <div className="btns py-5 d-flex justify-content-between">
      <button className='btn text-muted' onClick={() =>DeleteLocal()} >Go Back</button>
    <button className='btn bg-color text-white' onClick={()=> Moving()}>Next Step</button>
    </div>
         </form>
  </>
  )
}
