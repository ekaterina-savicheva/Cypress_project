export class MobilePhoneReplenishment{
    
    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }

    typeDebitCardData(cardNumber, expDate, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
    }

    typeDebitName(firstName, secondName){
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(secondName)
    }

    submitPayment(){
        cy.get('[data-qa-node="submit"]')
            .click()
    }

    checkDebitCard(debitCard){
        cy.get('[data-qa-node="card"]')
            .should('have.text', debitCard)
    }

    checkDebitAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .should('have.text', amount)
    }

    checkDebitComission(comission){
        cy.get('span[data-qa-node="commission"]')
            .should('have.text', comission)
    }

}

export const mobileReplenishment = new MobilePhoneReplenishment();