import { useState } from "react";

export default function Search() {
  const [data, setData] = useState("pizza");
  function handleClick(e) {
    e.preventDefault();
    console.log("clicked");
  }
  return (
    <div>
      <input
        onChange={(e) => setData(...data, e.target.value)}
        type="text"
        value={data}
      />
      <button onClick={(e) => handleClick(e)}>submit</button>
    </div>
  );
}
