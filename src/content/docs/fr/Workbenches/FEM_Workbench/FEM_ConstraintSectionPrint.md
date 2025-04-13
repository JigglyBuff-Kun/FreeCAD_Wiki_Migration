---
title: FEM Affichage des variables de sortie
---
|  |
| --- |
| FEM Affichage des variables de sortie |
| Emplacement du menu |
| Modèle → Fonctions d'analyse géométrique → Affichage des variables de sortie |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| *Aucun* |
|  |

| Solveurs |
| --- |
| CalculiX |

## Description

Affiche les variables de sortie prédéfinies (forces et moments) dans le fichier de données.

[introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : peut également afficher le flux de chaleur et la contrainte de traînée (cette dernière nécessite la prise en charge des analyses de fluides 3D avec CalculiX, qui n'a pas encore été implémentée).

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyer sur le bouton ![](/images/FEM_ConstraintSectionPrint.svg) Affichage des variables de sortie.
   * Sélectionner l'option **Modèle → Fonctions d'analyse géométrique → ![](/images/FEM_ConstraintSectionPrint.svg) Affichage des variables de sortie** du menu.
2. Appuyer sur le bouton Ajouter et sélectionner une seule face pour laquelle la sortie sera affichée.
3. Dans la liste *Variable*, sélectionnez la variable que vous souhaitez imprimer : *Force de section*, *Flux de chaleur* ou *Contrainte de traînée*. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")

## Remarques

* La fonction utilise le jeu de paramètres \*SECTION PRINT de CalculiX.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintSectionPrint/fr&oldid=1541828>"