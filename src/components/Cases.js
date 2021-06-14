import React from 'react';
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg';
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg';
import img1 from '../assets/find3.jpg';
import img2 from '../assets/keyboard-min.jpg';
import img3 from '../assets/connect.jpg';
const cases = [
    {
        id: 1,
        substitle: 'Find',
        title: 'Find people of similar minds',
        img: img1,
    },
    {
        id: 2,
        substitle: 'Connect & Contribute',
        title: 'Connect with your code double',
        img: img2,
    },
    {
        id: 3,
        substitle: 'Hangout',
        title: 'Hangout in rooms according to your expertise',
        img: img3,
    },
];

const Cases = () => {
    return (
        <section className='cases'>
            <div className='container-fluid'>
                <div className='cases-navigation'>
                    <div className='cases-arrow prev disabled'>
                        <CasesPrev />
                    </div>
                    <div className='cases-arrow next'>
                        <CasesNext />
                    </div>
                </div>
                <div className='row'>
                    {cases.map((caseItem) => (
                        <div className='case' key={caseItem.id}>
                            <div className='case-details'>
                                <span>{caseItem.substitle}</span>
                                <h2>{caseItem.title}</h2>
                            </div>
                            <div className='case-img'>
                                <img
                                    src={caseItem.img}
                                    alt={caseItem.subtitle + 'img'}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cases;
