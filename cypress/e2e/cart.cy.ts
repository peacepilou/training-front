/// <reference types="cypress" />

describe('Le panier', () => {
  it('additionne les produits ajoutés depuis le catalogue', () => {
    cy.visit('/');
    cy.contains('app-product-card', 'Essence Mascara Lash Princess').find('button').click().click();
    cy.contains('app-product-card', 'Dolce Shine Eau de').find('button').click();
    cy.get('nav a[href="/cart"]').click();
    cy.url().should('include', '/cart');
    cy.contains('2 × 9.99 € = 19.98 €');
    cy.contains('Total : 89.97 €');
  });

  it('refuse de commander un panier vide', () => {
    cy.visit('/cart');
    cy.contains('button', 'Commander').click();
    cy.contains('Commande refusée : ton panier est vide.');
  });
});
