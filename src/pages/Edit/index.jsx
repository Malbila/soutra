import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"

const EditWrapper = styled.div`
    // padding: 32px 0;
    // margin: 32px 0;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
`
const EditForm = styled.form`
    //padding: 32px 0;
    margin: 32px 0;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
`
const TitleInput = styled.input`
    text-align: center;
    margin: 10px 0;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    font-size: 18px;
    &:focus {
        border: 3px solid darkblue;
    }
`

const PriceInput = styled.input`
    text-align: center;
    margin: 10px 0;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    font-size: 18px;
    &:focus {
        border: 3px solid darkblue;
    }
`

const FileInput = styled.input`
    margin: 10px 0;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    font-size: 18px;
    transition: 0.7s;
    &:hover {
        transform: scale(1.05);
    }
`

const SaveButton = styled.button`
    margin: 10px 0;
    width: 100px;
    height: 40px;
    border-radius: 10px;
    background-color: green;
    color: white;
    font-size: 18px;
    transition: 0.7s;
    &:hover {
        transform: scale(1.05);
    }
`

function Edit() {
    const { name, id } = useParams()
    const [ data, setData ] = useState([])
    const [ title, setTitle ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ price, setPrice ] = useState(0)
    const [ quantity, setQuantity ] = useState(0)
    const[ pointure, setPointure ] = useState(0)
    const [ image, setThing ] = useState(null)

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

   async function handleSubmit(e) {
        e.preventDefault();
        const file = new FormData();
        file.append("article", `{ "_id": "${id}", "title": "${title === "" ? articleData?.title : title}", "pointure": "${pointure === 0 ? articleData?.pointure : pointure}", "price": "${price === 0 ? articleData?.price : price}", "imageUrl": "${image === {} ? articleData && articleData.imageUrl : ""}", "userId": "${articleData?.userId}", "category": "${category === "" ? articleData?.category : category}", "quantity": "${quantity === 0 ? articleData.quantity : quantity}"}`)
        file.append('image', image);

        const art = {
            title: title === "" ? articleData?.title : title,
            pointure: pointure === 0 ? articleData?.pointure : pointure,
            price: price === 0 ? articleData?.price : price,
            userId: articleData?.userId,
            imageUrl: articleData && articleData.imageUrl,
            category: category === "" ? articleData?.category : category,
            quantity: quantity === 0 ? articleData.quantity : quantity
        }


        const config= {
            headers: {
                'content-type': 'multipart/form-data',
                'authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        }

        const conf = {
                headers: {
                    'authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }

        if(image !== null){

            await axios.put("http://localhost:3000/api/article/"+id,file, config)
                .then((res) => {
                    console.log(res)
                    window.location.href = `/categories/item-${name}/${id}`
                })
                .catch((err) => (err));
        }
        else {
            await axios.put("http://localhost:3000/api/article/"+id, art, conf)
                .then((res) => {
                    console.log(res)
                    window.location.href = `/categories/item-${name}/${id}`
                })
                .catch((err) => (err));
        }
    }

    return (
        <EditWrapper>
            <h1>Modification de l'objet</h1>
            <EditForm encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
                <label >Nom de l'article:</label>
                <TitleInput 
                    type="text" 
                    name="title"
                    defaultValue={articleData && articleData.title}
                    // placeholder="name"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="">Categorie</label>
                <TitleInput 
                    type="text" 
                    placeholder="category"
                    defaultValue={articleData && articleData.category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <label>Chargez une image:</label>
                <FileInput 
                    type="file" 
                    name="image"
                    defaultValue={articleData && articleData.imageUrl}
                    onChange={(e) => setThing(e.target.files[0])}
                />
                <label>Pointure:</label>
                <PriceInput 
                    type="number" 
                    name="pointure"
                    defaultValue={articleData && articleData.pointure}
                    // placeholder="0"
                    onChange={(e) => setPointure(e.target.value)}
                />
                <label htmlFor="">Quantité</label>
                <PriceInput 
                    type="number" 
                    name="quantity"
                    defaultValue={articleData && articleData.quantity}
                    // placeholder="0"
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <label htmlFor="">Prix en fcfa:</label>
                <PriceInput 
                    type="number" 
                    name="price"
                    defaultValue={articleData && articleData.price}
                    // placeholder="0"
                    onChange={(e) => setPrice(e.target.value)}
                />
                <SaveButton type="submit">Save</SaveButton>
            </EditForm>
        </EditWrapper>
    )
}

export default Edit