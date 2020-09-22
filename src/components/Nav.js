import React from 'react'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from "./ProfileData.js/Profile"

import { Link } from "react-router-dom";


const Nav = () => {


    return (
        <nav>
            <i class="fas fa-heartbeat fa-5x"></i>
            <ul className="nav_links">
                <LoginButton />
                <LogoutButton />
                <Profile />
                <Link to="/" className="nav_links">
                    <li>Home Page</li>
                </Link>
                <Link to="/TodoTotal" className="nav_links">
                    <li>Practices</li>
                </Link>
                <Link to="/FoodTotal" className="nav_links">
                    <li>Food</li>
                </Link>
                <Link to="/FoodInfo" className="nav_links">
                    <li>Food Values</li>
                </Link>


            </ul>

        </nav>
    )
}

export default Nav
