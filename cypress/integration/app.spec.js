describe('Main Page', () => {
    it('showing and hiding loader', () => {
        cy.visit('http://localhost:3000');
        //cy.pause();
        cy.get('.btn-primary')
            .click()
            .should('be.disabled');
        cy.get('.btn-primary')
            .should('not.be.disabled');

        cy.get('.alert')
            .should(($div) => {
                expect($div).to.have.length(2)
                const firstAlert = $div[0];
                const className = firstAlert.className
                expect(className).to.match(/alert-success/);
                expect(firstAlert.innerText).to.match(/Email:\s.+/)
            });
    })

    it('show error alert for network error', () => {
        cy.server();
        cy.route({
            url: /randomuser/,
            status: 404,
            response: {}
        });
        cy.visit('http://localhost:3000');
        cy.get('.btn-primary')
            .click();
        
        cy.contains('Request failed with status code 404');
        cy.contains('Request failed');
        cy.contains('Resend');
    })
})
