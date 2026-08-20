import { useState } from "react";

export default function Form() {
  const [inputFormName, setInputFormName] = useState({
    firstName: "",
    lastName: "",
  });

  // function handleChange(e) {
  //     setInputFormName(firstName.target.value)

  // }
  function handleSubmition(e) {
    e.preventDefault(); // so this will prevent the page from reloading when we submit the form and it will
    //  allow us to handle the form submission in our own way.
    console.log(inputFormName);
  }

  return (
    <>
      <h1>THIS IS THE FORM!</h1>
      <div>
        <form>
          {" "}
          {/* here onChange is used to handle the change event on the input field */}
          <input
            onChange={(e) =>
              setInputFormName({ ...inputFormName, firstName: e.target.value })
            }
            type="text"
            value={inputFormName.firstName}
          />
          first name
          <input
            onChange={(e) =>
              setInputFormName({ ...inputFormName, lastName: e.target.value })
            }
            type="text"
            value={inputFormName.lastName}
          />
          last name

          <button onClick={(e)=>handleSubmition(e)}>submit</button>
        </form>
      </div>
    </>
  );
}
