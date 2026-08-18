function Destructuring(props) {
    // its a javascript concept that allows us to extract values from objects and arrays and assign them to variables in a more concise way
    // props are immutable.
    // const { name, paragraph, seatNumbers, obj } = props; // destructuring the props object to extract the name and paragraph properties
    return (
        <div>
            {/* <h1>{name}</h1>
            <p>{paragraph} {seatNumbers.join(', ')}</p> */}
            <p>{props.obj.name} {props.obj.paragraph} {props.obj.seatNumbers.join(', ')}
            </p>
            {/* <h1>{props.obj.name}</h1> */}

        </div>
    )
}

export default Destructuring