import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(pro) {
  return (
    <>
<nav className={`navbar navbar-expand-lg navbar-${pro.mode}`} style={{backgroundColor:pro.mode ==='light' ? 'white' : 'black'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{pro.name}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">{pro.li1}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{pro.li2}</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/" tabIndex={-1} aria-disabled="true">{pro.li3}</Link>
        </li>
      </ul>
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={pro.toggleMode}/>
      <label className={`form-check-label text-${pro.mode ==='light' ? 'dark' : 'light'} `} htmlFor="flexSwitchCheckDefault">{pro.mode ==='light' ? 'Dark' : 'Light'} Mode</label>
    </div>

    </div>
  </div>
</nav>
<hr/>
</>
  )
}

Navbar.prototype={name: PropTypes.string.isRequired,
li1: PropTypes.string.isRequired,
li2: PropTypes.string.isRequired,
li3: PropTypes.string.isRequired
}
// Setting Deafult props
Navbar.defaultProps ={
    name : 'Set tittle here',
    li1 : 'Set item 1 here',
    li2 : 'Set item 2 here',
    li3 : 'Set item 3 here',
}