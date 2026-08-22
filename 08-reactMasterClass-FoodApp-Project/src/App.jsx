import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetails from "./Components/FoodDetails";

function App() {
  const [dataList, setDataList] = useState([]); // to save the api data
  const [foodId, setFoodId] = useState("716300")
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          boxSizing: "border-box",
          padding: "50px 24px",
          background: "#fdf6f0",
          fontFamily: "'Segoe UI', system-ui, sans-serif",
        }}
      >
        <Search setDataList={setDataList} />

        <Container>
          <InnerContainer>
            <FoodList setFoodId= {setFoodId} dataList={dataList} />
          </InnerContainer>
          <InnerContainer>
            <FoodDetails foodId = {foodId} />
          </InnerContainer>
        </Container>
      </div>
    </>
  );
}

export default App;
