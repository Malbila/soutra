import React, { useState } from "react";
import { Button, FormLabel, FormWrapper, InputLabel, Title } from "../Signup";
import axios from "axios";
import { Loader } from "../../utils/style/Atoms";

function Login() {
    const [textValue, setTextValue ] = useState('')
    const [ passValue, setPassValue ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(false)
    

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
       axios.post('http://localhost:3000/api/auth/login', {
            email:textValue,
            password: passValue,
        }).then(
            (res) => {
          console.log("Successfully login")
          sessionStorage.setItem('token',res.data.token)  
          window.location.href = `/categories`
        }).catch(
            () => {
                setIsLoading(false)
                setError(true)
                //console.log(error)
            })
    }

    return (
        <FormWrapper>
            <Title>Connexion</Title>
            <FormLabel onSubmit={(e) => handleSubmit(e)}>
                <InputLabel 
                    type="text"
                    placeholder="Email" 
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    autoFocus
                    onFocus={() => setError(false)}
                    required
                />
                <InputLabel 
                    type="password" 
                    placeholder="Password" 
                    value={passValue}
                    onChange={(e) => setPassValue(e.target.value)}
                    onFocus={() => setError(false)}
                    required
                />
                <Button type="submit" >Login</Button>
            </FormLabel>
            { isLoading ? <Loader /> : null }
            { error ? <h3 style={{color: 'red'}}>Une erreur s'est produite</h3> : null }
            <p>Don't have an account ? <a href="/signup">Signup</a></p>
        </FormWrapper>
    )
}

export default Login