/// <reference types = "cypress"  />

//Elements
const CATEGORY_FIELD = ':nth-child(1) > select'
const NUMBER_FIELD = ':nth-child(2) > input'
const FLOOR_FIELD = ':nth-child(3) > input'
const AVAILABLE_FIELD = '.checkbox'
const PRICE_FIELD = ':nth-child(5) > input'
const FEATURES_FIELD = ':nth-child(6) > select'
const SAVE_BTN = '.blue'

// Functions
function createNewRoom (category,number,floor,price,features1,features2,content){
    cy.get(CATEGORY_FIELD).select(category)
    cy.get(NUMBER_FIELD).type(number)
    cy.get(FLOOR_FIELD).type(floor)
    cy.get(AVAILABLE_FIELD).click()
    cy.get(PRICE_FIELD).type(price)
    cy.get(FEATURES_FIELD).select([features1,features2])
    cy.get(SAVE_BTN).click()
    cy.contains(content)

}
function inputNegativeValues(category,number,floor,price,features,errorContent,positivePrice,content){
    cy.get(CATEGORY_FIELD).select(category)
    cy.get(NUMBER_FIELD).type(number)
    cy.get(FLOOR_FIELD).type(floor)
    cy.get(AVAILABLE_FIELD).click()
    cy.get(PRICE_FIELD).type(price)
    cy.get(FEATURES_FIELD).select(features)
    cy.get(SAVE_BTN).click()
    cy.contains(errorContent)
    cy.get(PRICE_FIELD).clear().type(positivePrice)
    cy.get(SAVE_BTN).click()
    cy.contains(content)

}

//Exports
module.exports = {
    createNewRoom,
    inputNegativeValues
}
