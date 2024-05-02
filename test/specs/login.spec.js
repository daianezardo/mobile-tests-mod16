const appScreen = require("../screens/app.screen")
const formsScreen = require("../screens/forms.screen")


let text = 'Olá Mundo'
let button = 'ON'
let active = 'This button is active'
let initial = 'Form components'

describe('Preencher Forms', () => {
    it('Preencher Forms', async () => {
        await appScreen.goToForms()
        await formsScreen.insertText(text)
        await formsScreen.confirmText(text)
        await formsScreen.switchClick()
        console.log(await $('~input-text-result').getText(button))
        await formsScreen.dropDown()
        await formsScreen.selectTextDropDown()
        await formsScreen.activeButton()
        await formsScreen.confirm(active)
        await formsScreen.checkMenu()

        expect (await $('//android.widget.TextView').getText(initial))

    })
})