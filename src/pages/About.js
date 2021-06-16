import React from 'react';
import { ReactComponent as DownArrow } from '../assets/down-arrow.svg';
import Developer from '../components/Developer';
const About = () => {
    return (
        <div className='page'>
            <div className='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='about-content'>
                            <h3>About us</h3>
                            <div className='sm-line'></div>
                            <p>
                                We are a squad of crazy folks whose goal is to
                                make a devlink that can{' '}
                                <span className='gradient-1'>connect</span> all
                                the developers around the globe under{' '}
                                <span className='gradient-2'>devHUT.</span>
                            </p>
                            <div className='btn-row'>
                                <a href='/'>Scroll Down</a>
                                <DownArrow />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Developer /> */}
        </div>
    );
};

export default About;
// While searching for good peoples who can contribute to my ideas, I realized the first think is needed are people itself. To make your idea a reality you need a codemate not a soul mate.
