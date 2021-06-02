/// <reference types="Cypress" />

//C

it('Using Get and Find with Eq', () => {
    cy.visit('https://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq(0)
});

it.only('Using Get and Find with Eq', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/eq')
    cy.get('[class^="hidden"]').find('[href="#Syntax"]').click()
    //cy.get('div').find('nav').find('ul').find('li').find('a')
});