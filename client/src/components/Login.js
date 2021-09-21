import React, { useState } from 'react'

const Login = () => {

    const [state, setState] = useState({})

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value})
    }



    return (
        <div>
            <form>
                <p>Username</p>
                    <input onChange={onChange} name='username' type='text'></input>
                <p>Password</p>
                    <input onChange={onChange} name='password' type='password'></input><br />
                    <input type='submit'></input>
            </form>
        </div>
    )
}

export default Login
