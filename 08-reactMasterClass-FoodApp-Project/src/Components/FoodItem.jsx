export default function FoodItem({data}) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                padding: "20px",
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: "14px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
            }}
        >
            <img
                src={data.image}
                alt="food images"
                style={{
                    width: "100%",
                    height: "170px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    display: "block",
                    background: "#f4ece6",
                }}
            />
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
            <button
                style={{
                    marginTop: "auto",
                    padding: "10px 18px",
                    width: "100%",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#ff7043",
                    background: "transparent",
                    border: "2px solid #ff7043",
                    borderRadius: "999px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                }}
            >
                view recipe
            </button>
        </div>
    )
}
