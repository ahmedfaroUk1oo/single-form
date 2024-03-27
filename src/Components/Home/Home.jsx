import React from 'react'
import style from './Home.module.css'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'

export default function Home() {
  return (<>
  <section className={`${style.background}`}>
    <div className={`container  my-5 rounded-2   `}>
      <div className={`row text-center py-5 `}>
        <div className={`col-md-6  `}>
<SideBar />

        </div>
        <div className={`col-md-6 text-bg-light rounded-2  ${style.shadow}`}>
          <div className="info px-5 py-5 text-start">
          <Outlet />
          </div>
        </div>
      </div>

    </div>
  </section>
  
  </>
  )
}
