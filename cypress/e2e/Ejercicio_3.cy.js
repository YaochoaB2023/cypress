// Ejercicio 3
describe("Yeison Alberto Ochoa Bautista 31/07/2023", () => {
    it("buscando el contenido type", () => {
        cy.visit('https://example.cypress.io');

        cy.contains('type');
    });
});