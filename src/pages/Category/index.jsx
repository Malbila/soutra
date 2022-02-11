 import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Articles from "../Articles"
import GetPointure from "../../components/GetPointure";
import styled from "styled-components";
import { Loader } from "../../utils/style/Atoms";

const CategoryContainer = styled.div`
 display: flex;
 flex-direction: row;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

 function Category() {
   const { categoryName } = useParams()
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
      } catch(error) {
        console.log(error)
        setError(true)
      } 
    }
    fetchData()
  }, [])

  const categories =  data.filter(article => article.category === categoryName)

    if(error) {
      return <span>Oups... Il y a un problème</span>
    }

    return (
      <div>
        {isLoading ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
          ) : (
        <CategoryContainer>
          <GetPointure articlePointure={categories} categoryName={categoryName}/>
          <Articles articleCategory={categories} text = {""} />
        </CategoryContainer>
        )}
      </div>
    )
 }

 export default Category