---
title: TechDraw Point cosmétique
---
|  |
| --- |
| TechDraw Point cosmétique |
| Emplacement du menu |
| TechDraw → Ajouter des sommets → Ajouter un sommet cosmétique |
| Ateliers |
| [TechDraw](/TechDraw_Workbench/fr "TechDraw Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| 0.19 |
| Voir aussi |
| [TechDraw Point milieu](/TechDraw_Midpoints/fr "TechDraw Midpoints/fr"), [TechDraw Sommets quadrants](/TechDraw_Quadrants/fr "TechDraw Quadrants/fr") |
|  |

## Description

L'outil **TechDraw Point cosmétique** ajoute un [Vertex](/Glossary/fr#V "Glossary/fr") (sommet) qui ne fait pas partie de la géométrie d'origine à une vue. Ce point se comporte comme n'importe quel autre point et peut être utilisé pour le dimensionnement.

![](/images/TechDraw_CosmeticVertex_Sample.png)

Point cosmétique utilisé pour créer une dimension supplémentaire

## Utilisation

1. Sélectionnez une vue.
2. Il y a plusieurs façons de lancer l'outil :
   * Appuyez sur le bouton ![](/images/TechDraw_CosmeticVertex.svg) [Add Cosmetic Vertex](/TechDraw_CosmeticVertex "TechDraw CosmeticVertex").
   * Sélectionnez l'option **TechDraw → Ajouter des sommets → ![](/images/TechDraw_CosmeticVertex.svg) Ajouter un sommet cosmétique** dans le menu.
3. Un panneau de tâches s'ouvre.
4. Appuyez sur le bouton Sélectionneur de points et choisissez un point sur la page. Appuyez sur le bouton Annuler la sélection pour annuler cette opération.
5. Modifiez ou spécifiez les coordonnées X et Y du point. Les coordonnées sont relatives au centre de la vue.
6. Appuyez sur le bouton OK.

## Remarques

* Vous ne pouvez pas modifier la position d'un sommet cosmétique existant. Pour l'instant, il n'y a pas d'autre moyen que de le supprimer et d'en créer un nouveau.

## Propriétés

Les points cosmétiques n'ont pas de propriétés propres car ils ne sont pas des objets du document. Ils partagent les paramètres de couleur et de taille avec des points de géométrie réguliers.

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Les points cosmétiques sont accessibles par les [macros](/Macros/fr "Macros/fr") ou par la console [Python](/Python/fr "Python/fr").

```
dvp = App.ActiveDocument.View
org = App.Vector(0.0, 0.0, 0.0)
dvp.makeCosmeticVertex(org);

#lines too!
start = FreeCAD.Vector (1.0, 5.0, 0.0)
end = FreeCAD.Vector(1.0, -5.0, 0.0)
style = 2
weight = 0.75
pyGreen = (0.0, 0.0, 1.0, 0.0)
dvp.makeCosmeticLine(start,end,style, weight, pyGreen)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_CosmeticVertex/fr&oldid=1391953>"