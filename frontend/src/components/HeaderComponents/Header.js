import React, {useState} from 'react'
import Head from './Head'
import { Link } from 'react-router-dom';
import "./header.css"
const Header = () => {
  const [click, SetClick] =useState(false)
  return(
    <div>
      <Head/>
      <header>
        <nav className='flexSB'>
          <ul className={click? "mobile-nav" : 'flexSB'} onClick={()=> SetClick(false)}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="assigments">Assigments</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>Get Status</div>
          </div>
          <button className='toggle' onClick={()=> SetClick(!click)}>{click ? <i className='fa fa-times'></i>: <i className='fa fa-times'></i>} </button>
        </nav>
      </header>
    </div>
  )
}

export default Header
