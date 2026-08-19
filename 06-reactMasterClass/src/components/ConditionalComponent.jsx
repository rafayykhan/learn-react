import Introduction from './Introduction';
import Welcome from './Welcome';

export default function ConditionalComponent() {
    const display = true

    if(display) {
        return <Welcome />
    } 
    else if (!display)
    {
        return <Introduction />
    }
}