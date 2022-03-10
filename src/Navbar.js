import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav1'>
            <div id='vertical'>The</div>
            <span id='siren'>Siren</span>
        </div>
     <div>

      <nav className="stroke">
      <ul>
      <li><Link to="/Home">Home</Link></li>
      <li><Link to='/Category/Tourism'>Tourism</Link></li>
      <li><Link to="/Category/Fitness">Fitness</Link></li>
      <li><Link to="/Category/Technology">Technology</Link></li>
      <li><Link to="/Category/Bollywood">Bollywood</Link></li>
      <li><Link to="/Category/Global">Global</Link></li>
      </ul>
     </nav>
     </div>  
    </div>
  )
}

export default Navbar