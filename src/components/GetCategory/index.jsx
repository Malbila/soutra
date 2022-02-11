import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Loader } from "../../utils/style/Atoms"

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
`
const Liste = styled.li`
  list-style: none;
  font-size: 24px;
  width: 200px;
  text-align: center;
  padding: 10px 20px;
  margin: 16px;
  background-color: blue;
  border-radius: 25px;
  color: white;
  cursor: pointer;

`
const PostLink = styled.button`
  position: absolute;
  //right: 5vw;
  align-self: center;
  margin: 0;
  padding: 0;
  top: 10px;
  right: 5%;
  color: white;
  font-size: 20px;
  width: 150px;
  height: 40px;
  background-color: green;
  border-radius: 10px;
  transition: 0.7s;
  &:hover {
    transform: scale(1.05);
  }
`
const CustomizedHeader = styled.h1`
  font-size: 40px;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function GetCategory() {
  const [ data, setData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/article', {
          headers: {authorization: `Bearer ${sessionStorage.getItem('token')}`}
        })
        const data = await response.json()
        setData(data)
        setIsLoading(false)
      }
      catch(error) {
        console.log(error)
        setError(true)
      } 
    }
    fetchData()
  }, [])

  const categories = data?.reduce(
    (acc, item) => acc.includes(item.category) ? acc: acc.concat(item.category),
    []
  )

  if(error) {
    return <span>Oups... Il y a un problème</span>
  }
        
  return (
    <div>
      { isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
      <BodyWrapper>
        <Link to={`/articles-post`}>
          <PostLink>Add Item</PostLink>
        </Link>
        <CustomizedHeader>Tableau de bord</CustomizedHeader>
        <h2>Catégories disponibles</h2>
        { categories.map((article, index) => (
          <Link style={{textDecoration: 'none'}} to={`/categories/${article}`} key={index}>
            <Liste>{article}</Liste>
          </Link>
        ))}
      </BodyWrapper>
      )}
    </div>
  )
}

export default GetCategory