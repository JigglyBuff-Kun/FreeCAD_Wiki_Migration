---
title: OpenSCAD Dégrouper
---
|  |
| --- |
| OpenSCAD Dégrouper |
| Emplacement du menu |
| OpenSCAD → Dégrouper ‏‎ |
| Ateliers |
| [OpenSCAD](/OpenSCAD_Workbench "OpenSCAD Workbench") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

Cette outil fait décompose une fusion ou un composé et le convertit en objets uniques en appliquant des couleurs aléatoires à ces objets.

## Utilisation

1. Sélectionner le fusion/composé à exploser
2. Cliquer sur ![](/images/OpenSCAD_ExplodeGroup.svg) ou choisissez OpenSCAD → ![](/images/OpenSCAD_ExplodeGroup.svg) Dégrouper dans le menu principal.

## Limitations

La fonction ne fonctionne que sur les fusions/composés composés de :

* Parties primitives de l'atelier Part
* Pièces extrudées de l'atelier Part
* Pièces issues de révolution de l'atelier Part

La fonction ne marchera **PAS** sur :

* Des protrusions/révolutions de l'atelier de PartDesign
* Des réseaux de l'atelier Draft

## Remarques

Pour désagréger les réseaux de l'atelier de Draft, utilisez l'outil [Draft Désagréger](/Draft_Downgrade/fr "Draft Downgrade/fr").

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_ExplodeGroup/fr&oldid=1359824>"