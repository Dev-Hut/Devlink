//pages
import Home from '../pages/Home';
import About from '../pages/About';
import Help from '../pages/Help';
import Profile from '../pages/Profile';

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
export default routes;
