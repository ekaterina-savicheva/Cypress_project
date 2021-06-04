/// <reference types="Cypress" />

//type

it('type', () =>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="phone-number"]')
        .type(123456789)        
})

it('focus', () =>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .focus()        
})

it('clear', () =>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="amount"]')
        .type(123456789)
        .wait(2000)
        .clear()        
})

it('submit', () =>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('form[method="post"]')
        .submit()    
})

it('click', () =>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-value="manual"]')
        .click()    
})

it('check', () =>{
    cy.visit('https://www.facebook.com/reg/')
        .get('input[value="2"]')
        .check()      
})

it('select', () =>{
    cy.visit('https://www.facebook.com/reg/')
        .get('#day')
        .select('17')
        .get('#month')
        .select('сен')    
        .get('#year')
        .select('1994')          
})

it('scroll', () =>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
        .get('[data-qa-node="lang"]')
        .scrollIntoView()    
})

it.only('trigger', () =>{
    cy.visit('https://next.privat24.ua/?lang=en')
        .contains('Services')
        .trigger('mouseover')    
})