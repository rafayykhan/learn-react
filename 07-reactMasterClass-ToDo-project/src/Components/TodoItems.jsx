export default function TodoItems(props) {
    return (
        <h2
            key={props.index}
            style={{
                fontSize: "16px",
                fontWeight: "normal",
                padding: "12px 14px",
                marginBottom: "8px",
                backgroundColor: "#f3f4f6",
                borderLeft: "4px solid #4f46e5",
                borderRadius: "6px",
            }}
        >
            {" "}
            {props.item}
        </h2>
    );
}