import React, { useState } from 'react';
   import axios from 'axios';
   import './App.css';

   function App() {
     const [name, setName] = useState('');
     const [response, setResponse] = useState('');

     const handleSubmit = (e) => {
       e.preventDefault();

       axios.post('http://localhost:8080/register-form/add', { name })
         .then(res => {
           setResponse(`Registration successful: ${res.data}`);
         })
         .catch(err => {
          setResponse(`Registration failed: ${err}`);
           console.error(err);
         });
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
