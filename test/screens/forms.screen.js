class FormsScreen {
    get #confirmActive() { return $('//android.widget.TextView') }

    get #insertText() { return $('~text-input') }

    get #confirmText() { return $('~input-text-result') }

    get #switchClick() { return $('~switch') }

    get #dropDownMenu() { return $('~Dropdown') }

    get #selectText() { return $('//android.widget.CheckedTextView[2]') }

    get #buttonsClick() { return $('~button-Active') }

    get #checkMenu() { return $('//android.widget.LinearLayout/android.widget.Button[3]') }

    async confirm() {
        return await this.#confirmActive.getText()
    }
   
    async insertText() {
        this.#insertText.setValue()
    }

    async confirmText() {
        return await this.#confirmText.getText()
    }

    async switchClick() {
        await this.#switchClick.click()
    }

    async dropDown() {
        await this.#dropDownMenu.click()
    }

    async selectTextDropDown() {
        await this.#selectText.click()
    }

    async activeButton() {
        await this.#buttonsClick.click()
    }

    async checkMenu() {
        await this.#checkMenu.click()
    }
   
}

module.exports = new FormsScreen()