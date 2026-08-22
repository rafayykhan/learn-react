import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [foodData, setFoodData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "645338d003c7421bb29ea0a053dfafda";

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const responseData = await response.json();
      //   setDataList(responseData.results ?? [])
      setFoodData(responseData);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div>
        <h1>{foodData.title}</h1>
        <img src={foodData.image} alt="" />
        <span>
          <strong>{foodData.readyInMinutes} Minutes</strong>
        </span>
        <span>{foodData.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</span>
        <span>
          {" "}
          <strong>Serves {foodData.servings}</strong>
        </span>
      </div>
      <div>
        <h2>
          INSTRUCTIONS
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            foodData.analyzedInstructions?.[0]?.steps?.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))
          )}
        </h2>
      </div>
      {/* {foodId} */}
    </div>
  );
}
