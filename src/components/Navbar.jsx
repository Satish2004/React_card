import React from 'react'

const Navbar = () => {
  return (
    <div className="Nav-section-container">
    <div className="nav-section-main">
    <nav className="navbar ">
    <div className="container-fluid">
      <a className="navbar-brand"><img src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-512.png" alt="" /></a>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
    </div>
  </div>
  )
}

export default Navbar;