import React from "react";

function ProductList({ produits }) {
  return (
    <div>
      <h2>Liste des produits</h2>
      {produits.length === 0 ? (
        <p>Aucun produit disponible.</p>
      ) : (
        <ul>
          {produits.map((produit) => (
            <li key={produit.id}>
              <strong>{produit.nom}</strong> — {produit.prix} €
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
