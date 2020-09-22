import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button className="log" onClick={() => logout({ returnTo: window.location.origin })}>
                <i class="fas fa-sign-out-alt"> Log Out</i>
            </button>
        )
    );
};

export default LogoutButton;