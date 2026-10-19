/// <reference types="cypress" />

describe('La connexion', () => {
  it('refuse un mauvais mot de passe, puis accepte emilys et emilyspass', () => {
    cy.visit('/login');
    cy.get('#username').type('emilys');
    cy.get('#password').type('mauvais');
    cy.contains('button', 'Se connecter').click();
    cy.contains('Identifiant ou mot de passe incorrect.');
    cy.url().should('include', '/login');

    cy.get('#password').clear().type('emilyspass');
    cy.contains('button', 'Se connecter').click();
    cy.url().should('include', '/account');
    cy.contains('Bonjour Emily Johnson'); // seul un login réussi affiche ce nom
  });
});
