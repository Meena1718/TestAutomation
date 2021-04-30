/// <reference types="cypress" />

//Element
const LOGOUT_BTN = '.user > .btn'
const VIEW_CLIENTS_BTN = '.blocks>:nth-child(2)>.btn'
const VIEW_ROOMS_BTN = ':nth-child(1) > .btn'

//Actions/ Functions/ Methods
function performLogout(confirmationContent){
  cy.get(LOGOUT_BTN).click()
  cy.contains(confirmationContent)

}
function viewClients(content){
  cy.get(VIEW_CLIENTS_BTN).click()
  cy.contains(content)
}

function viewRooms(content) {
cy.get(VIEW_ROOMS_BTN).click()
cy.contains(content)
}

//Export
 module.exports = {
     performLogout,
     viewClients,
     viewRooms
 }