import React, {  useState } from "react";
import styled from "styled-components";
import axios from 'axios'

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
    const [ isEditing, setIsEditing ] = useState(false)

    const isValid = passValue !== ""  && confirmValue !== "" && passValue === confirmValue

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3000/api/auth/signup', {
            email:textValue,
            password: passValue,
        }).then(() => {
            console.log("Succès")
            setTextValue("")
            setPassValue("")
            setConfirmValue("")
            window.location.href = '/login'
        }).catch(err => console.log(err))
    }



    return (
        <FormWrapper>
            <Title>Inscription</Title>
            <FormLabel onSubmit={(e) =>isValid ? handleSubmit(e) : console.log('Mot de passe incorrect')}>
                <InputLabel 
                    type="email"
                    placeholder="Email" 
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
                    onMouseDown={() => console.log('ça y est')}
                />
                <InputLabel
                    type="password" 
                    placeholder="Confirm password" 
                    value={confirmValue}
                    onChange={(e) => setConfirmValue(e.target.value)}
                    required
                    onMouseDown={() => setIsEditing(true)}
                />
                <Button type="submit" disabled={!isValid}>Signup</Button>
            </FormLabel>
        </FormWrapper>
    )
}

export default Signup