import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './about.scss';

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="text">The about us page</div>
                <button><Link to="/">Return Home</Link></button>
            </div>
        );
    }
}

export default About;