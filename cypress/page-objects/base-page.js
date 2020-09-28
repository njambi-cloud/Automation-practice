/// <reference types="cypress" />

  export function navigate() {
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
  
  }

  export function wrongEmailFormat() {
    cy.get('#email_create').type('f.com{enter}');
    cy.get('#create_account_error').should('contain', 'Invalid email address.');
     
    }

  export function existingEmail() {
    cy.get('#email_create').type('christinemacharia@gmail.com{enter}');
    cy.get('#create_account_error')
    .should('contain', 'An account using this email address has already been registered. Please enter a valid password or request a new one.');

   
  }

    
    export function successfulEmail() {
      cy.get('#email_create').type('hownew@account.com{enter}');
      cy.get('#id_gender2').click();
      cy.get('#customer_firstname').type('Jane');
      cy.get('#customer_lastname').type('Doe');
      cy.get('#passwd').type('password');
      cy.get('#passwd').should('have.text', 'password');
      cy.get('#days').select('1');
      cy.get('#months').select('1');
      cy.get('#years').select('2000');
      cy.get('#newsletter').click();
      cy.get('#optin').click();
      cy.get('#firstname').should('have.value', 'Jane');
      cy.get('#lastname').should('have.value', 'Doe');
      cy.get('#company').type('My New Company');
      cy.get('#address1').type('Donna tella street');
      cy.get('#address2').type('Brookview road');
      cy.get('#city').type('New York');
      cy.get('#postcode').type('90210');
      cy.get('#id_country').select('United States');
      cy.get('#other').type('Belevue street house 27B');
      cy.get('#phone').type('+255722227811');
      cy.get('#phone_mobile').type('573900');
      cy.get('#alias').type('4th Street');
      cy.get('#id_state').select('Florida', {force:true});
      cy.get('#id_state').should('have.value', '9');
      cy.get('#submitAccount > span').click();
     
    }


    export function accountLogin() {
    cy.get('#email').type('shop@account.com');
    cy.get('#passwd').type('password');
    cy.get('#SubmitLogin > span').click();

    }

    export function emptyCheckout() {
    cy.get('[title="View my shopping cart"]').click();
    cy.get('.alert').should('have.text', 'Your shopping cart is empty.');

    }


    export function addCartItems() {
    cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click();
    cy.get(':nth-child(1) > .subcategory-image > .img > .replace-2x').click();
    cy.get('.product_img_link > .replace-2x').click();
    cy.get('.exclusive > span').click();
    cy.get('.button-medium > span').click();
    cy.get('.sf-menu > :nth-child(3) > a').click();
    cy.get('.product_img_link > .replace-2x').click();
    cy.get('.exclusive > span').click();
    cy.get('.button-medium > span').click();
    
    }

    export function checkAddedItems() {
    cy.get('#product_3_13_0_0 > .cart_product').should('be.visible');
    cy.get('#product_1_1_0_0 > .cart_product > a > img').should('be.visible');
    cy.get('.cart_navigation > .button > span').click();
   
   
  }
