/// <reference types="cypress" />

import {
    navigate,
    accountLogin,
    emptyCheckout,
    addCartItems,
    checkAddedItems,
    
  

  } from '../page-objects/base-page'

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})

    describe('Go Shopping', () => {
        it ('Navigates to the website', () => {
        navigate();
     
    })

    it('Allows existing user to login', () => {
        accountLogin();
       
    }) 
    it('Cannot checkout with an empty cart', () => {
        emptyCheckout();

    }) 

    it('A user can add items to cart', () => {
        addCartItems();

        }) 
        
    it('Verifies that items have been added to the cart', () => {
        checkAddedItems();


    }) 

})