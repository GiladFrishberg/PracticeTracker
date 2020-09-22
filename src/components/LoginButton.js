import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button className="log" onClick={() => loginWithRedirect()}>
                <i class="fas fa-sign-in-alt fa-1.5x"> Login </i>
            </button>
        )
    )
};

export default LoginButton;