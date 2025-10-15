import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailValid = /\S+@\S+\.\S+/.test(email);

    if (!emailValid) {
      setError("Invalid email address");
      return;
    } else {
      setError("");
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    alert("Form submitted!");
  };
  // add this function
const handleEmailBlur = () => {
  if (!/\S+@\S+\.\S+/.test(email)) {
    setError("Invalid email address");
  } else {
    setError("");
  }
};


  const formValid = /\S+@\S+\.\S+/.test(email) && password.length >= 6;

  return (
    <div style={{ margin: "50px" }}>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" disabled={!formValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;