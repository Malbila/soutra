import styled from "styled-components";
import bg from '../../assets/bg.jpg'
import logo from '../../assets/logo.png'

const Background = styled.div`
  background: url(${bg});
  // background: rgba(20, 75, 100, 0.75);
  top: 0px;
  height: 40vh;
  position: relative;

`
const Container = styled.p`
  position: absolute;
  top: 10%;
  left: 15%;
  right: 15%;
  font-size: 40px;
  //color: white;
  color: #eceaea;
  animation: titre ease 7s ;
  @keyframes titre {
    0% {
        opacity: 0;
        transform: scale(0.5);
        transform: translateY(-100px,0px);
        transform: rotate(120deg);
    }
    33% {
        opacity: 0.5;
        transform: translate(50px,50px);
        transform: scale(1.5);
        transform: rotate(240deg);
    }
    66% {
        opacity: 1;
        transform: translate(0pxpx, 0px);
        transform: rotate(360deg);
    }
  }
`
const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 15px 60px;
`


const Paragraph = styled.p`
  font-size: 22px;
  word-spacing: 10px;
  padding: 60px;
  background-color: white;
  margin-left: 32px;
`
const Image = styled.img`
  padding: 0 60px;
  background-color: white;
  border-radius: 32px;
  margin-right: 32px;
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
          <Container>WELCOME TO OUR WEB APPLICATION &#128525;</Container>
        </Background>
        <h2 style={{color: "#7451eb"}}>Récuperez vos besoins et on s'occupe de tout</h2>
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
  