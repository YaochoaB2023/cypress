// 1 okay, run the spec
// describe('test by yeison', () => {
//   it('should visit', () => {
//     cy.visit('/')
//   })
// })

// 2 my first test
// describe('test by yeison', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

// 3 mi primera prueba fallida
// describe('test by yeison',() => {
//   it('does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })

// 4 visita una pagina 
// describe('test by yeison', () => {
//   it('visits the kitchen sink', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// 5 consulta de un elemento
// describe('test by yeison ochoa', () =>{
//   it('find the content "type"', () =>{
//     cy.visit('https://example.cypress.io')

//     cy.contains('type')
//   })
// })

// 6 hacer click en un elemento
// describe('test by yeison ochoa', () =>{
//   it('click the link "type"', () =>{
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()
//   })
// })

// 7 hacer una afirmacion
// describe('test by yeison ochoa', () =>{
//   it('clicking "type" navigate to a new url', () => {
//     cy.visit('https://example.cypress.io')
//     cy.contains('type').click()
//     cy.url().should('include', '/commands/actions')
//   })
// })

// 8 agrega mas comandos y aserciones
// describe('test by yeison ochoa', () => {
//   it('gets, types and asserts', () => {
//     cy.visit('https://example.cypress.io')
//     cy.contains('type').click()
//     cy.url().should('include', '/commands/actions')
//     cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')  
//   })
// })