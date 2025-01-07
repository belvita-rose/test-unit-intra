function calculerLivraison(distance, membrePremium, montantCommande) {
    let frais = 0;

    // Frais standards
    if (distance < 10) {
        frais = 5;
    } else if (distance >= 10 && distance <= 50) {
        frais = 10;
    } else {
        frais = 20;
    }

    // Livraison gratuite pour les membres premium
    if (membrePremium && montantCommande > 150) {
        return 0;
    }

    // Ajout de la taxe fixe pour les non-premium
    if (!membrePremium) {
        frais += 2;
    }

    return frais;
}

module.exports = { calculerLivraison };
