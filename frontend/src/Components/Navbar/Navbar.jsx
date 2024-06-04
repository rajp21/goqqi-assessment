import React from 'react'; 
import {Link} from 'react-router-dom'; 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg main-navbar sticky">
            <div className="form-inline mr-auto">
                <ul className="navbar-nav mr-3">
                    <li><Link  data-toggle="sidebar" className="nav-link nav-link-lg
                                collapse-btn"> <i className='fas fa-bars' style={{color: 'black'}}></i></Link></li>
                    <li><Link  className="nav-link nav-link-lg fullscreen-btn">
                        <i data-feather="maximize"></i>
                    </Link></li>
                    <li>
                        <form className="form-inline mr-auto">
                            <div className="search-element">
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="200" />
                                <button className="btn" type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
