import { useState } from 'react'

const LoginControl = () => {
    const [loginStatus, setLoginStatus] = useState(false);
    if (loginStatus) {
        return (
            <>
                <h2>Welcome Back!</h2>
                <button onClick={() => setLoginStatus(false)}>Log Out</button>
            </>
        );
    } else {
        return (
            <>
                <h2>Please Sign Me Up</h2>
                <button onClick={() => setLoginStatus(true)}>Log In</button>
            </>
        );
    }
}


export default LoginControl;