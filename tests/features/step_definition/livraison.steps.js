const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { calculerLivraison } = require('../../test/livraison');

let fraisLivraison;

Given('une distance de {int} km', function (distance) {
    fraisLivraison = calculerLivraison(distance, false, 50);
});

Given('une commande de {float}$ pour un membre premium', function (montant) {
    fraisLivraison = calculerLivraison(15, true, montant);
});

Given('une commande de {float}$ pour un membre non-premium', function (montant) {
    fraisLivraison = calculerLivraison(15, false, montant);
});

When('les frais de livraison sont calculés', function () {
    // Les frais sont déjà calculés dans les étapes Given
});

Then('le montant des frais est {float}$', function (montantAttendu) {
    assert.strictEqual(fraisLivraison, montantAttendu);
});
