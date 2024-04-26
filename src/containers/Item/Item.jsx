import React, { useState } from 'react';
import './Item.css';
import { FaRebel, FaArrowRight, FaCloudversify, FaAirbnb } from "react-icons/fa";

import { Link } from 'react-router-dom'
import { product } from './imports';
const Item = () => {
    const [activeTab, setActiveTab] = useState('London');

    const openCity = (cityName) => {
        setActiveTab(cityName);
    };
    return (
        <div className='service'>
            <div className="tab-header-service">
                <ul className="tab-header__list">
                    <li className='tab-item'>
                        <Link
                            className={activeTab === 'London' ? 'tablinks active' : 'tablinks'}
                            onClick={() => openCity('London')}>
                            <span className='tab-header__item'>
                                <FaRebel className='item_icon' />
                                <span className="tab-text">London</span>
                            </span>
                        </Link>
                    </li>
                    <li className='tab-item'>
                        <Link
                            className={activeTab === 'Paris' ? 'tablinks active' : 'tablinks'}
                            onClick={() => openCity('Paris')}
                        >
                            <span className='tab-header__item'>
                                <FaCloudversify className='item_icon' />
                                <span className="tab-text">Paris </span>
                            </span>
                        </Link>
                    </li>
                    <li className='tab-item'>
                        <Link
                            className={activeTab === 'Tokyo' ? 'tablinks active' : 'tablinks'}
                            onClick={() => openCity('Tokyo')}
                        >
                            <span className='tab-header__item'>
                                <FaAirbnb className='item_icon' />
                                <span className="tab-text">Tokyo</span>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="tab-content">
                <div id="London" className="tab-card" style={{ display: activeTab === 'London' ? 'block' : 'none' }}>
                    <div className="tab-card-col-left">
                        <span className='tab-card-col-title'>Londan</span>
                        <h2 className='tab-card-col-header'><span>Delive,</span> not just products</h2>
                        <p className='tab-card-col-des'>Build digital experiences people love to use. Learn how we use battle-tested processes to systematically design and develop software that solves problems, delights users, and optimizes businesses.</p>
                        <div className="parnter_icon">
                            <span style={{ paddingRight: '10px' }}>Learn more</span>
                            <FaArrowRight className='fa' />
                        </div>
                    </div>
                    <div className="tab-card-col-right">
                        <img src={product} alt="product" />
                    </div>
                </div>
                <div id="Paris" className="tab-card" style={{ display: activeTab === 'Paris' ? 'block' : 'none' }}>
                    <div className="tab-card-col-left">
                        <span className='tab-card-col-title'>Paris</span>
                        <h2 className='tab-card-col-header'><span>Delive,</span> not just products</h2>
                        <p className='tab-card-col-des'>Build digital experiences people love to use. Learn how we use battle-tested processes to systematically design and develop software that solves problems, delights users, and optimizes businesses.</p>
                        <div className="parnter_icon">
                            <span style={{ paddingRight: '10px' }}>Learn more</span>
                            <FaArrowRight className='fa' />
                        </div>
                    </div>
                    <div className="tab-card-col-right">
                        <img src={product} alt="product" />
                    </div>
                </div>
                <div id="Tokyo" className="tab-card" style={{ display: activeTab === 'Tokyo' ? 'block' : 'none' }}>
                    <div className="tab-card-col-left">
                        <span className='tab-card-col-title'>Tokyo</span>
                        <h2 className='tab-card-col-header'><span>Delive,</span> not just products</h2>
                        <p className='tab-card-col-des'>Build digital experiences people love to use. Learn how we use battle-tested processes to systematically design and develop software that solves problems, delights users, and optimizes businesses.</p>
                        <div className="parnter_icon">
                            <span style={{ paddingRight: '10px' }}>Learn more</span>
                            <FaArrowRight className='fa' />
                        </div>
                    </div>
                    <div className="tab-card-col-right">
                        <img src={product} alt="product" />
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Item;
