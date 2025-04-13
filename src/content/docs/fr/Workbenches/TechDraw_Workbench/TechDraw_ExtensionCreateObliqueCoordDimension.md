---
title: TechDraw Cotes parallèles inclinées
---
|  |
| --- |
| TechDraw Cotes parallèles inclinées |
| Emplacement du menu |
| TechDraw → Extensions : cotes → Cotes parallèles inclinées |
| Ateliers |
| [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.20 |
| Voir aussi |
| [TechDraw Cotes parallèles horizontales](/TechDraw_ExtensionCreateHorizCoordDimension/fr "TechDraw ExtensionCreateHorizCoordDimension/fr"), [TechDraw Cotes parallèles verticales](/TechDraw_ExtensionCreateVertCoordDimension/fr "TechDraw ExtensionCreateVertCoordDimension/fr") |
|  |

## Description

L'outil **TechDraw Cotes parallèles inclinées** crée des cotes inclinées : plusieurs cotes régulièrement espacées partant de la même ligne de base.

![](/images/TechDraw_ExtensionCreateObliqueCoordDimensionExample.png)

A droite, les cotes créées

## Utilisation

1. Spécifiez à votre convenance les attributs de ligne avec l'outil ![](/images/TechDraw_ExtensionSelectLineAttributes.svg) [TechDraw Choix des attributs](/TechDraw_ExtensionSelectLineAttributes/fr "TechDraw ExtensionSelectLineAttributes/fr").
2. Sélectionnez trois sommets ou plus.
3. L'ordre de sélection des deux premiers sommets détermine la position de la ligne de base. Si le sommet sélectionné en premier est à gauche du second, la ligne de base est créée au niveau du sommet le plus à gauche, sinon elle est créée au niveau du sommet le plus à droite.
4. Les deux premiers sommets définissent également la direction.
5. Il existe plusieurs façons de lancer l'outil :
   * [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr") : si la [préférence](/TechDraw_Preferences/fr#Cotes "TechDraw Preferences/fr") **Outils de cotation** est réglée sur `Outil unique` (par défaut) : appuyez sur la flèche vers le bas à droite du bouton ![](/images/TechDraw_Dimension.svg)![](/images/Toolbar_flyout_arrow.svg) et sélectionnez l'option **![](/images/TechDraw_ExtensionCreateHorizChainDimension.svg) Cotes horizontales** du menu déroulant.
   * Si cette préférence a une valeur différente (et dans version 0.21 et précédentes) : appuyez sur le bouton ![](/images/TechDraw_ExtensionCreateObliqueCoordDimension.svg) Cotes parallèles inclinées.
   * Sélectionnez l'option **TechDraw → Extensions : cotes → ![](/images/TechDraw_ExtensionCreateObliqueCoordDimension.svg) Cotes parallèles inclinées** à partir du menu.
6. Des cotes avec des textes de cotes centrés sont créées.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ExtensionCreateObliqueCoordDimension/fr&oldid=1488162>"