import React from 'react';
import './App.css';
import Image from "./airbnblogo.png"

export default function Menu() {
    return(
       <nav className= "nav-box">
          <img src={Image} alt="logo"className="nav-logo" />
       </nav>

  )
}
