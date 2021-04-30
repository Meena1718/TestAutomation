/// <reference types = "cypress"  />

//Elements
const CREATE_ROOM_BTN = 'h2 > .btn'
const ROOM_LIST = '.rooms'
const THREE_DOTS_BTN = '.action > img'
const DELETE_BTN = '.menu > :nth-child(2)'




//functions
function createRoom (content){
    cy.get(CREATE_ROOM_BTN).click()
    cy.contains(content)
    
}
function verifyNewRoomCreated (category,number,floor,price,features1,features2) {
    cy.get(ROOM_LIST).last()
    .should("contain", category)
    .and("contain", number)
    .and("contain",floor)
    .and("contain",price)
    .and("contain",features1)
    .and("contain",features2)
}

function deleteLastRoom(){
    cy.get(THREE_DOTS_BTN).last().click()
    cy.get(DELETE_BTN).click()
}



//Exports
module.exports = {
   createRoom,
   verifyNewRoomCreated,
   deleteLastRoom
}
