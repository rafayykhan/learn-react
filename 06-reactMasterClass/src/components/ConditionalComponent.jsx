import Introduction from './Introduction';
import Welcome from './Welcome';

export default function ConditionalComponent() {
    let msg;
    const display = true

    //  by doing this it will eleiminate the need of two retuern statements and will make the code more readable and maintainable.
    if(display) {
        msg =<Welcome />
    } 
    else if (!display)
    {
        msg =  <Introduction />
    }
    return msg;
}