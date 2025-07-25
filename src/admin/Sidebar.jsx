import React from 'react';
import './css/sidebar.css';
import Logo from '../assets/admin/logo.webp';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 p-0 m-0'>
                    <div className='sidebar'>
                        <div className='sidebar-top'>
                            <img src={Logo} alt={Logo} height={'120px'} width={'120px'}></img>
                            <p className='text-center text-white pt-2'><b>Welcome, Admin</b></p>
                        </div>
                        <div id='sidebar-bottom'>
                            <nav>
                              <NavLink to={''} className={'nav'} id='active'><i className='fas fa-tachometer-alt'></i> Dashboard</NavLink>
                              <NavLink to={''} className={'nav'}><i className='fas fa-th-large'></i> Category <i id='drop' className='fas fa-angle-right'></i></NavLink>
                              <NavLink to={''} className={'nav'}><i className='fas fa-hamburger'></i> Food <i id='drop1' className='fas fa-angle-right'></i></NavLink>
                              <NavLink to={''} className={'nav'}><i className='fas fa-shopping-bag'></i> Order <i id='drop2' className='fas fa-angle-right'></i></NavLink>
                              <NavLink to={''} className={'nav'}><i className='fas fa-info-circle'></i> Status <i id='drop3' className='fas fa-angle-right'></i></NavLink>
                              <NavLink to={''} className={'nav'}><i className='fas fa-rupee-sign'></i> Transaction <i id='drop4' className='fas fa-angle-right'></i></NavLink>
                              <NavLink to={''} className={'nav'}><i className='fas fa-comment'></i> Feedback <i id='drop5' className='fas fa-angle-right'></i></NavLink>
                              <NavLink to={''} className={'nav'}><i className='fas fa-question-circle'></i> Help</NavLink>
                              <NavLink to={''} className={'nav'}><i className='fas fa-cog'></i> Setting</NavLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar