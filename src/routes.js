import Home from './views/Home/Home';
import About from './views/About/About';
import Loader from './components/Loader/Loader';

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
    },
    {
        path: '/loader',
        name: 'Loader',
        Component: Loader
    },
]

export default routes



