// Début du bloc de test principal : "Gestion des Produits"
describe('Gestion des Produits', () => {
  
    // Définition d'un produit de test que nous allons ajouter
    const produit = {
      nom: 'Produit Cypress',
      prix: 42.5
    };
  
    // Avant chaque test (it), on visite la page principale du frontend
    beforeEach(() => {
      cy.visit('http://localhost:5173'); 
    });
  
    // Premier test : vérifier que la liste des produits s'affiche
    it('Affiche la liste des produits', () => {
      cy.contains('Liste des produits'); // Vérifie que le titre est affiché
     // cy.get('.product-list ul li').should('exist'); // Vérifie qu'il y a au moins un produit dans la liste
    });
  
    // Deuxième test : simule l'ajout d'un nouveau produit via le formulaire
    it('Ajoute un nouveau produit', () => {
      // Remplit le champ "nom du produit"
      cy.get('input[placeholder="Nom du produit"]').type(produit.nom);
  
      // Remplit le champ "prix"
      cy.get('input[placeholder="Prix"]').type(produit.prix.toString());
  
      // Clique sur le bouton "Ajouter"
      cy.get('button[type="submit"]').click();
  
      // Vérifie que le produit ajouté est maintenant visible dans la liste
      cy.contains(produit.nom).should('exist');
      cy.contains(produit.prix).should('exist');
    });
  
  });
  