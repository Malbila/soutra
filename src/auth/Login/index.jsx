import React, { useState } from "react";

function Login() {
    const [textValue, setTextValue ] = useState('')
    const [ passValue, setPassValue ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({textValue, passValue})
        setTextValue('')
        setPassValue('')
    }

    return (
        <div>
            <h1>Connexion</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                    type="text"
                    placeholder="Name" 
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={passValue}
                    onChange={(e) => setPassValue(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login