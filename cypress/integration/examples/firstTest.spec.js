/// <reference types="Cypress" />

import { mobileReplenishment } from "../../support/pages/mobileReplenishment"
import { transfers } from "../../support/pages/transfers"

it('Replenishment of mobile phone number', () => {

    cy.visit('https://next.privat24.ua/mobile/?lang=en')

    mobileReplenishment.typePhoneNumber('686979712')
    mobileReplenishment.typeAmount('1')
    mobileReplenishment.typeDebitCardData('4552331448138217', '0524', '111')
    cy.wait(3000)
    mobileReplenishment.typeDebitName('taras', 'shevchenko')
    cy.wait(3000)
    mobileReplenishment.submitPayment()
    
    mobileReplenishment.checkDebitCard('4552 **** **** 8217')
    mobileReplenishment.checkDebitAmount('1')
    mobileReplenishment.checkDebitComission('2')
})

it.only("Money transfer between foreign cards", () => {
    cy.visit('https://next.privat24.ua/money-transfer/card/?lang=en')
        
    transfers.typeDebitCardData('4552331448138217', '0524', '111')
    cy.wait(2000)
    transfers.typeDebitNameAndSurname('taras', 'shevchenko')
    transfers.typeReceiverCard('5309233034765085')
    cy.wait(2000)
    transfers.typeReceiverNameAndSurname('taras', 'shevchenko')
    transfers.typeAmount('300')
    transfers.typeComment('Cypress test')
    cy.wait(2000)
    transfers.submitTransfer()

    transfers.checkDebitAndReceiverCards('4552 3314 4813 8217', '5309 2330 3476 5085')
    transfers.checkDebitAmountAndTotalAmount('300 UAH', '386.60')
    transfers.checkDebitComission('86.60 UAH')
    transfers.checkComment('Cypress test')
})