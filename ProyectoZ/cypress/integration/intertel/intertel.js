import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

//login

Given('Entrar a la url', () => {
    cy.visit('/')
    cy.login()
})

When('Ingresar usuario', () => {
    cy.visit('/')
    cy.get("[id='Username']").type("teste").should("have.value", "teste");
})

When('Ingresar contraseña', () => {
    cy.get("[id='Password']").type("4iB3qJw2eX28Vvzb");
})

Then('Das click en el boton Entrar', () => {
    cy.get(".btn").click()
})

Then('Visualizar mensaje de usuario no registrado', () => {
    cy.get('.validation-summary-errors').contains('Usuario no registrado.')
})

//alta usuario

When('Dar click en el menu opciones', () => {
    cy.get("#navbarDropdown").click();
})

When('Dar click en el sub menu usuarios', () => {
    cy.get(".dropdown-menu > [href='/User/Index']").click();
})

Then('Dar click en el boton crear nuevo', () => {
    cy.get(".btn-primary").click()
})
Then('Llenar el formulario con los datos necesarios', () => {
    cy.get('#Name').type("Juan").should("have.value", "Juan");
    cy.get('#UserName').type("Juan12").should("have.value", "Juan12");
    cy.get('#Email').type("Juan12@gmail.com").should("have.value", "Juan12@gmail.com");
    cy.get('#PhoneNumber').type("778562668").should("have.value", "778562668");
    cy.get('#PasswordHash').type("Juan1220").should("have.value", "Juan1220");
    cy.get('#ConfirmPassword').type("Juan1220").should("have.value", "Juan1220");
    cy.get('#UserTypeId').select("Externo");
    cy.get('.dropdown > .btn').click();
    cy.get(':nth-child(1) > .dropdown-item').click()

})

Then('Dar click en el boton guardar', () => {
    cy.get('.btn-primary').click()
})
Then('Verificar que exista el usuario', () => {
    cy.get('.even > .sorting_1').should('be.exist')
})

//cambios usuario

When('Dar click en el boton editar', () => {
    cy.get('.even > :nth-child(6) > .btn-success').click();
})

Then('Modificar datos', () => {
    cy.get('#Name').clear();
    cy.get('#Name').type("JuanA").should("have.value", "JuanA");
    cy.get('#PhoneNumber').clear()
    cy.get('#PhoneNumber').type("778562558").should("have.value", "778562558");


})

//baja usuario

When('Dar click en el boton Eliminar', () => {
    cy.get('.even > :nth-child(6) > .btn-danger').click();
})

When('Validar que se quiere eliminar', () => {
    cy.get('.swal2-confirm').click();
})
Then('Verificar que no exista el usuario', () => {
    cy.get('.even > .sorting_1').should('not.exist')
})

//indicadores generales

When(/Verifica que la candidad de llamadas totales es igual a "(.*)"/, (cantidad) => {
    cy.get(':nth-child(1) > .card > .card-body > h1').contains(cantidad).should('be.visible')
})

When(/Verifica que el costo total sea de "(.*)"/, (cantidad) => {
    cy.get(':nth-child(2) > .card > .card-body > h1').contains(cantidad).should('be.visible')
})
Then('Verifica quienes son las personas que mas llaman', () => {
    for (let i = 0; i < 5; i++) {
        cy.get(`:nth-child(3) > .card > .list-group > :nth-child(${i + 1})`).invoke('text').then((text) => {
            console.log('persona' + i + ':', text)
        })
    }
})

Then('Verifica los lugares mas llamados', () => {
    for (let i = 0; i < 5; i++) {
        cy.get(`:nth-child(4) > .card > .list-group > :nth-child(${i + 1})`).invoke('text').then((text) => {
            console.log('Lugar' + i + ':', text)
        })
    }
})

//listado de celualres
Then('Dar click en el sub menu lista de celulares', () => {
    cy.get('[href="/CellLine/Index"]').click()

})
var total = 0;
Then('Validar la cantidad celulares registrados', (cantidad) => {
    
    for (var p = 1; p <= 26; p++) {
        for (var i = 1; i <= 10; i++) {

            cy.get(`:nth-child(${i})> .sorting_1`).invoke('text').then((text) => {
                console.log('cel' + i + ':', text)
            })

            if (i == 10) {
                cy.get('#line-table_next > .page-link').click()

                console.log('cel' + i + ':')
            }else if(p == 26){
                cy.get(`:nth-child(2)> .sorting_1`).should('not.exist')
                i=10;
            }
            total = total +1;   
        }
       
        if (p == 26) { 
          
        console.log('total:', total)
          
        }
        
    }
    cy.get('#line-table_info').invoke('text').then((text) => {
        console.log('Total Pagina:', text)
        console.log('total contador:', total)
    })
   
    
})

When(/Verifica que el costo total sea de "(.*)"/, (cantidad) => {
    cy.get(':nth-child(2) > .card > .card-body > h1').contains(cantidad).should('be.visible')
})
Then('Verifica quienes son las personas que mas llaman', () => {
    for (let i = 0; i < 5; i++) {
        cy.get(`:nth-child(3) > .card > .list-group > :nth-child(${i + 1})`).invoke('text').then((text) => {
            console.log('persona' + i + ':', text)
        })
    }
})

Then('Verifica los lugares mas llamados', () => {
    for (let i = 0; i < 5; i++) {
        cy.get(`:nth-child(4) > .card > .list-group > :nth-child(${i + 1})`).invoke('text').then((text) => {
            console.log('Lugar' + i + ':', text)
        })
    }
})





