function Destructuring(props) {
    // its a javascript concept that allows us to extract values from objects and arrays and assign them to variables in a more concise way
    const { name, paragraph } = props; // destructuring the props object to extract the name and paragraph properties
    return (
        <div>
            <h1>{name}</h1>
            <p>{paragraph}</p>
        </div>
    )
}

export default Destructuring