import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";

function App() {
  const [dataList, setDataList] = useState([]); // to save the api data

  return (
    <>
      <div>
        <Search setDataList={setDataList} />
        <FoodList dataList = {dataList}/>
      </div>
    </>
  );
}

export default App;
