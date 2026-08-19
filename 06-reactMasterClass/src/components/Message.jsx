export default function Message() {
    function handleClick() {
        console.log("Button clicked!")
    }
    return (
        <div>
            {/* this is the click event  */}
            <button onClick = {handleClick}
            >
                click here to see the message
            </button>
        </div>
    )
}