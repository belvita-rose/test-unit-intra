function calculerLivraison(distance, montantCommande, membrePremium) {
    if (membrePremium && montantCommande > 150) {
        return 0; // Livraison gratuite
    }

    if (distance < 10) {
        return 5; // Frais de 5$
    } else if (distance >= 10 && distance <= 50) {
        return 10; // Frais de 10$
    } else {
        return 20; // Frais de 20$
    }
}

module.exports = { calculerLivraison };
