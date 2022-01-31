import React, { useState } from "react";
import { Button, FormLabel, FormWrapper, InputLabel, Title } from "../Signup";
import axios from "axios";
import Articles from "../../pages/Articles";
//import Articles from "../../pages/Articles";

function Login() {
    const [textValue, setTextValue ] = useState('')
    const [ passValue, setPassValue ] = useState('')
    // const [ data, setData ] = useState({})
     const [ auth, setAuth ] = useState(false)
    const [ token, setToken ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
       axios.post('http://localhost:3000/api/auth/login', {
            email:textValue,
            password: passValue,
        }).then((res) => {
            console.log("Successfully login")
            setToken(res.data.token)
            console.log(token)
            setAuth(true)

            // axios.defaults.headers.common['authorization'] = `Bearer ${res.data.token}`
            // setAuth(true)
            // const getData = () => {
            //     axios.get('http://localhost:3000/api/stuff').then((res) => {
            //         setData(res.data)
            //         console.log(data)
            //         return <Articles />
            //     })
            // }
            // getData()
           // window.location.href = `/articles`
        }).catch((error) => console.log(error))
    }

    return !auth ? (
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
    ) : (
        <div>
            <Articles token={token} />
        </div>
    )
}

export default Login