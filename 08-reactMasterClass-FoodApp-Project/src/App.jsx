import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Container from "./Components/Container";
function App() {
  const [dataList, setDataList] = useState([]); // to save the api data

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
          <FoodList dataList={dataList} />
        </Container>
      </div>
    </>
  );
}

export default App;
