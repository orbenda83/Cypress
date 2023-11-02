describe('Google Maps', () => {
    it('should be able to zoom in', () => {
        cy.task('log', 'GMaps Start');
        cy.visit('https://www.google.com/maps');

        cy.get('#searchboxinput').then(() => {
            cy.task('log', 'Searching for חאן יונס');
            cy.get('#searchboxinput').type('חאן יונס');
            cy.get('#searchbox-searchbutton').click();
            cy.wait(1000);
            cy.task('log', 'Searching');
        });

        // Zoom In
        cy.task('log', 'GMaps Loaded');
        cy.get('canvas').trigger("wheel", { deltaY: -3500, bubbles: true});
        cy.wait(2000);
        cy.task('log', 'Zoomed In');
        cy.screenshot('Zoom_In');
        // Zoom Out
        cy.get('canvas').trigger("wheel", { deltaY: 3500, bubbles: true});
        cy.wait(2000);
        cy.task('log', 'Zoomed Out');
        cy.screenshot('Zoom_Out_1');
        cy.document().then(($element) => {
            cy.task('log', 'Look for popup 1');
            cy.log('Before Find 1');
            if($element.getElementsByClassName('HHAC1e').length){
                cy.task('log', 'Found popup 1');
                cy.log('.u7oTsd Found');
                cy.get('.u7oTsd').click();
                cy.wait(500);
            } else {
                cy.task('log', 'Did not find popup 1');
                cy.log('.u7oTsd NOT Found');
            }
        });
        cy.wait(2000);
        cy.document().then(($element) => {
            cy.task('log', 'Look for popup 2');
            cy.log('Before Find 2');
            if($element.getElementsByClassName('HHAC1e').length){
                cy.task('log', 'Found popup 2');
                cy.log('.u7oTsd Found');
                cy.get('.u7oTsd').click();
                cy.wait(500);
            } else {
                cy.task('logError', 'Did not find popup 2');
                cy.log('.u7oTsd NOT Found');
                // Cypress.runner.stop();
            }
        });

        // Zoom Out - force (popup in front)
        cy.get('canvas').trigger("wheel", { deltaY: 3500, bubbles: true, force: true });
        cy.wait(2000);
        cy.task('log', 'Zoomed out again');
        cy.screenshot('Zoom_Out_2');
        cy.wait(2000);
        cy.task('log', 'GMaps End. ;)');
    });
});