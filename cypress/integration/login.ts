import {LoginPage} from '../pages/login_pages'

describe('All login tests', function(){
let loginPage = new LoginPage()

beforeEach(function(){
    loginPage.navigate('https://trytestingthis.netlify.app/')
})
it('login test' ,() =>{

loginPage.loginWithValidCredentials('test','test')

})


it('login test - invalid creds', () => {
loginPage.loginWithInvalidCredentials('abc','123')


})

})