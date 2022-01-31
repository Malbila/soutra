import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"

const EditWrapper = styled.div`
    padding: 32px 0;
    margin: 32px 0;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
`
const EditForm = styled.form`
    padding: 32px 0;
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

const DescriptionArea = styled.textarea`
    margin: 10px 0;
    width: 300px;
    height: 100px;
    border-radius: 10px;
    font-size: 18px;
    &:focus {
        border: 3px solid darkblue;
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
    const { id } = useParams()
    const [ data, setData ] = useState([])
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ price, setPrice ] = useState(0)
    const [ image, setThing ] = useState({})

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('http://localhost:3000/api/stuff')
            const data = await response.json()
            setData(data)
          } catch (err) {
            console.log(err)
          } 
        }
        fetchData()
    }, [])
    
    const articleData = data.find(article => article._id === id)

    function handleSubmit(e) {
        e.preventDefault();
        const file = new FormData();
        file.append("thing", `{ "_id": "${id}", "title": "${title}", "description": "${description}", "price": "${price}", "imageUrl": "", "userId": "${articleData.userId}"}`)
        file.append('image', image);
        const config= {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        

        axios.put("http://localhost:3000/api/stuff/"+id,file, config)
            .then((res) => console.log(res))
            .catch((err) => (err));
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
                <label>Chargez une image:</label>
                <FileInput 
                    type="file" 
                    name="image"
                    defaultValue={articleData && articleData.imageUrl}
                    onChange={(e) => setThing(e.target.files[0])}
                />
                <img src={image.name} alt="" />
                <label>Description:</label>
                <DescriptionArea
                    name="description"
                    defaultValue={articleData && articleData.description}
                    onChange={(e) => setDescription(e.target.value)}
                ></DescriptionArea>
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