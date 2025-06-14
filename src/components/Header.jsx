import React from 'react'
import '../styles/Header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">🚀 김태현 Portfolio</Link>
        </div>
        <nav className="header__nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            {/* <li><Link to="/contact">Contact</Link></li> */}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header