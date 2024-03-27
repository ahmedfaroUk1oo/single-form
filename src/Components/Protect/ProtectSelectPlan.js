import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectSelectPlan(props) {

if (localStorage.getItem("personalInfo")) {
   return props.children
     }else {
      return  <Navigate to={'/personalInfo'} />
     }
}
