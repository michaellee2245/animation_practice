import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="text">The Home Page</div>
                <Link to={'/about'}><button>Learn more</button></Link>
            </div>
        );
    }
}

export default Home;