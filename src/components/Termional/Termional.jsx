import React from 'react';
import './Termional.css';
import { person1, person2 } from './import';
import { RiDoubleQuotesR } from "react-icons/ri";

const Termional = () => {
    return (
        <div className="people-container">
            <div className="people-image-holder">
                <div className="people">
                    <img src={person1} alt="" />
                    <div className="people-des">
                        <RiDoubleQuotesR className='quote-icon' />
                        <p className="bio1">Become an advocate for biotechnology and help shape policy that promotes innovation! Contact policymakers directly through BIO’s easy-to-use tool and have your voice heard.</p>
                        <p className="bio2">Over 40K subscribers worldwide can’t be wrong. Good Day BIO is the top resource for biotech industry news—and the only daily newsletter at the intersection of biotech, politics, and policy. (And, it’s free!) </p>
                        <h1 className='people-name'>Shane Warne</h1>
                        <p className='people-post'>Co-founder</p>
                    </div>
                </div>
                <div className="people">
                    <img src={person2} alt="" />
                    <div className="people-des">
                        <RiDoubleQuotesR className='quote-icon' />
                        <p className="bio1">Become an advocate for biotechnology and help shape policy that promotes innovation! Contact policymakers directly through BIO’s easy-to-use tool and have your voice heard.</p>
                        <p className="bio2">Over 40K subscribers worldwide can’t be wrong. Good Day BIO is the top resource for biotech industry news—and the only daily newsletter at the intersection of biotech, politics, and policy. (And, it’s free!) </p>
                        <h1 className='people-name'>Shane Warne</h1>
                        <p className='people-post'>Co-founder</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Termional;
