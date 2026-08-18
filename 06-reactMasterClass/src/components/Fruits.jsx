function Fruits() {
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    return (

    <div>   
        {/* this will do like loos over the fruits array and for each fruit in the 
         array it will return a h1 element with the fruit name in it. */}
        <ul>
            {fruits.map(fruit => (
                <li key = {fruit}>
                    {fruit}
                </li>
            ))}
        </ul>
    </div>
)

}


export default Fruits