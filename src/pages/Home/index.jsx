import styled from "styled-components";
import bg from '../../assets/bg.jpg'
import logo from '../../assets/logo.png'

const Background = styled.div`
  background: url(${bg});
  // background: rgba(20, 75, 100, 0.75);
  top: 0px;
  height: 20vh;
  position: relative;
  @media (max-width: 600px) {
    height: 40vh;
  }

`
const Container = styled.p`
  position: absolute;
  left: 15%;
  right: 15%;
  font-size: 40px;
  color: #eceaea;
  @media (min-width: 500px) {
    left: 20%;
    top: 10%;
    animation: titre ease 5s ;
    @keyframes titre {
      0% {
          opacity: 0;
          transform: scale(0.5);
          transform: translateX(300px);
      }
      50% {
          opacity: 0.5;
          transform: translateX(200px);
          transform: scale(1.5);
      }
      66% {
          opacity: 0.75;
      }
    } 
  }
`
const BodyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 15px 0px;
`


const Paragraph = styled.p`
  font-size: 22px;
  word-spacing: 10px;
  max-width: 500px;
  padding: 60px;
  background-color: white;
  padding: 12px;
  @media (min-width: 480px){
    margin-left: 32px;
    padding: 32px;
  }
`
const Image = styled.img`
  padding: 0 40px;
  background-color: white;
  border-radius: 32px;
  margin: 10px;
  @media (max-width: 480px) {
    padding: 0px
  }
`
const Details = styled.p`
  opacity: 0;
  position: absolute;
  bottom: 100px;
  font-size: 30px;
  text-align: center;
  color: #ff6c37;
  font-weight: bold;
  transition: 1s;
  &:hover {
    opacity: 1;
  }
`
const DetailLogo = styled.div`
  position: relative;

`

function Home() {

    return (
      <div>
        <Background>
          <Container>WELCOME TO OUR WEB APPLICATION</Container>
        </Background>
        <h2 style={{color: "#7451eb"}}>Récuperez vos besoins et on s'occupe du reste, avec le meilleur service</h2>
        <BodyWrapper>
          <DetailLogo>
            <Image src={logo} alt="logo" />
            <Details>Soutra Group est une entreprise commerciale de tout genre</Details>
          </DetailLogo>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat veritatis neque voluptatibus excepturi officia repellat eaque minima exercitationem. Laborum eos natus unde in, facere nobis quas quae quia laudantium blanditiis.
          </Paragraph>
        </BodyWrapper>
      </div>
    );
  }
  
  export default Home;
  