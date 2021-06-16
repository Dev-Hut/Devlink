import gsap from 'gsap';
const landing = (completeAnimation) => {
    const tl = gsap.timeline();
    tl.from('.logo', {
        duration: 1.4,
        y: 80,
        opacity: 0,
        ease: 'power4.out',
        delay: 1,
        skewY: 7,
        stagger: {
            amount: 0.3,
        },
    })
        .from('.line span', {
            duration: 1.8,
            y: 100,
            ease: 'power4.out',
            delay: -1,
            skewY: 7,
            stagger: {
                amount: 0.3,
            },
        })
        .from('.hamburger-menu span', {
            duration: 1.2,
            y: 60,
            opacity: 0,
            ease: 'power4.out',
            delay: -1.5,
            skewY: 7,
            stagger: {
                amount: 0.3,
            },
        })
        .to('.overlay-top', {
            duration: 1.6,
            delay: -0.5,
            height: 0,
            ease: 'expo.inOut',
            stagger: {
                amount: 0.4,
            },
        })
        .to('.overlay-bottom', {
            duration: 1.6,
            width: 0,
            ease: 'expo.inOut',
            delay: -0.8,
            stagger: {
                amount: 0.4,
            },
        })
        .to('.intro-overlay', {
            duration: 0,
            display: 'none',
        })
        .from('.case-img img', {
            duration: 1.6,
            scale: 1.4,
            ease: 'expo.inOut',
            delay: -2,
            stagger: {
                amount: 0.4,
            },
            onComplete: completeAnimation,
        });
};
export default landing;
