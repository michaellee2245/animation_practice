import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { TimelineLite, Power2 } from 'gsap';

import coolPhoto from '../../images/alex-talmon-UFskvng2OMU-unsplash.jpg'

const Home = () => {
    let imgSection = useRef(null);
    let image = useRef(null);
    let imageReveal = CSSRulePlugin.getRule(".img-container:after")

    const tl = new TimelineLite()

    useEffect(() => {
        tl.to(imgSection, 0, { css: { visibility: "visible" },})
        .to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut, delay: 2 })
        .from(image, 1.4, {scale: 1.6, ease: Power2.easeInOut, delay: -1.0});
    });

    return (
        <div className="home-container">
            <div className="text">The Home Page</div>
            <Link to='/about'><button>Learn more</button></Link>

            <div className="img-section" ref={el => (imgSection = el)}>
                <>
                    <div className="img-container">
                        <img src={coolPhoto}
                            ref={el => (image = el)}
                        />
                    </div>
                </>
            </div>
        </div>
    );

}

export default Home;