const express = require('express');
const { calculerLivraison } = require('./app');

const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint pour calculer les frais de livraison
app.post('/api/livraison', (req, res) => {
    const { distance, montantCommande, membrePremium } = req.body;

    if (distance == null || montantCommande == null || membrePremium == null) {
        return res.status(400).json({ error: "Veuillez fournir toutes les informations nécessaires." });
    }

    const frais = calculerLivraison(distance, montantCommande, membrePremium);
    res.json({ frais });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
