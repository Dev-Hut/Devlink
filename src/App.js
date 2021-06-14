import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import gsap from 'gsap';
import './styles/App.scss';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import Profile from './pages/Profile';

//routes
const routes = [
    {
        path: '/',
        name: 'Home',
        Component: Home,
    },
    {
        path: '/about',
        name: 'About',
        Component: About,
    },
    {
        path: '/help',
        name: 'Help',
        Component: Help,
    },
    {
        path: '/profile',
        name: 'Profile',
        Component: Profile,
    },
];
function App() {
    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        gsap.to('body', {
            duration: 0,
            visibility: 'visible',
        });
    }, []);
    return (
        <>
            <Header />
            <div className='App'>
                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                        <Component />
                    </Route>
                ))}
            </div>
        </>
    );
}

export default App;
