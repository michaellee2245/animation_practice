import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './about.scss';

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="text">The about us page</div>
                <Link to="/"><button>Return Home</button></Link>
                <Link to="/loader"><button>The Loader</button></Link>
            </div>
        );
    }
}

export default About;