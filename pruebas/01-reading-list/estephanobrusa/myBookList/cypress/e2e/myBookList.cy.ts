describe('My Book List', () => {
    it('fontpage is visible', () => {
        cy.visit('http://localhost:5173/');
        cy.contains('13 libros disponibles');

        cy.get(':nth-child(1) > img').click();
        cy.get(':nth-child(2) > .sc-dkzCjb').should('not.have.attr', 'src')
    });
});