/// <reference types="cypress" />

//Elements
const LOGIN_PAGE_TITLE = 'Testers Hotel'
const LOGIN_HEADER = 'h2'
const USERNAME_FIELD = ':nth-child(1) > input'
const PASSWORD_FIELD = ':nth-child(2) > input'
const LOGIN_BTN = '.btn'
const DASHBOARD_HEADER = 'h2'


//Functions/ Actions/ Methods
function checkLoginPageTitle(){
    cy.title().should("eq",LOGIN_PAGE_TITLE)
}

function performValidLogin(username,password,confirmationContent,dashboardConfirmationContent){
    cy.get(LOGIN_HEADER).should("contain",confirmationContent)
    cy.get(USERNAME_FIELD).type(username)
    cy.get(PASSWORD_FIELD).type(password)
    cy.get(LOGIN_BTN).click()
    cy.get(DASHBOARD_HEADER).should("contain",dashboardConfirmationContent)
    
}


//Exports
module.exports = {
    checkLoginPageTitle,
    performValidLogin
}