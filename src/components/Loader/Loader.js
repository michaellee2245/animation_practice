import React, { Component } from 'react';
import './loader.scss';

class Loader extends Component {
    render() {
        return (
            <div className="loading-container">
                <div className="loader">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                </div>
                <div className="quip">You'll arrive at your destination shortly.</div>
            </div>
        );
    }
}

export default Loader;