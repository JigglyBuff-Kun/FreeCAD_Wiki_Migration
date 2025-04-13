---
title: FEM Source de chaleur du corps
---
|  |
| --- |
| FEM Source de chaleur du corps |
| Emplacement du menu |
| Modèle → Conditions limites et charges thermiques → Source de chaleur du corps |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [FEM Tutoriel](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

| Solveurs |
| --- |
| CalculiX, Elmer |

## Description

Définit une température interne du corps en W/kg.

version 1.0 et suivantes : peut également définir la source de chaleur en W.

## Utilisation

1. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ConstraintBodyHeatSource.svg) Source de chaleur du corps.
   * Sélectionnez l'option **Modèle → Conditions limites et charges thermiques → ![](/images/FEM_ConstraintBodyHeatSource.svg) Source de chaleur du corps** du menu.
2. version 0.21 et suivantes : appuyez sur le bouton Ajouter. pour une analyse 3D, sélectionnez un "solide" (corps) de votre modèle. Pour une analyse 2D, sélectionnez une face.
3. Définissez la valeur :
   * version 0.20 et précédentes : puisque l'outil n'a pas de fenêtre de dialogue, utilisez l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr") et définissez la propriété Données**Heat Source**.
   * [introduit dans la version 0.21](/Release_notes_0.21/fr "Release notes 0.21/fr") : entrez la chaleur du corps en W/kg.
   * version 1.0 et suivantes : sélectionnez le mode :
     + *Taux de dissipation* : entrez le taux de dissipation en W/kg.
     + *Puissance totale* : entrez la puissance totale en W.

## Limitations

* version 0.20 et précédentes : la source de chaleur du corps est appliquée à l'ensemble du modèle, c'est-à-dire à tous les corps de la configuration. Il n'est pas possible de sélectionner un corps individuellement.
* version 0.21 et précédentes : cette fonction ne fonctionne qu'avec le solveur Elmer.

## Remarques

* Cette fonction ne fonctionne qu'avec le solveur Elmer.
* Pour plus d'informations, voir [ce fil de forum](https://forum.freecadweb.org/viewtopic.php?f=18&t=44705&start=490#p422539) et les messages suivants. [Ce fil de discussion](https://forum.freecadweb.org/viewtopic.php?f=18&t=28926) peut également être utile.
* Des exemples d'Elmer peuvent également être trouvés dans [Tutoriels Elmer GUI](https://www.nic.funet.fi/pub/sci/physics/elmer/doc/ElmerTutorials.pdf).
* version 1.0 et suivantes : cette fonction utilise le [jeu de paramètres \*DFLUX de CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node188.html).
* version 1.0 et suivantes : puisque CalculiX s'attend à ce que le flux de chaleur du corps soit saisi en W/mm^3 alors que pour Elmer c'est en W/kg, la conversion de la valeur spécifiée (en W ou W/kg) est faite en interne pour chaque solveur, en utilisant le volume du solide sélectionné et la densité du matériau qui lui est assigné, si nécessaire.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintBodyHeatSource/fr&oldid=1569601>"