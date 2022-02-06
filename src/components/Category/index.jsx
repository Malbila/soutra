 import { useEffect, useState } from "react"

 function Category() {
     const [ data, setData ] = useState([])


    // function addToCart(name, price) {
    //   const curentPlantSaved = cart.find((plant) => plant.name === name)
    //   if(curentPlantSaved) {
    //     const cartFilterdCurrentPlant = cart.filter((plant) => plant.name !== name)
  
    //     updateCart([ ...cartFilterdCurrentPlant, { name, price, amount: curentPlantSaved.amount+1}])
    //   }
    //   else {
    //     updateCart([ ...cart, { name, price, amount: 1}])
    //   }
    // }

    // ************************************************** Data fetching *************************************************
  

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('http://localhost:3000/api/article')
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

    
    const categoryNumber = (cat) => {
      let i = 0
      for(let n = 0; n<=articlesData.length-1; n++) {
          if(articlesData[n].category === cat){
              i += 1
          }
      }
      return i
  }


    return (
        <div>
        </div>
    )
 }

 export default Category