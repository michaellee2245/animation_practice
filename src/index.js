import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import './App.css';
import Loader from './components/Loader/Loader';
import About from './views/About/About';
import Home from './views/Home/Home';

import routyRoutes from './routes.js';

function Example() {
  return (
    <Router>
        <div className="navi">
            {routyRoutes.map(route => (
                <NavLink key={route.path} to={route.path} activeClassName="active" exact>{route.name}</NavLink>
            ))}
        </div>
      <div className="App">
        {routyRoutes.map( ({path, Component}) => (
            <Route key={path} exact path={path}>
                {({ match }) => (
                <CSSTransition
                    in={match != null}
                    timeout={300}
                    unmountOnExit
                >
                    <div className="page">
                        <Component />
                    </div>
                </CSSTransition>
                )}
            </Route>
        ))}
      </div>
    </Router>
  );
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Example />, rootElement)
