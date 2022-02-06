import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
`
const PostLink = styled.button`
    position: absolute;
    right: 5vw;
    margin: 0;
    padding: 0;
    top: 10px;
    color: white;
    font-size: 20px;
    width: 150px;
    heigh: 40px;
    background-color: green;
    border-radius: 10px;
    transition: 0.7s;
    &:hover {
        transform: scale(1.05);
    }

`

const Article = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
	justify-content: center;
    position: relative;
`
const Image = styled.img`
    width: 300px;
    height: 300px;
    margin: 32px;
    padding: 32px;
    align-self: center;
    //background-color: #96450D;
    background-color: white;
    border-radius: 25px;
    transition: 0.7s;
    &:hover {
        transform: scale(1.05);
    }
`

const EmptyText = styled.p`
    position: absolute;
    top: 40vh;
    margin: 0 auto;
    margin-bottom: 10px;
    font-size: 25px;
`

const ItemLabel = styled.span`
  font-size: 25px;
  font-weight: normal;
  padding-left: 15px;
  color: orangered;
  font-weight: bold;
`

const ItemWrapper = styled(Link)`
    position: relative;
`

const ItemInfo = styled.div`
    opacity: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    bottom: 32px;
    left: 32px;
    border-radius: 0 0 25px 25px;
    height: 60%;
    width: 364px;
    background-color: rgb(0, 0, 0, 0.8);
    transition: 1s;
    &:hover {
        opacity: 1;
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

function Articles() {
    const [ data, setData ] = useState([])
    const [ error, setError ] = useState(false)

// ************************************************** Data fetching *************************************************

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('http://localhost:3000/api/article', {
                headers: {authorization: `Bearer ${sessionStorage.getItem('token')}`}
            })
            const data = await response.json()
            setData(data)
            setError(false)
          } catch(error) {
            console.log(error)
            setError(true)
          } 
        }
        fetchData()
    }, [])



    if(error) {
        return <Container><div>Aucun article</div></Container>
    }

    
    return data.length !== 0 ? (
        <Container>
        <Link to={`/articles-post`}>
            <PostLink>Add Item</PostLink>
        </Link>
        <Header><h1>Articles</h1></Header>
        <Article>
            { data.map(item => (
            <ItemWrapper key={`${item._id}`} to={`/articles/${item._id}`}>
                <Image src={item.imageUrl} alt="article" />
                <ItemInfo>
                    <ItemLabel>{item.title}</ItemLabel>
                    <ItemLabel>{`${item.price} fcfa`}</ItemLabel>
                    <ItemLabel>{`Disponibles : ${item.quantity}`}</ItemLabel>
                </ItemInfo>
            </ItemWrapper>
            ))}
        </Article>
        </Container>
    ) : (
        <Container>
        <Article>
            <EmptyText>
                Aucun article
            </EmptyText>
        </Article>
        <Link to={`/articles-post`}>
            <PostLink>Ajouter un item</PostLink>
        </Link>
        </Container>
    )
}

export default Articles