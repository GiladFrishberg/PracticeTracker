import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const ProfileInfo = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div className="profile_info">

                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    )
}

export default ProfileInfo
