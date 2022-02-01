import React, { useState } from "react";
import { Button, FormLabel, FormWrapper, InputLabel, Title } from "../Signup";
import axios from "axios";

function Login() {
    const [textValue, setTextValue ] = useState('')
    const [ passValue, setPassValue ] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault()
       axios.post('http://localhost:3000/api/auth/login', {
            email:textValue,
            password: passValue,
        }).then((res) => {
          console.log("Successfully login")
          sessionStorage.setItem('token',res.data.token)  
          window.location.href = `/articles`
        }).catch((error) => console.log(error))
    }

    return (
        <FormWrapper>
            <Title>Connexion</Title>
            <FormLabel onSubmit={(e) => handleSubmit(e)}>
                <InputLabel 
                    type="text"
                    placeholder="Name" 
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    autoFocus
                    required
                />
                <InputLabel 
                    type="password" 
                    placeholder="Password" 
                    value={passValue}
                    onChange={(e) => setPassValue(e.target.value)}
                    required
                />
                <Button type="submit" >Login</Button>
            </FormLabel>
            <p>Don't have an account ? <a href="/signup">Signup</a></p>
        </FormWrapper>
    )
}

export default Login