import React, { useState } from "react";

function AddProductForm({ onAdd }) {
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { nom, prix: parseFloat(prix) };

    try {
      const response = await fetch("/api/produits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        const data = await response.json();
        onAdd(data);
        setNom("");
        setPrix("");
      } else {
        console.error("Erreur lors de l'ajout :", response.statusText);
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h2>Ajouter un produit</h2>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Nom du produit"
        required
      />
      <input
        type="number"
        step="0.01"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
        placeholder="Prix"
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddProductForm;
