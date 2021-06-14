import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Case from '../components/Cases';
import IntroOverlay from '../components/IntroOverlay';
import landing from '../animation/landing';
const Home = () => {
    const [animationComplete, setAnimationComplete] = useState(false);
    const completeAnimation = () => {
        setAnimationComplete(true);
    };
    useEffect(() => {
        landing(completeAnimation);
    }, []);
    return (
        <>
            {animationComplete === false && <IntroOverlay />}
            <Banner />
            <Case />
        </>
    );
};

export default Home;
