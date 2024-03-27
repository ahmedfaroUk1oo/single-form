import React, { useContext, useLayoutEffect, useState } from 'react'
import style from './SideBar.module.css'
import { NavLink } from 'react-router-dom'
import { data } from '../../Context/data'

export default function SideBar() {
  const [display,setDisplay] = useState(false)
 
const {protectPersonalInfo,ProtectSummarySec ,protectSelectPlan,protectAdds} = useContext(data)


  

  useLayoutEffect(() => {
    const handleDisplay = ()=>{
      if(window.innerWidth < 768){
        setDisplay(true)
       }else{
        setDisplay(false)
       }
    }
    window.addEventListener('resize', handleDisplay);
    handleDisplay();
    return () => window.removeEventListener('resize', handleDisplay);
  }, []);


function prevent (e , path , protect){ 
if(localStorage.getItem(`${path}`) || !protect){
  e.preventDefault();
}
  }

  function PreventAll(e) {
    if(!(localStorage.getItem("personalInfo") && localStorage.getItem("selectedCard") && localStorage.getItem("addOns"))){
      e.preventDefault();
    }
  }

  return (
    <div className={`nav ${style.sidebar} rounded-2  `}>
<div className={`nav-steps m-auto   ${style.responsive} `}>
  <div className={`step-1 my-5 d-flex `}>
    <NavLink to="/" className={`nav-link me-3 fs-4 border border-1 border-white p-1 text-white rounded-circle  ${style.navLink}`} onClick={(e)=> prevent(e , "personalInfo")}>1</NavLink>
      <div className={`text text-start flex-column ${display? 'd-none' :"d-flex"}`}>
      <p className='p-0 m-0 text-muted fs-5'>STEP 1</p>
      <h6 className=' text-white'>YOUR INFO</h6>
      </div>
  </div>
  
  <div className={`step-2 my-5 d-flex`}>
    <NavLink to="/select-plan" className={`nav-link me-3 fs-4 border border-1 border-white p-1 text-white rounded-circle  ${style.navLink}`} onClick={(e)=> prevent(e ,"selectedCard",protectPersonalInfo)} >2</NavLink>
    <div className={`text text-start flex-column ${display? 'd-none' :"d-flex"}`}>
      <p className='p-0 m-0 text-muted fs-5'>STEP 2</p>
      <h6 className=' text-white'>SELECT PLAN</h6>
      </div>
  </div>
  <div className={`step-3 my-5 d-flex `}>
    <NavLink to="/AddsOns" className={`nav-link me-3 fs-4 border border-1 border-white p-1 text-white rounded-circle  ${style.navLink}`} onClick={(e)=> prevent(e ,"addOns",protectSelectPlan)} >3</NavLink>
    <div className={`text text-start flex-column ${display? 'd-none' :"d-flex"}`}>
      <p className='p-0 m-0 text-muted fs-5'>STEP 3</p>
      <h6 className=' text-white'>ADD-ONS</h6>
      </div>
  </div>
  <div className={`step-4 my-5  d-flex `}>
    <NavLink to="/Summary" className={`nav-link me-3 fs-4 border border-1 border-white p-1 text-white rounded-circle  ${style.navLink}` } onClick={(e)=> PreventAll(e)} >4</NavLink>
    <div className={`text text-start flex-column ${display? 'd-none' :"d-flex"}`}>
      <p className='p-0 m-0 text-muted fs-5'>STEP 4</p>
      <h6 className=' text-white'>SUMMARY</h6>
      </div>
  </div>
</div>
</div>
  )
}
