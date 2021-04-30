///<reference types = "cypress" />

//Elements
const CREATE_CLIENT_BTN ='h2 > .btn'
const CLIENT_LIST = '.client'
const THREE_DOTS_BTN = '.action > img'
const DELETE_BTN = '.menu > :nth-child(2)'

//Functions
function createClient (content){
  cy.get(CREATE_CLIENT_BTN).click()
  cy.contains(content)
}

function verifyLastClient(name, mail, phone){
    cy.get(CLIENT_LIST).last()
    .should("contain", name)
    .and("contain", mail)
    .and("contain", phone)
}

function deleteLastClient(){
  cy.get(THREE_DOTS_BTN).last().click()
  cy.get(DELETE_BTN).click()
}

  //Exports
    module.exports = {
        createClient,
        verifyLastClient,
        deleteLastClient
    }