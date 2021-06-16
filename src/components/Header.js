import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as UpArrow } from '../assets/up-arrow.svg';
import { openMenu, closeMenu } from '../animation/menuAnimation';

const Header = ({ history, dimensions }) => {
    const [menuState, setMenuState] = useState({ menuOpened: false });
    useEffect(() => {
        history.listen(() => {
            setMenuState({ menuOpened: false });
        });

        if (menuState.menuOpened === true) {
            openMenu(dimensions.width);
        } else if (menuState.menuOpened === false) {
            closeMenu();
        }
    }, [menuState.menuOpened, dimensions.width]);
    return (
        <div className='header'>
            <div className='container'>
                <div className='row v-center space-between'>
                    <div className='logo '>
                        <NavLink className='color-change' to='/' exact>
                            DEVLINK.
                        </NavLink>
                    </div>
                    <div className='nav-toggle'>
                        <div
                            onClick={() => {
                                setMenuState({ menuOpened: true });
                                console.log('clicked');
                            }}
                            className='hamburger-menu'
                        >
                            <span className='color-change'></span>
                            <span className='color-change'></span>
                        </div>
                        <div
                            onClick={() => setMenuState({ menuOpened: false })}
                            className='hamburger-menu-close'
                        >
                            <UpArrow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Header);
