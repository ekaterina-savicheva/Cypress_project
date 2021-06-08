/// <reference types="Cypress" />

import { basePage } from "../../support/pages/basePage"
import { mobileReplenishment } from "../../support/pages/mobileReplenishment"
import { transfers } from "../../support/pages/transfers"

it('Replenishment of mobile phone number', () => {
    basePage.open('https://next.privat24.ua/mobile/?lang=en')

    mobileReplenishment.typePhoneNumber('686979712')
    basePage.typeAmount('1')
    basePage.typeDebitCardData('4552331448138217', '0524', '111')
    cy.wait(3000)
    basePage.typeDebitNameAndSurname('taras', 'shevchenko')
    cy.wait(3000)
    mobileReplenishment.submitPayment()
    
    mobileReplenishment.checkDebitCard('4552 **** **** 8217')
    mobileReplenishment.checkDebitAmount('1')
    mobileReplenishment.checkDebitComission('2')
})

it("Money transfer between foreign cards", () => {
    basePage.open('https://next.privat24.ua/money-transfer/card/?lang=en')
        
    basePage.typeDebitCardData('4552331448138217', '0524', '111')
    cy.wait(2000)
    basePage.typeDebitNameAndSurname('taras', 'shevchenko')
    transfers.typeReceiverCard('5309233034765085')
    cy.wait(2000)
    transfers.typeReceiverNameAndSurname('taras', 'shevchenko')
    basePage.typeAmount('300')
    transfers.typeComment('Cypress test')
    cy.wait(2000)
    transfers.submitTransfer()

    transfers.checkDebitAndReceiverCards('4552 3314 4813 8217', '5309 2330 3476 5085')
    transfers.checkDebitAmountAndTotalAmount('300 UAH', '386.60')
    transfers.checkDebitComission('86.60 UAH')
    transfers.checkComment('Cypress test')
})