import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './about.scss';
import { TweenMax, Power3 } from 'gsap';

function About() {
    let circleContainer = useRef(null)
    let homeBtn = useRef(null);
    let loaderBtn = useRef(null)
    let circle = useRef(null)
    let circleRed = useRef(null)
    let circleBlue = useRef(null)

    const [state, setState] = useState(false)

    const handleExpand = () => {
        TweenMax.to(circleRed, 1.5, {width: 200, height: 200, ease:Power3.easeOut})
        setState(true)
    }
    const handleShrink = () => {
        TweenMax.to(circleRed, 1.5, {width: 75, height: 75, ease:Power3.easeOut})
        setState(false)
    }

    useEffect(() => {
        TweenMax.to(
            homeBtn,
            1.5,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut
            }
        )
        TweenMax.to(
            loaderBtn,
            1.5,
            {
                opacity: 1,
                y: -20,
                ease: Power3.easeOut,
                delay: .5,
            }
        )
      
        TweenMax.to(
            circleContainer,
            0,
            {
                css: {visibility: 'visible'}
            }
        )

        TweenMax.from(
            circle,
            1.5,
            {
                opacity:0,
                x:40,
                ease:Power3.easeOut
            }
        )    
        TweenMax.from(
            circleRed,
            1.5,
            {
                opacity:0,
                x:40,
                ease:Power3.easeOut,
                delay:.2
            }
        )    
        TweenMax.from(
            circleBlue,
            1.5,
            {
                opacity:0,
                x:40,
                ease:Power3.easeOut,
                delay:.4
            }
        )    

    }, [])

    return (
        <div className="about-container" >
            <div className="text">The about us page</div>
            <Link to="/"><button ref={el => { homeBtn = el }}>Return Home</button></Link>
            <Link to="/loader"><button ref={el => loaderBtn = el}>The Loader</button></Link>

            <div className="circle-container" ref={el => circleContainer = el}>
                <div className="circle"
                    ref={el => circle = el}></div>

                <div className="circle red"
                    ref={el => circleRed = el}
                    onClick={state !== true ? handleExpand : handleShrink}></div>

                <div className="circle blue"
                    ref={el => circleBlue = el}></div>
            </div>
        </div>
    );

}

export default About;