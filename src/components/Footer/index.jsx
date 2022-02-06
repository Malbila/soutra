import { Link } from "react-router-dom"
import styled from "styled-components"

const FooterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #42414d;
    margin-top: 32px;
`
const Span = styled.span`
    margin: 20px 50px;
    font-size: 20px;
    color: #B37583;
`


function Footer() {

    return (
        <FooterWrapper>
            <Span> <Link to={`/contacts`} style={{textDecoration: "none", color: "#B37583"}}>Contacts</Link></Span>
            <Span>WhatsApp</Span>
            <Span>Facebook</Span>
            <Span>LinkedIn</Span>
            <Span>Twiter</Span>
        </FooterWrapper>
    )
}

export default Footer