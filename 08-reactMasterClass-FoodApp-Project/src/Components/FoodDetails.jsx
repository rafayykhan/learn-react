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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
        background: "#fff",
        border: "1px solid #eee",
        borderRadius: "14px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "24px",
            fontWeight: 600,
            color: "#2b2b2b",
            lineHeight: 1.4,
          }}
        >
          {foodData.title}
        </h1>
        <img
          src={foodData.image}
          alt=""
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover",
            borderRadius: "10px",
            display: "block",
            background: "#f4ece6",
          }}
        />
        <span
          style={{
            padding: "6px 14px",
            fontSize: "13px",
            color: "#ff7043",
            background: "transparent",
            border: "2px solid #ff7043",
            borderRadius: "999px",
          }}
        >
          <strong>{foodData.readyInMinutes} Minutes</strong>
        </span>
        <span
          style={{
            padding: "6px 14px",
            fontSize: "13px",
            fontWeight: "bold",
            color: "#ff7043",
            background: "transparent",
            border: "2px solid #ff7043",
            borderRadius: "999px",
          }}
        >
          {foodData.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
        </span>
        <span
          style={{
            padding: "6px 14px",
            fontSize: "13px",
            color: "#ff7043",
            background: "transparent",
            border: "2px solid #ff7043",
            borderRadius: "999px",
          }}
        >
          {" "}
          <strong>Serves {foodData.servings}</strong>
        </span>
      </div>
      <div
        style={{
          borderTop: "1px solid #eee",
          paddingTop: "20px",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: "bold",
            letterSpacing: "1px",
            color: "#2b2b2b",
          }}
        >
          INSTRUCTIONS
          {isLoading ? (
            <p
              style={{
                margin: "14px 0 0",
                fontSize: "15px",
                fontWeight: 400,
                color: "#888",
              }}
            >
              Loading...
            </p>
          ) : (
            foodData.analyzedInstructions?.[0]?.steps?.map((step) => (
              <li
                key={step.number}
                style={{
                  marginTop: "12px",
                  marginLeft: "18px",
                  fontSize: "15px",
                  fontWeight: 400,
                  letterSpacing: "normal",
                  color: "#555",
                  lineHeight: 1.6,
                }}
              >
                {step.step}
              </li>
            ))
          )}
        </h2>
      </div>
      {/* {foodId} */}
    </div>
  );
}
