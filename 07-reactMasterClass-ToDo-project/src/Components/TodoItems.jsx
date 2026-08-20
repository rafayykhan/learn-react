export default function TodoItems(props) {
    return (
        <h2
            key={props.index}
            style={{ // this is basically objects we are passing here 
                // so thats why the stylling name is little different from the css file and we are using camel case instead of kebab case
                // in simple words we are writhing jsx here for writ8ing the css
                
                fontSize: "16px",
                fontWeight: "normal",
                padding: "12px 14px",
                margin: 0, // the row (li) in Todo.jsx handles the spacing now,
                // so the h2 keeps no margin of its own and stays lined up with the button
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