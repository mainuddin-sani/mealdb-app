import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className='nav'>
            <div className="logo">
                <img src="" alt="" />
            </div>
            <ul className='navbar-nav'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/meals'>Meals</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;