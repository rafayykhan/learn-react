import { useState, useEffect } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "645338d003c7421bb29ea0a053dfafda"

export default function Search({ setDataList }) {
  const [data, setData] = useState("pizza");

  // useEffect(()=>{}, []) syntax

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch(`${URL}?query=${data}&apiKey=${API_KEY}` )
      const responseData = await response.json();
      setDataList(responseData.results ?? [])
    }
    fetchData()
  }, [data])

  function handleClick(e) {
    e.preventDefault();
    console.log("clicked");
  }
  // useEffect hook allows us to sync the component with the external system (API)
  // when API fetches the data the react application ensures that the data 
  // updates in the real time 

  // react---> comunicates ---> real data
  return (
    <div>
      <input
        onChange={(e) => setData(e.target.value)}
        type="text"
        value={data}
      />
      <button onClick={(e) => handleClick(e)}>submit</button>
    </div>
  );
}
