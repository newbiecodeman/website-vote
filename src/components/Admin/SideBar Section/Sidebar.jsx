import React from 'react'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom'

import sagara from '../../../assets/sagara.png'

import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExplore} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

const Sidebar = () => {

  let Navigate =useNavigate();

  return (
    <div className='sidebar grid-admin'>
      
      <div className="logodiv flex-admin">
        <img src={sagara} alt="Image Name"/>
        <h2>SAGARA</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuList grid-admin">
          
          <li className="listItem">
            <a href="#" className='menuLink flex-admin text-decoration-none'>
                <IoMdSpeedometer className="icon mx-1"/>
                <span className="smallText">
                  Dashboard
                </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex-admin text-decoration-none'>
                <MdDeliveryDining className="icon mx-1"/>
                <span className="smallText">
                  my orders
                </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex-admin text-decoration-none'>
                <MdOutlineExplore className="icon mx-1"/>
                <span className="smallText">
                  Explore
                </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex-admin text-decoration-none'>
                <BsTrophy className="icon mx-1"/>
                <span className="smallText">
                  Product
                </span>
            </a>
          </li>
        </ul>
      </div>


      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuList grid-admin">
          
          <li className="listItem">
            <a href="#" className='menuLink flex-admin text-decoration-none'>
                <AiOutlinePieChart className="icon mx-1"/>
                <span className="smallText">
                  Charts
                </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex-admin text-decoration-none'>
                <BiTrendingUp className="icon mx-1"/>
                <span className="smallText">
                  Trends
                </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex-admin text-decoration-none'>
                <MdOutlinePermContactCalendar className="icon mx-1"/>
                <span className="smallText">
                  Contact Us
                </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex-admin text-decoration-none'>
                <BsCreditCard2Front className="icon mx-1"/>
                <span className="smallText">
                  Billing
                </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className='menuLink flex-admin text-decoration-none' onClick={() => Navigate("/")}>
                <FiLogOut className="icon mx-1"/>
                <span className="smallText">
                  Logout
                </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sidebarcard">
        <BsQuestionCircle className="icon"/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>Having Trouble in Sagara, Please Contact Us From For More Question</p>
          <button className='btn btn-danger'>Go to Help Center</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar