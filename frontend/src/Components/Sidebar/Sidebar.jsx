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
          <Link href="index.html" className="nav-link"><i data-feather="monitor"></i><span>Dashboard</span></Link>
        </li>
        <li className="dropdown">
          <Link  className="menu-toggle nav-link has-dropdown"><i
              data-feather="briefcase"></i><span>Widgets</span></Link>
          <ul className="dropdown-menu">
            <li><Link className="nav-link" href="widget-chart.html">Chart Widgets</Link></li>
            <li><Link className="nav-link" href="widget-data.html">Data Widgets</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link  className="menu-toggle nav-link has-dropdown"><i data-feather="command"></i><span>Apps</span></Link>
          <ul className="dropdown-menu">
            <li><Link className="nav-link" href="chat.html">Chat</Link></li>
            <li><Link className="nav-link" href="portfolio.html">Portfolio</Link></li>
            <li><Link className="nav-link" href="blog.html">Blog</Link></li>
            <li><Link className="nav-link" href="calendar.html">Calendar</Link></li>
          </ul>
        </li>
        <li className="dropdown">
          <Link  className="menu-toggle nav-link has-dropdown"><i data-feather="mail"></i><span>Email</span></Link>
          <ul className="dropdown-menu">
            <li><Link className="nav-link" href="email-inbox.html">Inbox</Link></li>
            <li><Link className="nav-link" href="email-compose.html">Compose</Link></li>
            <li><Link className="nav-link" href="email-read.html">read</Link></li>
          </ul>
        </li>    
      </ul>
    </aside>
  </div>
  )
}

export default Sidebar; 