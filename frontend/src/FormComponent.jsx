import React, { useState } from "react";
import axios from "axios";

export default function FormComponent() {
  const [name, setName] = useState('');                 //useState = fonct° react pour garder des valeurs en mémoire = initialisat° de vars
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {                                           //fonct° lorsque clic sur bouton Submit
    e.preventDefault();                                                         //empêche navigateur de recharger la page
    try {                                                                       //envoi des données à FastApi : 
      const res = await axios.post('http://localhost:8000/form', { name });     //envoi requête Post à URL du backend FastAPI
      setResponse(res.data.message);
    } catch (err) {
      setResponse('An error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
      {response && <p>{response}</p>}
    </form>
  );
}
