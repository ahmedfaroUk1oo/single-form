import React from 'react'
import style from './End.module.css'
import img from '../../Assets/images/icon-thank-you.svg'

export default function End() {
  return (
    <>
     <div className="row text-center pt-5">
      <div className="col-md-12">
        <img src={img} alt="Thank you"  className=' img-fluid mb-4'/>
        <h4 className='fw-bold text-color fs-2 mb-4'>Thank you!</h4>
        <p className='px-3 text-muted'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at 0EJpL@example.com </p>
      </div>
     </div>
    </>
  )
}
