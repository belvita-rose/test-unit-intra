const { calculerLivraison } = require('./test/livraison');

describe('Calcul des frais de livraison', () => {
    test('Frais pour une distance inférieure à 10 km (5$)', () => {
        expect(calculerLivraison(8, false, 50)).toBe(5);
    });

    test('Frais pour une distance entre 10 km et 50 km (10$)', () => {
        expect(calculerLivraison(20, false, 50)).toBe(10);
    });

    test('Frais pour une distance supérieure à 50 km (20$)', () => {
        expect(calculerLivraison(60, false, 50)).toBe(20);
    });

    test('Livraison gratuite pour un membre premium avec commande > 150$', () => {
        expect(calculerLivraison(15, true, 200)).toBe(0);
    });

    test('Ajout de la taxe fixe de 2$ pour les commandes non premium', () => {
        expect(calculerLivraison(15, false, 50)).toBe(12);
    });
});