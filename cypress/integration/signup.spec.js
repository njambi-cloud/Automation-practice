/// <reference types="cypress" />

import {
    navigate,
    existingEmail,
    wrongEmailFormat,
    successfulEmail,
  

  } from '../page-objects/base-page'

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;})

describe('Create Account', () => {
    beforeEach(() => {
      navigate()
     
    })

    it('Should not allow wrong email format', () => {
      wrongEmailFormat();
      
   })

    it('should not register an existing email address', () => {
        existingEmail();
        
    })

    it.only('Registers a valid email', () => {
        successfulEmail();
 

})

  

})


