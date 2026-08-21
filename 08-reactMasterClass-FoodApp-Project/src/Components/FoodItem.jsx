export default function FoodItem({data}) {
    return (
        <div
            style={{
                padding: "20px",
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: "14px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
            }}
        >
            <h1
                key={data.id}
                style={{
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#2b2b2b",
                    lineHeight: 1.4,
                }}
            >{data.title}</h1>
        </div>
    )
}
