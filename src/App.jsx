import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };

  const isDisabled = !firstName.trim() || !lastName.trim();

  return (
    <>
      <div >
        <h1>Full Name Display</h1>

        <form onSubmit={handleSubmit}>
          <div >
            <label htmlFor="firstName">First Name :</label>
            <input id="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
            required />
          </div>

          <div >
            <label htmlFor="lastName">Last Name :</label>
            <input id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}
            required />
          </div>
          <button type="submit" disabled={isDisabled}>Submit</button>

          {fullName && (<p>Full Name : {fullName}</p>)}
        </form>
      </div>
    </>
  );
}

export default App;
