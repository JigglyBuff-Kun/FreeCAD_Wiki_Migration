---
title: FEM Rotation d'un élément 1D
---
|  |
| --- |
| FEM Rotation d'un élément 1D |
| Emplacement du menu |
| Modèle → Géométrie de l'élement → Rotation d'un élément 1D |
| Ateliers |
| [FEM](/FEM_Workbench/fr "FEM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Tutoriel FEM](/FEM_tutorial/fr "FEM tutorial/fr") |
|  |

| Solveurs |
| --- |
| CalculiX |

## Description

**Rotation d'un élément 1D** est utilisé pour faire tourner le profilé d'un élément type poutre autour de l'axe des éléments de la poutre.

## Utilisation

1. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/FEM_ElementRotation1D.svg) Rotation d'un élément 1D.
   * Sélectionnez l'option **Modèle → Géométrie de l'élément → ![](/images/FEM_ElementRotation1D.svg) Rotation d'un élément 1D** du menu.
2. Spécifiez l'angle selon lequel le profilé de l'élément doit être tourné.

![](/images/FEM_beam_no_rotation.png)

Aucune rotation, orientation par défaut. L'axe local 1 est aligné sur l'axe global Y (axe vert)

![](/images/FEM_beam_rotation.png)

Rotation de 90 degrés

## Propriétés

Données**Rotation** : spécifie l'angle de rotation.

## Limitations

* Actuellement, les rotations multiples ne sont pas prises en charge (une seule rotation est appliquée à toutes les poutres du modèle).

## Remarques

* Pour visualiser la section transversale tournée, il est nécessaire de définir `Beam Shell Result Output 3D` dans le [FEM Solveur CalculiX standard](/FEM_SolverCalculixCxxtools/fr "FEM SolverCalculixCxxtools/fr") sur `True` et de lancer l'analyse.
* Cette fonction utilise le [jeu de paramètres \*BEAM SECTION de CalculiX](https://web.mit.edu/calculix_v2.7/CalculiX/ccx_2.7/doc/ccx/node162.html).

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_ElementRotation1D/fr&oldid=1531407>"