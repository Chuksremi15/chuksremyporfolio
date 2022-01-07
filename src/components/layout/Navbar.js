import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';

const Navbar = () => {
  const [navData, setNavData] = useState({
    active: false,
  });

  const {active} = navData;

  const handleToggle = () => {
    setNavData({...navData, active: !active});
  };

  return (
    <div>
      <section className='navbar-section'>
        <div className='nav-container'>
          <nav className='navbar'>
            <Link to='/'>
              {' '}
              <div className={active ? 'actived navbar-logo' : 'navbar-logo'}>
                CHUKS REMY
              </div>
            </Link>
            <div
              onClick={handleToggle}
              className={active ? 'is-active menu-toggle' : 'menu-toggle'}
              id='mobile-menu'
            >
              <span className='bar'></span>
              <span className='bar'></span>
              <span className='bar'></span>
            </div>
            <ul className={active ? 'active nav-menu' : 'nav-menu'}>
              <li>
                <NavLink
                  to='/projects'
                  className='nav-links'
                  activeClassName='active'
                >
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/services'
                  className='nav-links'
                  activeClassName='active'
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/process'
                  className='nav-links'
                  activeClassName='active'
                >
                  Process
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/about'
                  className='nav-links'
                  activeClassName='active'
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/contact'
                  className='nav-links'
                  activeClassName='active'
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to='/resume' className='nav-links'>
                  Résumé
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
