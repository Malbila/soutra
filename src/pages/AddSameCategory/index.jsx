import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

const EditWrapper = styled.div`
    //padding: 32px 0;
    //margin: 32px 0;
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

function AddSameCategory() {
    const { category } = useParams()
    const [ title, setTitle ] = useState('')
    const [ price, setPrice ] = useState(0)
    const [ quantity, setQuantity ] = useState(0)
    const [ pointure, setPointure ] = useState(0)
    const [ image, setImageUrl ] = useState({})

    
   const makeId = () => {
        let ID = "";
        let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        for ( var i = 0; i < 24; i++ ) {
          ID += characters.charAt(Math.floor(Math.random() * 36));
        }
        return ID;
      }
      
    const userId = makeId()

    function handlePost(e) {
        e.preventDefault();
        const file = new FormData();
        file.append("article", `{ "title": "${title}", "price": "${price}", "imageUrl": "", "userId":"${userId}", "category": "${ category }", "quantity": "${quantity}", "pointure" : "${pointure}"}`)
        file.append('image', image);

        const config= {
            headers: {
                'content-type': 'multipart/form-data',
                'authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
        }

        axios.post("http://localhost:3000/api/article",file, config)
        .then(() => window.location.href = `/categories/${category}`)
        .catch((err) => (err));
    }

    return (
        <EditWrapper>
            <h1>Enregistrez un objet</h1>
            <EditForm encType="multipart/form-data" onSubmit={(e) => handlePost(e)}>
                <label >Nom de l'article:</label>
                <TitleInput 
                    type="text" 
                    placeholder="name"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label>Chargez une image:</label>
                <FileInput 
                    type="file"
                    name="name"
                    onChange={(e) => setImageUrl(e.target.files[0])}
                    accept="png, jpg, jpeg"
                    required
                />
                <label>Pointure:</label>
                <PriceInput 
                    type="number" 
                    name="pointure"
                    placeholder="pointure"
                    onChange={(e) => setPointure(e.target.value)}
                />
                <label htmlFor="">Quantité</label>
                <PriceInput 
                    type="number" 
                    name="quantity"
                    placeholder="quantité"
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <label htmlFor="">Prix en fcfa:</label>
                <PriceInput 
                    type="number" 
                    placeholder="prix"
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <SaveButton type="submit">Save</SaveButton>
            </EditForm>
        </EditWrapper>
    )
}

export default AddSameCategory