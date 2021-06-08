export class MobilePhoneReplenishment{
    
    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
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