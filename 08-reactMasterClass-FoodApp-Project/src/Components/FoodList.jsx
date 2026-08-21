import FoodItem from "./FoodItem";

export default function FoodList({dataList}) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        {dataList.map((data) => (
          < FoodItem data = {data}/>
        ))}
      </div>
    </>
  );
}
