export class Transfers {

    typeDebitCardData(cardNumber, expDate, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
    }

    typeDebitNameAndSurname(firstName, secondName){
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(secondName)
    }

    typeReceiverCard(receiverCard){
        cy.get('[data-qa-node="numberreceiver"]')
            .type(receiverCard)
    }

    typeReceiverNameAndSurname(firstName, secondName){
        cy.get('[data-qa-node="firstNamereceiver"]')
            .type(firstName)
            .get('[data-qa-node="lastNamereceiver"]')
            .type(secondName)
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }

    typeComment(comment){
        cy.get('[data-qa-node="toggle-comment"]')
            .click()
            .get('[placeholder="Your comment"]')
            .type(comment)
    }

    submitTransfer(){
        cy.get('button[type="submit"]')
            .click()
    }

    checkDebitAndReceiverCards(debitCard, receiverCard){
        cy.get('[data-qa-node="payer-card"]')
            .should('have.text', debitCard)
            .get('[data-qa-node="receiver-card"]')
            .should('have.text', receiverCard)
    }

    checkDebitAmountAndTotalAmount(debitAmount, totalAmount){
        cy.get('[data-qa-node="payer-amount"]')
            .should('have.text', debitAmount)        
            .get('[data-qa-node="total"]')
            .find('b')
            .should('contain.text', totalAmount)
    }

    checkDebitComission(comission){
        cy.get('[data-qa-node="payer-currency"]')
            .should('have.text', comission)
    }

    checkComment(comment){
        cy.get('[data-qa-node="comment"]')
            .should('have.text', comment)
    }

}

export const transfers = new Transfers();