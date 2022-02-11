import { Link } from "react-router-dom"
import styled from "styled-components"

const BodyWrapper = styled.div`
  //display: flex;
  //flex-direction: row;
  flex-wrap: wrap;
  background-color: grey;
  //align-items: center;
  max-width:220px;
  //justify-content: center;
  padding: 32px;
`
const Liste = styled.li`
  list-style: none;
  font-size: 20px;
  width: 60px;
  text-align: center;
  padding: 5px;
  margin: 5px;
  background-color: blue;
  border-radius: 10px;
  color: white;
  cursor: pointer;

`

function GetPointure({ articlePointure, categoryName }) {

  const pointures = articlePointure?.reduce(
    (acc, item) => acc.includes(item.pointure) ? acc: acc.concat(item.pointure),
    []
  )
        

  return (
    <BodyWrapper>
      <Link to={`/categories/`}>{`<<< Catégories`}</Link>
      <h3>Pointures de {categoryName} disponibles</h3>
      { pointures.map((article, index) => (
        <Link style={{textDecoration: 'none'}} to={`/categories/${categoryName}/${article}`} key={index}>
          <Liste>{article}</Liste>
        </Link>
      ))}
    </BodyWrapper>
  )
}

export default GetPointure