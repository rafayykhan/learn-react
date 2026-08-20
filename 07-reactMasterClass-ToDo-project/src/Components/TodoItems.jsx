export default function TodoItems(props) {
    return <h2 key={props.index}> {props.item}</h2>;
}