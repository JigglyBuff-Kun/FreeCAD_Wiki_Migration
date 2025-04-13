---
title: Arch Grille
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Grille |
| Emplacement du menu |
| Annotation → Grille |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch Axes](/Arch_Axis/fr "Arch Axis/fr"), [Arch Système d'axes](/Arch_AxisSystem/fr "Arch AxisSystem/fr") |
|  |

## Description

L'outil **Arch Grille** vous permet de placer un objet de type grille dans le document. Cet objet est destiné à servir de base pour construire des objets Arch nécessitant un cadre régulier mais complexe, comme des fenêtres, des murs-rideaux, des grilles de colonnes, des garde-corps, etc. L'objet Grille est modifiable comme une feuille de calcul où vous pouvez ajouter ou supprimer des colonnes et des lignes, définir leur taille et fusionner des cellules.

La grille est un objet 2D et peut donc être utilisée partout où une forme 2D, tel qu'un [dessin](/Draft_Workbench/fr "Draft Workbench/fr") ou une [esquisse](/Sketcher_Workbench/fr "Sketcher Workbench/fr") sont nécessaires, mais elle peut aussi se comporter comme un [Arch Système d'axes](/Arch_AxisSystem/fr "Arch AxisSystem/fr") et être utilisée pour propager le placement d'autres objets Arch.

![](/images/Arch_Grid_example.jpg)

Un tableau de colonnes, un système de garde-corps et une fenêtre, chacun basé sur un objet Grille.

## Utilisation

1. Appuyez sur le bouton ![](/images/Arch_Grid.svg) Grille.
2. Définissez la **Largeur** et la **Hauteur** de la grille dans les propriétés.
3. Entrez en mode d'édition en double-cliquant sur l'objet de grille dans l'arborescence.
4. Ajoutez des lignes et des colonnes.
5. Définissez la largeur et la hauteur souhaitées des lignes et des colonnes en double-cliquant sur les en-têtes de ligne ou de colonne.

## Options

* Une largeur de colonne ou une hauteur de ligne de 0 signifie que sa taille sera automatiquement adaptée à la largeur/hauteur totale de la grille.
* Les cellules peuvent être fusionnées et non fusionnées en les sélectionnant et en cliquant sur le bouton approprié.
* Lorsqu'elle est utilisée comme propriété Données**Axis** des autres objets Arch, la grille pilotera le positionnement de ces objets. La propriété Données**Points Output** définit la manière dont les autres objets sont placés sur la grille : au niveau des sommets, des points médians ou des centres de faces.
* En définissant les propriétés Données**Auto Height** ou Données**Auto Width** sur une valeur différente de zéro, le nombre total de lignes/colonnes et leurs hauteurs/largeurs individuelles est ignoré. Au lieu de cela, le nombre maximal de colonnes ou de lignes de la largeur/hauteur automatique donnée est automatiquement créé.

## Propriétés

* Données**Rows** : nombre de lignes
* Données**Columns** : nombre de colonnes
* Données**Row Size** : taille des lignes
* Données**Column Size** : taille des colonnes
* Données**Points Output** : type de points 3D produits par cet objet grille
* Données**Width** : largeur totale de cette grille
* Données**Height** : hauteur totale de cette grille
* Données**Auto Width** : crée des divisions de colonnes automatiques (définies sur 0 pour désactiver)
* Données**Auto Height** : crée des divisions de ligne automatiques (définie sur 0 pour désactiver)
* Données**Reorient** : en mode point médian, si cette grille doit ou non réorienter ses enfants le long des normales des bords
* Données**Hidden Faces** : les indices des faces à cacher

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Grille peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
Grid = makeGrid(name="Grid")

```

* Créer un objet `Grid`.

Ses attributs `Width`, `Height`, `Rows` et `Columns` peuvent être modifiés directement pour définir l'apparence de la grille.

```
import FreeCAD, Draft, Arch
Grid = Arch.makeGrid()

Grid.Width = 5000
Grid.Height = 5000
Grid.Rows = 4
Grid.Columns = 6
FreeCAD.ActiveDocument.recompute()

Structure = Arch.makeStructure(length=200, width=200, height=100)
Draft.move(Structure, FreeCAD.Vector(-100, 0, 0))
Structure.Axis = Grid
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Grid/fr&oldid=1436188>"