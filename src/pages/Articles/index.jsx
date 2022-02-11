import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const ArticleContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
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

const ItemLabel = styled.span`
  font-size: 25px;
  font-weight: normal;
  padding-left: 15px;
  color: orangered;
  font-weight: bold;
`

const ItemWrapper = styled(Link)`
    position: relative;
    text-decoration: none;
		margin: 32px;
		border-radius: 25px;
		padding-bottom: 32px;
		border: 5px solid blue;
`

// const ItemInfo = styled.div`
//     opacity: 0;
//     position: absolute;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     align-self: center;
//     bottom: 32px;
//     left: 32px;
//     border-radius: 0 0 25px 25px;
//     height: 60%;
//     width: 364px;
//     background-color: rgb(0, 0, 0, 0.8);
//     transition: 1s;
//     &:hover {
//         opacity: 1;
//     }
// `

const ItemInfo = styled.div`
	background-color: rgb(0, 0, 0, 0.7);
	margin: 0 32px;
	padding: 10px 32px;
  display: flex;
  flex-direction: column;
	border-radius: 25px;
`

const Header = styled.div`
    display: flex;
    background-color: 
    align-items: center;
    justify-content: center;
    background-color: #5096f9;
    h1 {
        color: white;
    }
`
const PostLink = styled.button`
    position: absolute;
    align-self: center;
    margin: 0;
    padding: 0;
    top: 10px;
    right: 0;
    color: white;
    font-size: 20px;
    width: 150px;
    height: 40px;
    cursor: pointer;
    background-color: green;
    border-radius: 10px;
    transition: 0.7s;
    &:hover {
        transform: scale(1.05);
    }
`
const PostSameLink = styled.button`
    position: absolute;
    align-self: center;
    margin: 0;
    padding: 0;
    top: 60px;
    right: 0;
    color: white;
    font-size: 20px;
    width: 250px;
    height: 40px;
    cursor: pointer;
    background-color: green;
    border-radius: 10px;
    transition: 0.7s;
    &:hover {
        transform: scale(1.05);
    }
`

function Articles({ articleCategory, text }) {
    
    const categories = articleCategory?.reduce(
		(acc, item) => acc.includes(item.category) ? acc: acc.concat(item.category),
		[]
	)
        const parameter = categories[0]
    
    return  (
        <ArticleContainer>
            <Link to={`/articles-post`} >
                <PostLink>Add Item</PostLink>
            </Link>
            <Link to={`/${parameter}-add`}>
                <PostSameLink>Add same category</PostSameLink>
            </Link>
            <Header><h1>Articles: {`${parameter}`} {text}</h1></Header>
            <Article>
                { articleCategory.map(item => (
                <ItemWrapper key={`${item._id}`} to={`/categories/item-${parameter}/${item._id}`}>
                    <Image src={item.imageUrl} alt="article" />
                    <ItemInfo>
                        <ItemLabel>{item.title}</ItemLabel>
                        <ItemLabel>{`${item.price} fcfa`}</ItemLabel>
                        <ItemLabel>{`Pointure: ${item.pointure}`}</ItemLabel>
                        <ItemLabel>{`Disponibles : ${item.quantity}`}</ItemLabel>
                    </ItemInfo>
                </ItemWrapper>
                ))}
            </Article>
        </ArticleContainer>
    )
}


export default Articles