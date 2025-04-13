---
title: Part Affiner la forme
---
|  |
| --- |
| Part Affiner la forme |
| Emplacement du menu |
| Part → Créer une copie → Affiner la forme |
| Ateliers |
| [Part](/Part_Workbench/fr "Part Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

La commande ![](/images/Part_RefineShape.svg) **Part Affiner la forme** crée des copies paramétriques avec une forme affinée à partir d'objets sélectionnés. Elle supprime les arêtes inutiles des faces planes et cylindriques.

![](/images/PartRefineShape_it.png)

L'objet original avec 11 faces (à gauche) et sa copie affinée avec 7 faces (à droite).

## Utilisation

1. Sélectionnez un ou plusieurs objets.
2. Sélectionnez l'option **Part → Créer une copie → ![](/images/Part_RefineShape.svg) Affiner la forme** du menu.
3. Pour chaque objet, une copie paramétrique nettoyée est créée.
4. Les objets originaux sont cachés.

## Remarques

* Cette commande peut être utilisée comme dernière étape d'un flux de travail traditionnel d'une [géométrie solide constructive](/Constructive_solid_geometry/fr "Constructive solid geometry/fr").
* Elle peut aider à nettoyer le modèle avant d'appliquer d'autres fonctions, telles que des [congés](/Part_Fillet/fr "Part Fillet/fr").
* Le nettoyage d'un objet peut empêcher les imprimantes 3D d'imprimer des bords indésirables une fois que l'objet est exporté dans un format de maillage.
* Cette commande peut également être utilisée après avoir converti un maillage en une forme ([Part Forme à partir du maillage](/Part_ShapeFromMesh/fr "Part ShapeFromMesh/fr")).
* Par défaut, cette commande crée des copies paramétriques (liées). Il existe un paramètre de [réglage fin](/Fine-tuning/fr "Fine-tuning/fr") pour passer à des copies non paramétriques. Plus d'informations sur le comportement des copies paramétriques/non-paramétriques peuvent être trouvées dans ce [fil du forum](https://forum.freecad.org/viewtopic.php?t=42993).
* Quelques informations intéressantes sur ce qui se passe avec le placement et comment y accéder par Python peuvent être trouvées dans ce [fil du forum](https://forum.freecad.org/viewtopic.php?t=77568#p675456).

## Propriétés

Voir aussi : [Éditeur de propriétés](/Property_editor/fr "Property editor/fr")

Un objet Part RefineShape est dérivé d'un [Part Feature](/Part_Feature/fr "Part Feature/fr") et hérite de toutes ses propriétés. Il possède également les propriétés supplémentaires suivantes :

### Données

Refine

* Données**Source** (`Link`) : spécifie la forme source liée.

## Script

La commande Python pour affiner une forme est la suivante :

```
shape.removeSplitter()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_RefineShape/fr&oldid=1514512>"