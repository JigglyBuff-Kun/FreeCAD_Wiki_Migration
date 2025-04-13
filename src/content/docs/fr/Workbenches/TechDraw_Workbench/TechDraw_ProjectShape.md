---
title: TechDraw Projection de forme
---
|  |
| --- |
| TechDraw Projection de forme |
| Emplacement du menu |
| TechDraw → Vues de Techdraw → Projeter la forme... |
| Ateliers |
| [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.20 |
| Voir aussi |
| [Draft Shape2DView](/Draft_Shape2DView/fr "Draft Shape2DView/fr") |
|  |

## Description

L'outil **TechDraw Projection de forme** crée des projections de formes. Les projections sont créées dans la [vue 3D](/3D_view/fr "3D view/fr") et non sur une [TechDraw Page standard](/TechDraw_PageDefault/fr "TechDraw PageDefault/fr").

![](/images/ProjectShape1_it.png)

## Utilisation

1. Vous pouvez faire pivoter la [vue 3D](/3D_view/fr "3D view/fr"). Les objets seront projetés sur un plan parallèle à l'écran, c'est-à-dire dans la direction de la caméra de la vue 3D, qui est utilisée comme propriété par défaut Données**Direction**.
2. Sélectionnez un ou plusieurs objets. Une projection distincte sera créée pour chaque objet.
3. Il existe plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/TechDraw_ProjectShape.svg) Projeter la forme....
   * Sélectionnez l'option **TechDraw → Vues de Techdraw → ![](/images/TechDraw_ProjectShape.svg) Projeter la forme...** du menu.
4. Le panneau de tâches **Projeter les formes** s'ouvre. Voir [Propriétés](#Propri.C3.A9t.C3.A9s).
5. Définissez les options souhaitées.
6. Les options sélectionnées ne doivent pas donner lieu à une projection vide, car cela entraînerait une erreur. Par exemple, pour un objet ne comportant que des arêtes vives, comme un [Part Cube](/Part_Box/fr "Part Box/fr"), l'option **Arêtes vives visibles** et/ou **Arêtes vives masquées** doit être cochée.
7. Appuyez sur le bouton OK.
8. La projection est placée sur le plan XY.
9. Vous pouvez modifier la propriété Données**Placement** et/ou la propriété Données**Direction** de la projection.

## Propriétés

Un objet Projection est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Projection

* Données**Source** (`Link`) : la forme à projeter.
* Données**Direction** (`Vector`) : direction de la projection. Il s'agit du vecteur normal du plan de projection.
* Données**VCompound** (`Bool`) : si `true`, les arêtes vives visibles sont affichées. Exemple : tous les arêtes d'un [Part Cube](/Part_Box/fr "Part Box/fr").
* Données**Rg1 Line VCompound** (`Bool`) : si `true`, les arêtes lisses visibles sont affichés. Exemple : les arêtes entre un congé et ses faces adjacentes.
* Données**Rg NLine VCompound** (`Bool`) : si `true`, les arêtes cousues visibles sont affichés. Exemple : la couture d'une face cylindrique de 360°.
* Données**Out Line VCompound** (`Bool`) : si `true`, les arêtes de contour visibles (qui ne sont pas nettes) sont affichées. Exemple : la vue latérale d'un [Part Cylindre](/Part_Cylinder/fr "Part Cylinder/fr") présente deux de ces bords.
* Données**Iso Line VCompound** (`Bool`) : si `true`, les isoparamètres visibles sont affichés. Ne fonctionne pas actuellement.
* Données**HCompound** (`Bool`) : si `true`, les arêtes vives cachées sont affichées.
* Données**Rg1 Line HCompound** (`Bool`) : si `true`, les arêtes lisses cachées sont affichés.
* Données**Rg NLine HCompound** (`Bool`) : si `true`, les arêtes cousues cachées sont affichés.
* Données**Out Line HCompound** (`Bool`) : si `true`, les arêtes cachées du contour sont affichés.
* Données**Iso Line HCompound** (`Bool`) : si `true`, les isoparamètres cachés sont affichés. Ne fonctionne pas actuellement.

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_ProjectShape/fr&oldid=1549387>"