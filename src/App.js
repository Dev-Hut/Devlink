import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import gsap from 'gsap';
import './styles/App.scss';

//exports
import debounce from './exports/debounce';
import routes from './exports/routes';
//components
import Header from './components/Header';
import Navigation from './components/Navigation';

const App = () => {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    useEffect(() => {
        //preventing flash
        gsap.to('body', {
            duration: 0,
            visibility: 'visible',
        });
        let vh = dimensions.height * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        const debounceHandleResize = debounce(() => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        }, 1000);
        window.addEventListener('resize', debounceHandleResize);

        return () => {
            window.removeEventListener('resize', debounceHandleResize);
        };
    });
    return (
        <>
            <Header dimensions={dimensions} />
            <div className='App'>
                {routes.map(({ path, Component, name }) => (
                    <Route key={name} exact path={path}>
                        <Component />
                    </Route>
                ))}
            </div>
            <Navigation />
        </>
    );
};

export default App;
