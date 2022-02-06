import styled from "styled-components"
import watt from '../../assets/watt.png'
import face from '../../assets/face.png'
import linke from '../../assets/linke.png'
import twiter from '../../assets/twiter.png'

const ContatsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px 50px;
    padding: 25px;
    width: 45%;
    min-width: 200px;
    background-color: white;
    border-radius: 25px;
    label {
        font-size: 18px;
    }
`

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px 50px;
    padding: 25px;
    max-width: 500px;
    background-color: white;
    border-radius: 25px;
`

const InputContainer = styled.input`
    width: 80%;
    height: 50px;
    min-width: 200px;
    margin: 25px 0;
    font-size: 18px;
    border-radius: 10px;
    border-radius: 10px;
    &:focus {
        border: 3px solid blue;
    }
`

const AreaContainer = styled.textarea`
    width: 80%;
    height: 200px;
    margin: 25px 0;
    min-width: 200px;
    font-size: 18px;
    border-radius: 10px;
    border-radius: 10px;
    &:focus {
        border: 3px solid blue;
    }
`

const Button = styled.button`
    width: 80px;
    height: 50px;
    margin: 25px 0;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    background-color: green;
    transition: 1s;
    &:hover {
        transform: scale(1.05);
    }
`

const FooterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
`
const Span = styled.span`
    margin: 20px 20px;
    font-size: 20px;
    color: #B37583;
`

const SpanDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

function Contacts() {

    return (
        <ContatsWrapper>
            <FormWrapper>
                <label htmlFor="name">Votre nom complet:</label>
                <InputContainer type="text" placeholder="Full name" />
                <label htmlFor="message">Votre message:</label>
                <AreaContainer placeholder="Message here"></AreaContainer>
                <Button type="submit">Send</Button>
            </FormWrapper>
            <LinksWrapper>
                <p style={{fontSize: '20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores voluptas id optio, dicta quibusdam, mollitia totam fugiat laboriosam qui enim sapiente fuga adipisci iure debitis possimus. A, asperiores et. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil facere, neque hic itaque atque repellat corporis voluptas cumque suscipit illo quod! Harum, dolor. Aliquid vel magni deserunt, excepturi dolore corporis.</p>
                <h1>Réseaux sociaux</h1>
                <FooterWrapper>
                    <SpanDiv>
                        <Span>WhatsApp</Span>
                        <img src={watt} alt="whatsapp" width="40px" height="40px" />
                        {/* <span>+226 51 51 97 33</span> */}
                    </SpanDiv>
                    <SpanDiv>
                        <Span>Facebook</Span>
                        <img src={face} alt="facebook" width="40px" height="40px" />
                    </SpanDiv>
                    <SpanDiv>
                        <Span>LinkedIn</Span>
                        <img src={linke} alt="linkedin" width="40px" height="40px" />
                    </SpanDiv>
                    <SpanDiv>
                        <Span>Twiter</Span>
                        <img src={twiter} alt="twiter" width="40px" height="40px" />
                    </SpanDiv>
                </FooterWrapper>
            </LinksWrapper>
        </ContatsWrapper>
    )
}

export default Contacts