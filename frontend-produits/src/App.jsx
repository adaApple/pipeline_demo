import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";

function App() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    fetch("/api/produits")
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur HTTP: ${res.status}`);
        return res.json();
      })
      .then((data) => setProduits(data))
      .catch((err) => console.error("Erreur chargement produits :", err));
  }, []);

  const addProduit = (produit) => {
    setProduits([...produits, produit]);
  };

  return (
    <div className="App" style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>Gestion des Produits</h1>
      <AddProductForm onAdd={addProduit} />
      <ProductList produits={produits} />
    </div>
  );
}

export default App;
