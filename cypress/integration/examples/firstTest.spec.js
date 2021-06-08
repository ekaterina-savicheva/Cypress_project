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

it('Example sending GET request', () => {
    cy.request('https://next.privat24.ua')
        .then((response) =>{
            console.log(response)
        })
})

it('Example sending POST request - expect verification', () => {
    
    const requestBody = {
      action: "info",
      phone: "+380686979712",
      amount: 50,
      currency: "UAH",
      cardCvv: "111",
      card: "4552331448138217",
      cardExp: "0526",
      xref: "de708bb22ead7ae94ed6bb2b49cd1cf8",
      _: 1623151805575,
    };

    const headersData = {
      cookie:
        "_ga=GA1.2.213748086.1622551780; _gid=GA1.2.360991593.1623048614; pubkey=b6b6f6cec7a8842605fb1d9600aba291; _gat_gtag_UA_29683426_11=1; fp=46; lfp=6/1/2021, 4:49:53 PM; pa=1623151777245.6550.9060202477369632next.privat24.ua0.28033328406291247+1",
    };

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData
    })
        .then((response) =>{
            expect(response).to.have.property('status').to.equal(200)
            expect(response.body).to.have.property('status').to.equal('success')
            expect(response.body.data).to.have.property('amount').to.equal('50.0')
            //expect(response.body.data[3]).to.have.property('commission').to.equal('2.0')
            console.log(response)
        })
})

it.only('Example sending POST request - should verification', () => {
    
    const requestBody = {
      action: "info",
      phone: "+380686979712",
      amount: 50,
      currency: "UAH",
      cardCvv: "111",
      card: "4552331448138217",
      cardExp: "0526",
      xref: "3ac17fae13604abca1755e4000c5cca6",
      _: 1623155487803,
    };

    const headersData = {
      cookie:
        "_ga=GA1.2.213748086.1622551780; _gid=GA1.2.360991593.1623048614; _gat_gtag_UA_29683426_11=1; pubkey=759bbba9a0dcdc276288558d1588754b; fp=47; lfp=6/1/2021, 4:49:53 PM; pa=1623155461232.4840.7123291563680818next.privat24.ua0.8038641215695177+1",
    };

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData
    }).its('body').should('contain', {
        status: 'success'
    }).its('data').should('contain', {
        status: 'ok'
    })
})