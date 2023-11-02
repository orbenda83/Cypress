let width; 
let height; 

describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io")
  })
})

describe("home page", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io")
  })
  
  it("the h1 contains the correct text", () => {  
    cy.get("h1").contains("Kitchen Sink")
  })

  it("type page actions", () => {  
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('slow.typing@email.com', { delay: 100 }).should('have.value', 'slow.typing@email.com')
    cy.get('.action-disabled')
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .type('disabled error checking', { force: true })
      .should('have.value', 'disabled error checking')

    cy.get('.action-focus').focus()
      .should('have.class', 'focus')
      .prev().should('have.attr', 'style', 'color: orange;')

    cy.get('.action-clear').type('Clear this text')
      .should('have.value', 'Clear this text')
      .clear()
      .should('have.value', '')
  })

  it("clicking", () => {
    cy.contains('type').click()
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible')

    //cy.get('#action-canvas').rightclick(512, 384, { force: true });
    cy.get('#action-canvas').click(512, 384, { force: true });
  })

  it('finds list items', () => {
    cy.wait(1000)
  });

  it('click', () => {
    cy.contains('get').click()
    cy.get('[data-cy=submit]').click()
    // cy.xpath('//ul[@class="todo-list"]//li').should('have.length', 3);
  });

  it('windows options', () => {
    let windowInnerWidth;

    cy.window().then((win) => {
      // Access and store the `innerWidth` property in the variable
      width = win.innerWidth;
      cy.log(win.innerWidth)
      height = win.innerHeight;
      windowInnerWidth = win.innerWidth;
    });

    cy.log('Width: ' + width)
    cy.log('Height: ' + height)
    cy.log('Window inner width: ' + windowInnerWidth);
  })

  describe('Get window innerWidth into a variable', () => {
    it('should get the window innerWidth into a variable', () => {
      cy.viewport(1024, 768);

      // Get the window innerWidth
      let windowInnerWidth;
      
      cy.window().then((win) => {
        windowInnerWidth = win.innerWidth;
        cy.log('win.innerWidth is: ' + windowInnerWidth);
      })
      cy.log("windowInnerWidth => " + windowInnerWidth);
  
      // // Store the window innerWidth in a variable
      // let windowInnerWidthVariable = windowInnerWidth;
  
      // // Assert that the window innerWidth variable is equal to the window innerWidth
      // //cy.expect(windowInnerWidthVariable).to.equal(windowInnerWidth);
  
      // // Print the window innerWidth
      // cy.log("windowInnerWidthVariable => " + windowInnerWidthVariable);

      //cy.get('#action-canvas').rightclick(512, 384, { force: true });
    });
  });
})