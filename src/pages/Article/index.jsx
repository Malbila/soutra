import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"
import { Loader } from "../../utils/style/Atoms"

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
const PushButton = styled.button`
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
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

function Article() {
    const { name, id } = useParams()
    const [ data, setData ] = useState([])
    const [ quant, setQuant ] = useState(0)
    const [ isLoading, setIsLoading ] = useState(true)
     const [ error, setError ] = useState(false)


    useEffect(() => {
        async function fetchData() {
            try {
              const response = await fetch('http://localhost:3000/api/article/'+id, {
                  headers: {authorization: `Bearer ${sessionStorage.getItem('token')}`}
              })
              const data = await response.json()
              setData(data)
              setIsLoading(false)
              setQuant(data.quantity)
            } catch (err) {
              console.log(err)
              setError(true)
            } 
          }
    fetchData()
    }, [id])

    const articleData = data
    
   
    const handleDelete = async (e) => {
        e.preventDefault()
       await axios.delete('http://localhost:3000/api/article/' +id, {
            headers: {authorization: `Bearer ${sessionStorage.getItem('token')}`}
        })
        .then(() => {
            window.location.href = `/categories/${name}`
        })
        .catch(err => console.log(err))
    }

    const handleReduce = async (e) => {
        e.preventDefault()
        const data = {
            quantity: quant - 1
        }

       await axios.put('http://localhost:3000/api/article/'+id, data, {
            headers: {authorization: `Bearer ${sessionStorage.getItem('token')}`}
        })
        .then((res) =>
            console.log(res),
            setQuant(quant-1)
        )
        .catch(err => console.log(err))
    }
    
    const handleAdd = async (e) => {
        e.preventDefault()
        const data = {
            quantity: quant + 1
        }

       await axios.put('http://localhost:3000/api/article/'+id, data, {
            headers: {authorization: `Bearer ${sessionStorage.getItem('token')}`}
        })
        .then((res) =>
            console.log(res),
            setQuant(quant+1)
        )
        .catch(err => console.log(err))
    }

    if(error) {
        return <span>Oups... Il y a un problème</span>
    }

    return   (
        <div>
            { isLoading ? (
            <LoaderWrapper>
                <Loader />
            </LoaderWrapper>
            ) : (
            <ArticleWrapper>
                <Back to={`/categories/${name}`}>{`<<< `}Retour</Back>
                <Image src={articleData && articleData.imageUrl} alt="article" />
                <SpanWrapper>
                    <Span><b>Nom</b>: { articleData && articleData.title}</Span> 
                    <Span><b>Prix</b>: {`${articleData && articleData.price} fcfa`} </Span>
                    <Span><b>Pointure</b>: {`${articleData.pointure}`}</Span>
                    <Span><b>Quantité</b>: {quant}</Span>
                </SpanWrapper>
                <ButtonWrapper>
                    <Link to={`/categories/item-${name}/${articleData?._id}/edit`}>
                        <EditButton>Modifier</EditButton>
                    </Link>
                    <RemoveButton onClick={(e) => {window.confirm("Voulez-vous vraiment supprimer ct objet") && handleDelete(e)}}>Supprimer</RemoveButton>
                    <PushButton onClick={(e) =>  handleAdd(e)}>Ajouter</PushButton>
                    <PopButton onClick={(e) => quant > 1 ? handleReduce(e) : handleDelete(e)}>Enlever</PopButton>
                    { quant === 1 ? <span style={{fontSize: "18px", color: 'red', margin: '10px'}}><br /> En cliquant sur <b style={{color: 'black'}}>Enlever</b>, vous supprimez définitivement l'article</span> : ''}
                </ButtonWrapper>
            </ArticleWrapper>
            )}
        </div>
    ) 
}

export default Article