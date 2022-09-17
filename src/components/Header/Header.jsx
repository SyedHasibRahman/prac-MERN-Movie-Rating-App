import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
    return (
        <div className='header'>
            <Link to="/#"><span className="logo">Movie App</span></Link>
            <div className="user-image">
                <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="user" />
            </div>

        </div>
    )
}

export default Header