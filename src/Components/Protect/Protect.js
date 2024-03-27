import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Protect(props) {

  if (localStorage.getItem("personalInfo") && localStorage.getItem("selectedCard") && localStorage.getItem("addOns")) {
return props.children
  }else if (localStorage.getItem("personalInfo") && localStorage.getItem("selectedCard")) {
    return <Navigate to={'/AddsOns'} />
  }else if(localStorage.getItem("personalInfo")){
    return <Navigate to={'/select-plan'} />
}else {
    return <Navigate to={'/personalInfo'} />
}

} 
