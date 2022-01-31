import styled from "styled-components";
import bg from '../../assets/bg.jpg'

const Background = styled.div`
  background: url(${bg});
  // background: rgba(20, 75, 100, 0.75);
  top: 0px;
  height: 40vh;
  position: relative;

`
const Container = styled.p`
  position: absolute;
  top: 5vh;
  left: 10vw;
  font-size: 40px;
  color: white;
`

function Home() {

    return (
      <div>
        <Background>
          <Container>Bienvenue sur l'application web de Soutra Groupe</Container>
        </Background>
        <h2>Récuperez vos besoins et on s'occupe de tout</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in, expedita facilis perferendis fugit atque esse dignissimos sunt beatae magnam cum libero odit tempore reprehenderit aliquam? Illum facere itaque dicta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis cumque quas deserunt maiores error eius laboriosam sit eveniet, eos in iure quidem laudantium aut, adipisci praesentium esse quos dicta est natus unde, ex doloribus dolorem? Labore illo natus itaque obcaecati beatae rem earum incidunt! Corporis dolore accusamus provident laboriosam blanditiis commodi reiciendis et sunt nobis ratione ullam libero amet optio eius asperiores atque reprehenderit, id magnam voluptatibus itaque, praesentium natus! Unde aliquid perspiciatis sit necessitatibus, atque maiores minus, officiis vel molestiae expedita accusantium velit vitae voluptatum adipisci provident aut, sunt libero? Cupiditate culpa unde suscipit molestiae possimus repudiandae, ullam, accusamus optio enim earum odio tenetur dicta rerum dolorum eos cumque explicabo sed vel eaque fuga voluptas. Cupiditate, dolor repellendus veritatis illo nisi autem sunt, harum perferendis architecto quasi corporis explicabo. Mollitia at corrupti unde quisquam ipsum! Consequuntur, architecto impedit reiciendis quas iusto distinctio? Nulla exercitationem reiciendis aut beatae facere, accusamus voluptatibus cupiditate assumenda soluta? Sequi aliquid facilis quaerat, exercitationem saepe corporis natus nihil voluptatem fugit consequuntur porro dolorem iure, minima, dignissimos voluptatum ratione. Quasi, corrupti vero, eveniet laborum, ab eligendi tempore officiis quod voluptatibus illo architecto illum laboriosam. Dolor quo deleniti quod quasi nisi adipisci dicta praesentium voluptas laboriosam voluptatum quaerat odio commodi debitis id, inventore esse blanditiis magnam. Explicabo ullam ut labore aut nesciunt laboriosam reprehenderit totam, eum distinctio, id, quia impedit! Atque, culpa cupiditate. Tempore odio laborum repellendus quasi fugiat eaque, illum quaerat ipsa expedita facilis reiciendis mollitia enim dignissimos voluptate earum sequi cum ducimus incidunt unde deleniti, recusandae eos numquam! Incidunt repudiandae sit iste dicta nihil expedita nisi nemo! Modi, earum minus. Fugiat dolorem ullam, dicta ex nobis eaque possimus vel sint cupiditate quasi voluptatibus cumque odio iste sequi sed dolor sunt deleniti fuga iure adipisci. Maiores sapiente, accusamus voluptas corporis aspernatur, odit et veniam asperiores magni fuga ullam, esse repudiandae? Ab perferendis omnis incidunt ea, commodi magnam ducimus, iure possimus nesciunt nihil tenetur id! Cum, numquam quibusdam voluptates similique recusandae vel quis eius quos deserunt. Vitae eum obcaecati ipsa maiores, quod explicabo reiciendis et deleniti voluptas laudantium doloribus omnis modi, debitis vel eveniet quos natus voluptate iusto incidunt ducimus temporibus! Impedit adipisci dolorem illum fugit voluptates. Ad iusto voluptas sapiente dolore reprehenderit eaque in magni! Laudantium ipsum cumque impedit expedita facere quasi molestiae qui consequatur non quibusdam neque facilis nisi, adipisci delectus mollitia illum optio. Rerum deleniti cumque quisquam earum quasi illum odio tempora a corrupti!</p>
      </div>
    );
  }
  
  export default Home;
  