// @ts-nocheck

import SortingScreen from './SortingScreen.vue'

describe('<SortingScreen />', () => {
  beforeEach(() => {
    cy.intercept('https://jsonplaceholder.typicode.com/posts', [{ id: 1 }, { id: 2 }, { id: 3 }])
    cy.mount(SortingScreen)
  })

  it('test moving function', () => {
    cy.mount(SortingScreen)

    // moving down
    cy.get('.post:first-child button.post__move-down').click()
    cy.compareText('.post__content', 'Post 2, Post 1, Post 3')
    cy.get('.action').first().should('contain', 'Moved Post 1 from index 0 to index 1')

    // // moving up
    cy.get('.post:nth-child(3) button.post__move-up').click()
    cy.compareText('.post__content', 'Post 2, Post 3, Post 1')
    cy.get('.action').first().should('contain', 'Moved Post 3 from index 2 to index 1')
  })

  it('test time travel function', () => {
    cy.get('.post:nth-child(1) button.post__move-down').click()
    cy.get('.post:nth-child(3) button.post__move-up').click()

    cy.get('.time-travel-btn').first().click()
    cy.compareText('.post__content', 'Post 2, Post 1, Post 3')

    cy.get('.post:nth-child(3) button.post__move-up').click()
    cy.get('.time-travel-btn').last().click()
    cy.compareText('.post__content', 'Post 1, Post 2, Post 3')

    cy.get('.actions .list').should('contain', 'No actions yet')
  })
})
