---
title: FEM Température initiale
---
|  |
| --- |
| FEM Température initiale |
| Emplacement du menu |
| Modèle → Conditions limites et charges thermiques → Température initiale |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

| Solveurs |
| --- |
| CalculiX, Elmer |

## Description

Définit une température initiale pour une analyse thermomécanique.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le bouton ![](/images/FEM_ConstraintInitialTemperature.svg) Température initiale.
   * Sélectionner l'option **Modèle → Conditions limites et charges thermiques → ![](/images/FEM_ConstraintInitialTemperature.svg) Température initiale** du menu.
2. Entrer une valeur de température initiale pour l'analyse.

## Limitations

Cet outil applique la température initiale à tous les nœuds du modèle FEA - il n'est pas possible de sélectionner des régions individuellement.

## Remarques

* Cet outil utilise le [jeu de paramètres \*INITIAL CONDITIONS de CalculiX](http://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node215.html).
* La température initiale doit être définie pour toutes les analyses thermomécaniques effectuées avec CalculiX, même celles en régime permanent.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintInitialTemperature/fr&oldid=1532973>"