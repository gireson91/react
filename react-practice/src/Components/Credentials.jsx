import {useState} from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const showCredentials = (e) => {
        e.preventDefault();
        // console.log(username, password);
    }
    return(
        <>
        <form onSubmit={showCredentials}>
            <label>Username:</label>
            <input name="username"
            type="text"
            value={username}
            onClick={(event) => setUsername(event.target.value)}/>

            <label>Password:</label>
            <input type="password"
            type="text"
            value={password}
            onChange={event => setPassword(event.target.value)}/>
            <br/>
            <button>Submit</button>
        </form>
        </>
    )
}

export default Login;