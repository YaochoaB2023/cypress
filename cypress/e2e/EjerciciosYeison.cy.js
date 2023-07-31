// Ejercicio 15
describe('test by yeison ochoa', () => {
  it('interaccion conun formulario de busqueda', () => {
    cy.visit('https://www.mercadolibre.com.co/');

    cy.get('.nav-search-input').type('computador').should('have.value', 'computador').get('.nav-search-btn').click();
  });
});