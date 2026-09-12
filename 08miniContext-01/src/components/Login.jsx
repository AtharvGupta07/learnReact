import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        setUser({ username, password });

        setUsername('');
        setPassword('');
    }

    return (
        <div className='bg-slate-700 p-20 rounded-md flex flex-col gap-9'>
            <h2 className='text-white underline text-3xl'>Login</h2>

            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username'
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />

            <button
                onClick={handleSubmit}
                className='bg-slate-900 py-4 rounded-sm text-white hover:bg-slate-950'
            >
                Submit
            </button>
        </div>
    )
}

export default Login