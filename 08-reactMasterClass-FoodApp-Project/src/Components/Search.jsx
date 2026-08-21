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
    <div
      style={{
        display: "flex",
        gap: "12px",
        justifyContent: "center",
        marginBottom: "40px",
      }}
    >
      <input
        onChange={(e) => setData(e.target.value)}
        type="text"
        value={data}
        style={{
          width: "320px",
          padding: "12px 18px",
          fontSize: "16px",
          color: "#333",
          border: "1px solid #ddd",
          borderRadius: "999px",
          outline: "none",
        }}
      />
      <button
        onClick={(e) => handleClick(e)}
        style={{
          padding: "12px 26px",
          fontSize: "15px",
          fontWeight: "bold",
          color: "#fff",
          background: "#ff7043",
          border: "none",
          borderRadius: "999px",
          cursor: "pointer",
        }}
      >
        submit
      </button>
    </div>
  );
}
