---
title: FEM Charge centrifuge
---
|  |
| --- |
| FEM Charge centrifuge |
| Emplacement du menu |
| Modèle → Conditions limites et charges mécaniques → Charge centrifuge |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.20 |
| Voir aussi |
| *Aucun* |
|  |

| Solvers |
| --- |
| CalculiX |

## Description

Définit une charge de force centrifuge sur le corps.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ConstraintCentrif.svg) Charge centrifuge.
   * Sélectionnez l'option **Modèle → Conditions limites et charges mécaniques → ![](/images/FEM_ConstraintCentrif.svg) Charge centrifuge** dans le menu.
2. Spécifiez la fréquence de rotation en Hz.
3. Cliquez sur Ajouter dans la fenêtre **Sélecteur de référence géométrique pour un solide** et sélectionnez un solide auquel la charge sera appliquée dans la [vue 3D](/3D_view/fr "3D view/fr").
4. Cliquez sur Ajouter dans la fenêtre **Sélecteur de référence géométrique pour une arête** et sélectionnez une arête autour de laquelle la rotation se produira dans la [vue 3D](/3D_view/fr "3D view/fr").

## Remarques

* Cette fonction utilise le [jeu de paramètres \*DLOAD de CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node190.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ConstraintCentrif/fr&oldid=1531403>"