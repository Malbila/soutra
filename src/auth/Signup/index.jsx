import React, {  useState } from "react";
import styled from "styled-components";
import axios from 'axios'
import { Loader } from "../../utils/style/Atoms";

export const Title = styled.h1`
    text-align: center;
    // color: orangered;
    font-size: 2rem;
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormLabel = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const InputLabel = styled.input`
    margin: 20px auto;
    width: 250px;
    height: 32px;
    border: 1px solid grey;
    border-radius: 10px;
    font-size: 20px;
    text-align: center;
    &:focus {
        border: 4px solid blue;
    }
`
export const Button = styled.button`
    height: 40px;
    width: 100px;
    background-color: green;
    border: 2px solid black;
    border-radius: 10px;
    font-size: 20px;
    color: white;
    transition: 0.5s;
    &:hover {
        transform: scale(1.1);
        box-shadow: 2px 2px 2px grey, -2px -1px 2px grey, 2px -2px 2px grey, -2px 2px 2px grey;
    }
`


function Signup() {
    const [ textValue, setTextValue ] = useState('')
    const [ passValue, setPassValue ] = useState('')
    const [ confirmValue, setConfirmValue ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(false)
    const [ exist, setExist ] = useState(false)

    const isValid = passValue !== ""  && confirmValue !== "" && passValue === confirmValue

    

    async function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        if(isValid) {
            await axios.post('http://localhost:3000/api/auth/signup', {
                email:textValue,
                password: passValue,
            }).then(() => {
                setTextValue("")
                setPassValue("")
                setConfirmValue("")
                window.location.href = '/login'
            }).catch(
                () => {
                setIsLoading(false)
                setError(setExist(true))
            })
        }
        else {
            setIsLoading(false)
            setError(true)
        }
    }



    return (
        <FormWrapper>
            <Title>Inscription</Title>
            <FormLabel onSubmit={(e) => handleSubmit(e)}>
                <InputLabel 
                    type="email"
                    placeholder="Email" 
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    autoFocus
                    onFocus={() => {setError(false); setExist(false)}}
                    required
                />
                <InputLabel
                    type="password" 
                    placeholder="Password" 
                    value={passValue}
                    onChange={(e) => setPassValue(e.target.value)}
                    onFocus={() => {setError(false); setExist(false)}}
                    required
                />
                <InputLabel
                    type="password" 
                    placeholder="Confirm password" 
                    value={confirmValue}
                    onChange={(e) => setConfirmValue(e.target.value)}
                    onFocus={() => {setError(false); setExist(false)}}
                    required
                />
                <Button type="submit" >Signup</Button>
                { isLoading ? <Loader /> : null}
                { exist ? <h3 style={{color: "red"}}>Il semblerait que ce mot de passe existe déjà</h3> : null}
                { error ? <h3 style={{color: "red"}}>Une erreur s'est produite. <br />Renseignez correctemet vos identifiants </h3> : null}
            </FormLabel>
        </FormWrapper>
    )
}

export default Signup