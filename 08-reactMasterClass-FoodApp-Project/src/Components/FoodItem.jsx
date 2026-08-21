export default function FoodItem({data}) {
    return (
        <div>
            <h1 key={data.id}>{data.title}</h1>
        </div>
    )
}