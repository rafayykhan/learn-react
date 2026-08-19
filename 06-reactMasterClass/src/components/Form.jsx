import { useState } from "react"

export default function Form() {

    const [inputFormName, setInputFormName] = useState({firstName: "", lastName: ""});

    function handleChange(e) {
        setInputFormName(e.target.value)
    }

    return (
        <>
            <h1>
                THIS IS THE FORM!
            </h1>
            <div>
                <form> <input onChange={(e) => handleChange(e)} type="text" value = {inputFormName.firstName} />first name</form>
                <br />
                <form> <input onChange={(e) => handleChange(e)} type="text" value = {inputFormName.lastName} />last name</form>
            </div>
        </>
    )
}