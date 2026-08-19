import { useState } from "react"

export default function Form() {

    const [inputFormName, setInputFormName] = useState({firstName: "", lastName: ""});

    // function handleChange(e) {
    //     setInputFormName(firstName.target.value)

    // }

    return (
        <>
            <h1>
                THIS IS THE FORM!
            </h1>
            <div>
                <form> <input onChange={(e) => setInputFormName({firstName: e.target.value})} type="text" value = {inputFormName.firstName} />first name</form>
                <br />
                <form> <input onChange={(e) => setInputFormName({lastName: e.target.value})} type="text" value = {inputFormName.lastName} />last name</form>
            </div>
        </>
    )
}