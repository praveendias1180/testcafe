import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://devexpress.github.io/testcafe/example`;

test('Praveen\'s first test', async t => {
    await t
        .typeText('#developer-name', 'Praveen Dias')
        .click('#submit-button')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, Praveen Dias!');
});