import { useEffect, useState } from "react"

export default function FoodDetails({foodId}) {
    const [foodData, setFoodData] = useState({})
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "645338d003c7421bb29ea0a053dfafda"

    useEffect(()=>{
        async function fetchFood(){
          const response = await fetch(`${URL}?apiKey=${API_KEY}` )
          const responseData = await response.json();
        //   setDataList(responseData.results ?? [])
            setFoodData(responseData)
        }
        fetchFood()
      }, [foodId])

    return(
        <div>
            Food Details
            {foodId} 
            {foodData.title}
            <img src={foodData.image} alt="" />
        </div>
    )
}