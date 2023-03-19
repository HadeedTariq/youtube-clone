import React from 'react'
import { SearchBar } from './index'
import { BsYoutube } from 'react-icons/bs'
import '../Css/Navbar.css'
function Navbar() {
  return (
    <>
      <div id="nav">
        <nav className='nav-bar'>
          <div className="logo">
            <BsYoutube className='youtube-logo' />
            <h4>Youtube</h4>
          </div>
          <div className="search-bar">
            <SearchBar />
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar