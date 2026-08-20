export default function Header() {
    return (
        <div
            style={{
                maxWidth: "420px",
                margin: "50px auto 0",
                fontFamily: "sans-serif",
                textAlign: "center",
            }}
        >
            <h1
                style={{
                    fontSize: "32px",
                    color: "#4f46e5",
                    margin: 0,
                    paddingBottom: "12px",
                    borderBottom: "2px solid #e5e7eb",
                }}
            >
                To Do List
            </h1>
        </div>
    )
}
