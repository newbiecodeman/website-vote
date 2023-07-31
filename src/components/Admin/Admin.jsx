import React from 'react'
import Sidebar from './SideBar Section/Sidebar'
import Body from './Body Section/Body'
import "./Admin.css"

const Admin = () => {
  return (
    <div className="body" data-aos="fade-up" data-aos-duration="1000">
         <div className='container-admin'>
        <Sidebar />
        <Body />

    </div>
    </div>
 
  )
}

export default Admin