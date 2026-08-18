function Fruits() {
    // const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    const fruits  = [
        {name: 'Apple', price: 1.2, emoji: '🍎'},
        {name: 'Banana', price: 0.5, emoji: '🍌'},
        {name: 'Cherry', price: 2.0, emoji: '🍒'},
        {name: 'Date', price: 3.0, emoji: '🌴'},
        {name: 'Elderberry', price: 1.5, emoji: '🍇'}
    ]  

    //  this is an array if objects 
    return (

    <div>   
        {/* this will do like loos over the fruits array and for each fruit in the 
         array it will return a h1 element with the fruit name in it. */}
        {/* callback function every returns every single fruit object we have */}
        <ul>
            {fruits.map(fruit => (
                <li key = {fruit.name}>
                    {fruit.name} - ${fruit.price} {fruit.emoji}
                </li>
            ))}
        </ul> 
    </div>
)

}
 

export default Fruits