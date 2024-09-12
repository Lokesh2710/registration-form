import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a backend API call
    setResponse(`Registered successfully with name: ${name}`);
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
}

export default App;
