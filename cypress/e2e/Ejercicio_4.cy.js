// Ejercicio 4
describe("Yeison Alberto Ochoa Bautista", () => {
    it("click en el boton type", () => {
        cy.visit('https://example.cypress.io');

        cy.contains('type').click();
    });
});