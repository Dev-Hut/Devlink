import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <nav>
            <div className='container'>
                <div className='nav-columns'>
                    <div className='nav-column'>
                        <div className='nav-label'>Menu</div>
                        <ul className='nav-links'>
                            <li>
                                <NavLink to='/about' exact>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/help' exact>
                                    Help
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/profile' exact>
                                    Profile
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-column'>
                        <div className='nav-label'>Contact</div>
                        <div className='nav-infos'>
                            <ul className='nav-info'>
                                <li className='nav-info-label'>Email</li>
                                <li>
                                    <NavLink to='/contact' exact>
                                        Get in touch with us
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className='nav-info'>
                                <li className='nav-info-label'>Social</li>
                                <li>Links</li>
                            </ul>
                            <ul className='nav-info'>
                                <li className='nav-info-label'>Phone</li>
                                <li>+91 790 580 9434</li>
                            </ul>
                            <ul className='nav-info'>
                                <li className='nav-info-label'>Legal</li>
                                <li>Privacy & Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
