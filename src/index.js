import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

import './routes';
import './mainStyles/standard-styles.scss';


// import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import About from './views/About/About';



function Routes() {
    return (
        <Router>
           
        </Router>
    )
}





const rootElement = document.getElementById('root')
ReactDOM.render(<Routes />, rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();