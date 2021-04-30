/// <reference types="cypress" />

describe ("Login user", ()=> {
    it ("Login", () => {
        cy.visit ("http://localhost:3000")
        cy.get('h2').should ("contain", "Login")
        // We are at Login Page!
        cy.log('At Login Page')
        cy.percySnapshot('login-page')


        cy.get(':nth-child(1) > input').type ("tester01")
        cy.get(':nth-child(2) > input').type ("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
        cy.get('.btn').click()
        cy.get('.username').should ("contain","Welcome tester01!")
        cy.wait(3000)
        //We are at dashboard page
        cy.log('At dashboard page!')
        cy.percySnapshot('dashboard-page')
        

    })
})



