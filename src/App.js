import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8070/bonjour/" + encodeURIComponent(name));
      const data = await response.json();
      setMessage(data.greeting || "Réponse reçue !");
    } catch (error) {
      setMessage("Erreur lors de la requête");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Entrez votre prénom</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Votre prénom"
          required
        />
        <button type="submit">Envoyer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;

