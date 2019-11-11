import Home from './views/Home/Home';
import About from './views/About/About';

const routes = [
    {
        path: '/',
        name: 'Home',
        Component: Home
    },
    {
        path: '/about',
        name: 'About',
        Component: About
    }
]

export default routes



