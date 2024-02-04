import React, { useState } from "react";

/*function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}*/

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  });

  function handleFirstNameChange(event) {
    setFormData({
      ...formData,
      firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    setFormData({
      ...formData,
      lastName: event.target.value,
    });
  }

  /*return (
    <form>
      <input
        type="text"
        onChange={handleFirstNameChange}
        value={formData.firstName}
      />
      <input
        type="text"
        onChange={handleLastNameChange}
        value={formData.lastName}
      />
    </form>
  );*/

  return (
    <form>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleLastNameChange}
      />
    </form>
  );

}

export default Form;
