class HomeScreen {
    get #enterForms() {
        return $('~Forms')
    }

    async goToForms() {
        this.#enterForms.click()
    }

}

module.exports = new HomeScreen()