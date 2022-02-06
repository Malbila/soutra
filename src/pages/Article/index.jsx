import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"

const ArticleWrapper = styled.div`
    position: relative;
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
    background-color: #ae2b2b;
    border-radius: 10px;
    transition: 0.7s;
    &:hover {
        transform: scale(1.05);
    }
`

const PopButton = styled.button`
    height: 40px;
    width: 150px;
    font-size: 1.2rem;
    margin: 0 15px;
    color: white;
    background-color: #2759f5;
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
const Back = styled(Link)`
    position: absolute;
    left: 10px;
    top: 0;
    font-size: 22px;
    text-decoration: none;
    color: blue;
`

function Article() {
    const { id } = useParams()
    const [ data, setData ] = useState([])


    useEffect(() => {
        async function fetchData() {
            try {
              const response = await fetch('http://localhost:3000/api/article/'+id, {
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

    const articleData = data 
    //const articleData = data.find(article => article._id === id)
   
    const handleDelete = (e) => {
        e.preventDefault()
        axios.delete('http://localhost:3000/api/article/' +id, {
            headers: {authorization: `Bearer ${sessionStorage.getItem('token')}`}
        })
            .then(() => {
                window.location.href = '/articles'
            })
            .catch(err => console.log(err))
    }

    const handleReduce = (e) => {
        e.preventDefault()
        const data = {
            quantity: articleData.quantity - 1
        }

        //console.log(data)

        axios.put('http://localhost:3000/api/article/'+id, data, {
            headers: {authorization: `Bearer ${sessionStorage.getItem('token')}`}
        })
            .then((res) =>
                console.log(res),
                window.location.reload()
            )
            .catch(err => console.log(err))
    }
    

    return   articleData !== undefined ?  (
        <ArticleWrapper>
            <Back to={`/articles`}>{`<<< `}Retour</Back>
            <Image src={articleData && articleData.imageUrl} alt="article" />
            <SpanWrapper>
                <Span><b>Nom</b>: { articleData && articleData.title}</Span> 
                <Span><b>Prix</b>: {`${articleData && articleData.price} fcfa`} </Span>
                <Span><b>Quantité</b>: {articleData && articleData.quantity}</Span>
            </SpanWrapper>
            <ButtonWrapper>
                <Link to={`/articles/${articleData?._id}/edit`}>
                    <EditButton>Modifier</EditButton>
                </Link>
                <RemoveButton onClick={(e) => {window.confirm("Voulez-vous vraiment supprimer ct objet") && handleDelete(e)}}>Supprimer</RemoveButton>
                <PopButton onClick={(e) => articleData.quantity > 1 ? handleReduce(e) : handleDelete(e)}>Décrémenter</PopButton>
                { articleData.quantity === 1 ? <span>En cliquant sur <b>décrémenter</b>, vous supprimez définitivement l'article</span> : ''}
            </ButtonWrapper>
        </ArticleWrapper>
    ) : (
        <div>
            <h2>Data is loading</h2>
        </div>
    )
}

export default Article