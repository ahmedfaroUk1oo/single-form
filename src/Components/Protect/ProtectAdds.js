import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectAdds(props) {

    if (localStorage.getItem("personalInfo") && localStorage.getItem("selectedCard")) {
        return props.children }
        else if(localStorage.getItem("personalInfo")) {
        return <Navigate to={'/select-plan'} />}else {
            return <Navigate to={'/personalInfo'} />
        }
         
}
