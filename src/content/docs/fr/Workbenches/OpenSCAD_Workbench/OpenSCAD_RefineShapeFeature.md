---
title: OpenSCAD Affiner la forme
---
|  |
| --- |
| OpenSCAD Affiner la forme |
| Emplacement du menu |
| OpenSCAD → Affiner la forme |
| Ateliers |
| [OpenSCAD](/OpenSCAD_Workbench/fr "OpenSCAD Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Part Affiner la forme](/Part_RefineShape "Part RefineShape") |
|  |

## Description

Nettoie les lignes non nécessaires. Après une opération booléenne, certaines arêtes définissant les formes précédentes restent visibles, cet outil crée une copie de la totalité de l'objet nettoyé.

![](/images/PartRefineShape_it.png)

## Utilisation

1. Sélectionnez la forme à nettoyer.
2. Cliquez sur le menu OpenSCAD → Affiner la forme.

* Un objet-parent est créé et entièrement nettoyé, l'objet original est rendu caché.

## Limitations

* L'algorithme pour affiner ne fonctionne que sur les coques. Il passe donc en revue les coques de la forme d'entrée et crée pour chacune d'elles une nouvelle coque avec des faces jointes dans la mesure du possible. Cela signifie que si votre forme d'entrée n'est qu'une face, une polyligne, une arête ou un sommet, l'algorithme ne fait rien.
* À l'opposé de l'outil ![](/images/Part_RefineShape.svg) [Part Affiner la forme](/Part_RefineShape/fr "Part RefineShape/fr") de l'![](/images/Workbench_Part.svg) [atelier Part](/Part_Workbench/fr "Part Workbench/fr"), cette fonction **se met à jour** lorsque les formes sous-jacentes sont modifiées.

## Remarques

* La fonction ne modifie pas la forme originale mais retourne une nouvelle forme.
* La fonction est normalement utilisée comme dernière étape dans l'historique de modélisation.
* La fonction peut être utile pour obtenir des filets difficiles à travailler
* La fonction est destinée à empêcher les imprimantes 3D d'imprimer des arêtes indésirables.

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_RefineShapeFeature/fr&oldid=1514551>"