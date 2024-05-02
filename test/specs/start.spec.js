describe('Primeiro Teste', () => {
    it('Acessar o menu forms', async () => {
        await $('~Forms').click()
        expect(await $('~text-input')).toBeDisplayed()
    });
});