/// <reference types="cypress"   />

import * as loginPage from '../pages/loginPage'
import * as dashboardPage from '../pages/dashboardPage'
import * as clientsPage from '../pages/clientsPage'
import * as createNewClient from '../pages/create-new-client'
import * as roomsPage from '../pages/roomsPage'
import * as createNewRoom from '../pages/create-new-room'


var faker = require('faker');
let randomName = faker.name.findName();
let randomMail = faker.internet.email();
let randomPhone = faker.phone.phoneNumber();
let randomRoomNumber = faker.datatype.number();
let randomFloor = faker.datatype.number();
let randomPrice = faker.datatype.number();





describe('Test suite with Page-objects',() =>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
        loginPage.checkLoginPageTitle()
        loginPage.performValidLogin("tester01","GteteqbQQgSr88SwNExUQv2ydb7xuf8c","Login","Tester Hotel Overview")
    });

    it("login and logout",()=> {
        dashboardPage.performLogout("Login")
    });

    it.only("Create client and verify",()=> {
        dashboardPage.viewClients("Clients")
        clientsPage.createClient("New Client")
        createNewClient.createNewClient(randomName,randomMail,randomPhone,"Clients")
        clientsPage.verifyLastClient(randomName,randomMail,randomPhone)
    });

    it.only("Delete last client",()=> {
        dashboardPage.viewClients("Clients")
        clientsPage.deleteLastClient()    
    });

    it.only("Create room",()=> {
        dashboardPage.viewRooms("Rooms")
        roomsPage.createRoom("New Room")
        createNewRoom.createNewRoom('double',randomRoomNumber,randomFloor,randomPrice,'balcony', 'ensuite','Rooms')
    })

    it.only("Verify new room created",()=> {
        dashboardPage.viewRooms("Rooms")
        roomsPage.verifyNewRoomCreated('double',randomRoomNumber,randomFloor,randomPrice,'balcony', 'ensuite')

    })

    it.only("Delete last room",()=> {
        dashboardPage.viewRooms("Rooms")
        roomsPage.deleteLastRoom()
    })

    it.only("Input negative values",()=> {
        dashboardPage.viewRooms("Rooms")
        roomsPage.createRoom("New Room")
        createNewRoom.inputNegativeValues('Double','-104','-3','-1500kr','Balcony','Price must be greater than 0',randomPrice,'Rooms')
    })
    afterEach(()=> {
        dashboardPage.performLogout("Login")

    });


});