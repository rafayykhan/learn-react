import FoodItem from "./FoodItem";

export default function FoodList({dataList}) {
  return (
    <>
      <div>
        {dataList.map((data) => (
          < FoodItem data = {data}/>
        ))}
      </div>
    </>
  );
}
