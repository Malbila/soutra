import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"

const ArticleWrapper = styled.div`
    margin: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Image = styled.img`
    width: 50%;
    height: 60%;
    padding: 32px;
    background-color: grey;
`

const ButtonWrapper = styled.div`
    padding: 16px 0;
    margin: 5px;
`
const EditButton = styled.button`
    height: 40px;
    width: 150px;
    font-size: 1.2rem;
    margin: 0 15px;
    color: white;
    background-color: green;
    border-radius: 10px;
    transition: 0.7s;
    &:hover {
        transform: scale(1.05);
    }
`

const RemoveButton = styled.button`
    height: 40px;
    width: 150px;
    font-size: 1.2rem;
    margin: 0 15px;
    color: white;
    background-color: red;
    border-radius: 10px;
    transition: 0.7s;
    &:hover {
        transform: scale(1.05);
    }
`

const SpanWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Span = styled.span`
    margin: 0 15px;
    font-size: 18px;
`

function Article() {
    const { id } = useParams()
    const [ data, setData ] = useState([])


    useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/article', {
            headers: {authorization: `Bearer ${sessionStorage.getItem('token')}`}
        })
        const data = await response.json()
        setData(data)
      } catch (err) {
        console.log(err)
      } 
    }
    fetchData()
    }, [])

    const articleData = data.find(article => article._id === id)
    console.log(articleData)

    //const  { title, description, price } = articleData !== undefined 

    const handleDelete = (e) => {
        e.preventDefault()
        axios.delete('http://localhost:3000/api/article/' +id, {
            headers: {authorization: `Bearer ${sessionStorage.getItem('token')}`}
        })
            .then(() => {
                //console.log("Object removed")
                window.location.href = '/articles'
            })
            .catch(err => console.log(err))

    }
    

    return   articleData !== undefined ?  (
        <ArticleWrapper>
            <Image src={articleData && articleData.imageUrl} alt="article" />
            <SpanWrapper>
                <Span><b>Nom</b>: { articleData && articleData.title}</Span> 
                <Span><b>Description</b>: {articleData && articleData.description}</Span>
                <Span><b>Prix</b>: {`${articleData && articleData.price} fcfa`} </Span>
            </SpanWrapper>
            <ButtonWrapper>
                <Link to={`/articles/${articleData?._id}/edit`}>
                    <EditButton>Modifier</EditButton>
                </Link>
                <RemoveButton onClick={(e) => {window.confirm("Voulez-vous vraiment supprimer ct objet") && handleDelete(e)}}>Supprimer</RemoveButton>
            </ButtonWrapper>
        </ArticleWrapper>
    ) : (
        <div>
            <h2>Data is loading</h2>
        </div>
    )
}

export default Article