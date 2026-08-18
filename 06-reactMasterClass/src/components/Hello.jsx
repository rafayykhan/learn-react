function Hello(props) { // this is a functional component that takes in props as an argument and returns a JSX element
    // this makes the component reusable and allows us to pass in different values for the name and paragraph props when
    //  we render the component in the App component
    return (
        <div>
            <h1 className="heading">
                {props.name}
            </h1>
            <p>
                {props.paragraph}
            </p>
        </div>
    )
}

export default Hello