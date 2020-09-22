import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";


const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <h4>Hey {user.name}  </h4>
                < Link to="/profileinfo" className="nav_links" >
                    <li >My Profile</li>
                </Link>
            </div>
        )
    )
}

export default Profile
