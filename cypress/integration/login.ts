
import {LoginPage} from '../pages/login_pages'

describe('All login tests', function(){
let loginPage = new LoginPage()

beforeEach(function(){
    loginPage.navigate('https://trytestingthis.netlify.app/')
})
it('login test' ,() =>{




// loginPage.navigate('https://trytestingthis.netlify.app/')
loginPage.loginWithValidCredentials('test','test')

// loginPage.enterUsername('test')
// loginPage.enterPassword('test')
// loginPage.clickLogin()

// cy.visit('https://trytestingthis.netlify.app/')
// cy.get('#uname').type('test')
// cy.get('#pwd').type('test')
// cy.get('[type="submit"').click()
// cy.contains('Login Successful')

})


it('login test - invalid creds', () => {
    // loginPage.navigate('https://trytestingthis.netlify.app/')
loginPage.loginWithInvalidCredentials('abc','123')


})

})