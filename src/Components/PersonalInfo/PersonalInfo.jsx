import React, { useContext, useState } from 'react'
import style from './PersonalInfo.module.css'
import { Formik, useFormik } from 'formik'
import * as  Yup  from 'yup'
import { data } from './../../Context/data';
import { useNavigate } from 'react-router-dom';

export default function PersonalInfo() {

const navigate = useNavigate()

const validatationSchema = Yup.object({
  name : Yup.string().required("name is requierd"),
  email : Yup.string().email("email not valid please write a correct email").required("email is requierd"),
  phone : Yup.string().matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,"phone number not valid").required('phone number is required') ,
})


  const forms =  useFormik(
    {
      initialValues : {
        name : '',
        email : '',
        phone : ''
      },
      validationSchema : validatationSchema,
      onSubmit : (values) => {
  
localStorage.setItem("personalInfo",JSON.stringify(values));
        
        navigate("/select-plan");


      }
    }
  )
  return ( <>    <h1 className='text-color fw-bold'>Personal Info</h1>
    <p className='text-muted'>Please provide your name, email address, and phone number.</p>

    <form onSubmit={forms.handleSubmit}>
      <div className="name mb-3">
        <label htmlFor="name" className=' px-2 mb-3 text-color fw-bold'>Name</label>
        <input type="text" name="name" id="name" placeholder='e.g. Stephen King' value={forms.values.name}  className='form-control' onChange={forms.handleChange} onBlur={forms.handleBlur}/>
        {forms.errors.name && forms.touched.name ? <div className='alert alert-danger'>{forms.errors.name}</div> : null}
      </div>
      <div className="email mb-3">
        <label htmlFor="email" className=' px-2 mb-3 text-color fw-bold'>Email Address</label>
        <input type="text" name="email" id="email" placeholder='=e.g. 0Ht5h@example.com' value={forms.values.email}  className='form-control' onChange={forms.handleChange} onBlur={forms.handleBlur}/>
        {forms.errors.email && forms.touched.email ? <div className='alert alert-danger'>{forms.errors.email}</div> : null}
      </div>
      <div className="phone">
        <label htmlFor="phone" className=' px-2 mb-3 text-color fw-bold'>Phone Number</label>
        <input type="text" name="phone" id="phone" placeholder='e.g. +1 234 567 890' value={forms.values.phone}  className='form-control' onChange={forms.handleChange} onBlur={forms.handleBlur}/>
        {forms.errors.phone && forms.touched.phone ? <div className='alert alert-danger'>{forms.errors.phone}</div> : null}
      </div>
      <div className="button mt-5 text-end ">
        <button className='btn bg-color text-white' disabled={!(forms.isValid && forms.dirty)}>Next Step</button>
      </div>
    </form>
    </>
)
}
