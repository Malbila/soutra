import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Category from "../../components/Category";

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
    background-color: rgb(0, 0, 0, 0.8);
`

function Articles() {
    const [ data, setData ] = useState([])

// ************************************************** Data fetching *************************************************

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('http://localhost:3000/api/article', {
                headers: {authorization: `Bearer ${sessionStorage.getItem('token')}`}
            })
            const data = await response.json()
            setData(data)
          } catch(error) {
            console.log(error)
          } 
        }
        fetchData()
    }, [])

  

    const articlesData = data && data


    // ******************************************* Category filter ****************************************************

    const category = articlesData.reduce(
      (acc, item) => acc.includes(item.category) ? acc: acc.concat(item.category),
      []
    )

    // ****************************************************** Conter ***********************************************

    const number = () => {
      let i = 0
      //let cat = ''
      const categories = []
      for(let m = 0; m<=category.length-1; m++) {
        for(let n = 0; n<=articlesData.length-1; n++) {
            if(articlesData[n].category === category[m]){
            i += 1
          }
        }
        categories.push({ category: category[m], number: i})
        i = 0
      }
      return categories
    }
// *********************************************** Category number *******************************************

    const categoryNumber = (cat) => {
        let i = 0
        for(let n = 0; n<=articlesData.length-1; n++) {
            if(articlesData[n].category === cat){
                i += 1
            }
        }
        return i
    }
    

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
                    <ItemLabel>{`Disponibles : ${categoryNumber(item.category)}`}</ItemLabel>
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