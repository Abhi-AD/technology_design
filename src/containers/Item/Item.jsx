import React from 'react';
import './Item.css';
import { FaRebel, FaArrowRight, FaCloudversify, FaAirbnb, FaArtstation } from "react-icons/fa";

import { Link } from 'react-router-dom'
import { product } from './imports';
const Item = () => {
    return (
        <div className='service'>
            <div className="tab-header-service">
                <ul className="tab-header__list">
                    <li className='tab-item'>
                        <span className='tab-header__item'>
                            <FaRebel className='item_icon' />
                            <span className="tab-text">Products & Technlogy</span>
                        </span>
                    </li>
                    <li className='tab-item'>
                        <span className='tab-header__item'>
                            <FaRebel className='item_icon'/>
                            <span className="tab-text">Team and Augmentation</span>
                        </span>
                    </li>
                    <li className='tab-item'>
                        <span className='tab-header__item'>
                            <FaArtstation className='item_icon'/>
                            <span className="tab-text">Design</span>
                        </span>
                    </li>
                    <li className='tab-item'>
                        <span className='tab-header__item'>
                            <FaAirbnb className='item_icon'/>
                            <span className="tab-text">Data & AI</span>
                        </span>
                    </li>
                    <li className='tab-item'>
                        <span className='tab-header__item'>
                            <FaCloudversify className='item_icon'/>
                            <span className="tab-text">Cloud</span>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="tab-content">
                <div className="tab-card">
                    <div className="tab-card-col">
                        <span className='tab-card-col-title'>products & technology</span>
                        <h2 className='tab-card-col-header'><span>Deliver value,</span> not just products</h2>
                        <p className='tab-card-col-des'>Build digital experiences people love to use. Learn how we use battle-tested processes to systematically design and develop software that solves problems, delights users, and optimizes businesses.</p>
                        <Link className="parnter_icon">
                            <span style={{ paddingRight: '10px' }}>Learn more</span>
                            <FaArrowRight className='fa' />
                        </Link>
                    </div>
                    <div className="tab-card-col">
                        <img src={product} alt="product" />
                    </div>
                </div>
                <div className="tab-card">
                    <div className="tab-card-col">
                        <span className='tab-card-col-title'>products & technology</span>
                        <h2 className='tab-card-col-header'><span>Deliver value,</span> not just products</h2>
                        <p className='tab-card-col-des'>Build digital experiences people love to use. Learn how we use battle-tested processes to systematically design and develop software that solves problems, delights users, and optimizes businesses.</p>
                        <Link className="parnter_icon">
                            <span style={{ paddingRight: '10px' }}>Learn more</span>
                            <FaArrowRight className='fa' />
                        </Link>
                    </div>
                    <div className="tab-card-col">
                        <img src={product} alt="product" />
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Item;
