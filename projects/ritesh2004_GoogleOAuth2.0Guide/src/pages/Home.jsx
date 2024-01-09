import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Authcontext from '../context/Authcontext';

export const Home = () => {
    const route = useNavigate();
    const { isAuthenticated } = useContext(Authcontext);
    const logIn = () => {
        // It will hit callback url of Google OAuth2.0
        window.open('http://localhost:4000/oauth/google/redirect','_self')
    }
    return (
        <div>
            <h1>Google OAuth Demo</h1>
            {/* If not Logged In then show sign in button  */}
            {!isAuthenticated && <button onClick={logIn}>SIGN IN WITH GOOGLE</button>}
            <br />
            <br />
            {/* If user Logged In then show View Profile button  */}
            {isAuthenticated && <button onClick={() => route('/profile')}>VIEW PROFILE</button>}
        </div>
    )
}
