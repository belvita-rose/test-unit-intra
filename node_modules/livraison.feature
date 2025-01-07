Feature: Calcul des frais de livraison

  Scenario: Frais pour une distance inférieure à 10 km
    Given une distance de 8 km
    When les frais de livraison sont calculés
    Then le montant des frais est 5$

  Scenario: Frais pour une distance entre 10 km et 50 km
    Given une distance de 20 km
    When les frais de livraison sont calculés
    Then le montant des frais est 10$

  Scenario: Frais pour une distance supérieure à 50 km
    Given une distance de 60 km
    When les frais de livraison sont calculés
    Then le montant des frais est 20$

  Scenario: Livraison gratuite pour un membre premium avec commande > 150$
    Given une commande de 200$ pour un membre premium
    When les frais de livraison sont calculés
    Then le montant des frais est 0$

  Scenario: Taxe fixe de 2$ pour les non-premium
    Given une commande de 50$ pour un membre non-premium
    When les frais de livraison sont calculés
    Then le montant des frais est 12$
