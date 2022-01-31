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
    padding: 50px;
    position: relative;
`
const Image = styled.img`
    width: 300px;
    height: 300px;
    margin: 32px;
    padding: 32px;
    align-self: center;
    background-color: #96450D;
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
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    bottom: 32px;
    left: 32px;
    border-radius: 0 0 25px 25px;
    height: 40%;
    width: 364px;
    background-color: rgb(0, 0, 0, 0.6);
`

function Articles({token}) {
    const [ data, setData ] = useState([])

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('http://localhost:3000/api/stuff',{headers: {authorizaton: `Bearer ${token}`}})
            const data = await response.json()
            setData(data)
          } catch(error) {
            console.log(error)
          } 
        }
        fetchData()
    }, [])

    /*,{
                headers: {authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWViMDY3MTc0ZDU1MDQ4MDdjYjVlNjkiLCJpYXQiOjE2NDM2NDA1NjIsImV4cCI6MTY0MzcyNjk2Mn0.OxbPJ4hyOY3o9wqF-EQH41Y8_osrHFIiyFXogxrD6HM"}
            }*/

    
    return data.length !== 0 ? (
        <Container>
        <Link to={`/articles-post`}>
            <PostLink>Add Item</PostLink>
        </Link>
        <h2>Articles</h2>
        <Article>
            { data.map(item => (
            <ItemWrapper key={`${item._id}`} to={`/articles/${item._id}`}>
                <Image src={item.imageUrl} alt="article" />
                <ItemInfo>
                    <ItemLabel>{item.title}</ItemLabel>
                    <ItemLabel>{`${item.price} fcfa`}</ItemLabel>
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