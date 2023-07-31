import React from 'react'
import './Top.css'

import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {IoMdNotificationsOutline} from 'react-icons/io'

import img from '../../../../assets/kaesang.jpg'
import subscribe from '../../../../assets/subscribe.jpg'

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex-admin">
        <div className="title">
          <h1>Welcome to Sagara Vote</h1>
          <p>Hellow Admin, Welcome Back!</p>
        </div>

        <div className="searchBar flex-admin">
          <input type="text" placeholder='Search Dashboard' />
          <BiSearchAlt className="icon"/>
        </div>

        <div className="adminDiv flex-admin">
          <TbMessageCircle className="icon" />
          <IoMdNotificationsOutline className="icon"/>
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex-admin">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>The world's fast growing industry today are natural made products!</p>

          <div className="button flex-admin">
              <button className='btn btn-danger'>Explore More</button>
              <button className='btn btn-transparent'>Top sellers</button>
          </div>

          <div className="bodyImage">
            <img src={subscribe} alt="Admin Image" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Top