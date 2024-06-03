import React from 'react'; 
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="main-sidebar sidebar-style-2">
    <aside id="sidebar-wrapper">
      <div className="sidebar-brand">
        <Link href="index.html"> <img alt="logo" src="assets/img/logo.png" className="header-logo" /> <span
            className="logo-name">Otika</span>
        </Link>
      </div>
      <ul className="sidebar-menu">
        <li className="menu-header">Main</li>
        <li className="dropdown active">
          <Link to="/" className="nav-link"><i className='fas fa-fire'></i><span>Dashboard</span></Link>
        </li>

        <li className="dropdown">
          <Link to="/add-user" className="nav-link"><i className='fas fa-user-plus'></i><span>Add User</span></Link>
        </li>
        
         
      </ul>
    </aside>
  </div>
  )
}

export default Sidebar; 