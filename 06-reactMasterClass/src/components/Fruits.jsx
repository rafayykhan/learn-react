function Fruits() {
    // const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    const fruits  = [
        {name: 'Apple', price: 1, emoji: '🍎', soldout: false},
        {name: 'Banana', price: 2, emoji: '🍌', soldout: true},
        {name: 'Cherry', price: 5, emoji: '🍒', soldout: true},
        {name: 'Date', price: 6, emoji: '🌴', soldout: false},
        {name: 'Elderberry', price: 7, emoji: '🍇', soldout: true}
    ]  

    //  this is an array if objects 
    return (

    <div>   
        {/* this will do like loos over the fruits array and for each fruit in the 
         array it will return a h1 element with the fruit name in it. */}
        {/* callback function every returns every single fruit object we have */}
        <ul>
            {/* only show fruits that cost more than 5 */}
            {fruits
                // .filter(fruit => fruit.soldout === false)
                .map(fruit => (
                    <li key={fruit.name}>
                        {fruit.name} - ${fruit.price} {fruit.emoji} {fruit.soldout ? 'Sold Out' : 'Available'}
                    </li>
                ))}
        </ul> 
    </div>
)

}
 

export default Fruits