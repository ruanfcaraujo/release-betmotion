export const REGISTRATION_FORM = {
    fullNameField: '#ca-name',
    userNameField: '#ca-username',
    passwordField: '#ca-password',
    emailField: '#ca-email',
    birthDaySelect: '.input-day > .cb-container > .cb-combobox-container > .cb-combobox',
    birthMonthSelect: '.input-month > .cb-container > .cb-combobox-container > .cb-combobox',
    birthYearSelect: '.input-year > .cb-container > .cb-combobox-container > .cb-combobox',
    cellPhoneField: '.phone',
    currencyBrlField: '.ng-invalid > .cb-container > .cb-combobox-container > .cb-combobox',
    createAaccountButton: 'button[type="submit"]',

}
export const LOGIN = {
    toEnterButton: '.headertop-notauth > app-button > .btn',
    playerSuccessfullyAuthenticated: '.headertop-auth-user-name',
    loginUsernameField: '#username',
    loginPasswordField: '#password',
    loginEnterButton: '.w-100 > .btn > span'

}
export const LOGOFF = {
    logOffButton: 'a.headertop-auth-usermenu-item'
    
}
export const ACCOUNT_CREATED = {
    accountCreatedSuccessfully: '.create-account-success',
    msgAccountCreatedSuccessfully: 'h3.text-pink'

}
export const DEPOSIT = {
    depositOption: 'a[routerlink="/deposit"]',
    depositScreen: '.h3',
    pixOption: 'div.text-body1.text-pink.mb-2:contains("Pix")',
    pixDeposit: 'img[src="/assets/images/deposit/methods/PIX_BANK_TRANSFER.svg"]',
    pixValueScreen: 'div.h3.mb-4:contains("PIX - Valor")',
    customValueField: '#value',
    depositButton: 'button[title*="Depositar"]',
    successUrlPixDeposit: 'https://bmsite-staging.salsaomni.com/br/deposit/home/BR/PIX/BANK_STEPS/BANK_TRANSFER/PIX/success/ftd-success'

}
export const DEPOSIT_ADDITIONAL_INFORMATION = {
    modalAdditionalInformation: 'div.text-body2.text-bold.mb-3',
    cpfField: '#documentNumber',
    validateCpfNumberButton: '.offset-xl-2 > app-button > .btn > span',
    acceptCookiesButton: '.mb-2 > .btn > span',
    continueButton: 'button.btn.pink.btn-block.btn-regular[title="Continuar"]'
}