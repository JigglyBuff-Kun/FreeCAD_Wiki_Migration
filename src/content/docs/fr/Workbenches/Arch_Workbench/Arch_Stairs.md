---
title: Arch Escalier
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Escalier |
| Emplacement du menu |
| 3D/BIM → Escalier |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| S R |
| Introduit dans la version |
| 0.14 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil Arch Escalier vous permet de construire automatiquement plusieurs types d'escaliers. Les escaliers droits (avec ou sans palier central) peuvent être créés de toutes pièces. Les escaliers plus complexes nécessitent des objets de base.

Voir la [terminologie des escaliers sur wikipedia](https://fr.wikipedia.org/wiki/Escalier#Terminologie) pour une définition des différents termes utilisés pour décrire les parties d'un escaliers.

![](/images/Arch_Stairs_example.jpg)

Deux escaliers ont été créés : l'un avec une structure massive et un palier, l'autre avec un seul limon.

## Options

## Utilisation

1. Sélectionnez un ou plusieurs objets de base, par exemple des [Draft Lignes](/Draft_Line/fr "Draft Line/fr") et des [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr") et des [esquisses](/Sketch/fr "Sketch/fr") :
   * Les polylignes de Draft ou les esquisses avec deux segments ou plus seront utilisés pour créer des paliers. Ils doivent être sur un plan parallèle au plan global XY. Par exemple, sélectionnez une polyligne en U pour un palier en demi-tour et une polyligne en L pour un palier en coin.
   * Les lignes de Draft et les esquisses avec une seule arête seront utilisées pour créer des volées.
   * Si les sommets de toutes les lignes et polylignes ont des coordonnées Z correctes, les escaliers créés utiliseront ces informations. Une esquisse (plan parallèle au plan XY) avec une seule arête, ou une ligne de Draft sans delta Z, peut également servir de base à une volée.
   * Les objets de base doivent être sélectionnés dans l'ordre correctement en commençant par l'objet du bas.
2. Appuyez sur le bouton ![](/images/Arch_Stairs.svg) Escalier ou appuyez sur les touches S, R.
3. Ajustez les propriétés souhaitées. Certaines parties de l'escalier, comme la structure, peuvent ne pas apparaître immédiatement, si l'une des propriétés le rend impossible, par exemple une épaisseur de structure de 0.

![](/images/Stairs_and_Landing_02.png)

![](/images/Stairs_and_Landing_01.png)

![](/images/Arch_Stairs_Complex_Example.png)

Escalier complexe basé sur une sélection de lignes et relié comme indiqué sur la gauche.  
En rouge les polylignes utilisées pour les paliers à Z=1500mm, Z=3000mm et Z=4500mm.  
En noir, les lignes les reliant utilisées pour les étages.

## Propriétés

Un objet Arch Stairs partage les propriétés communes et le comportement de tous les [Arch Composants](/Arch_Component/fr "Arch Component/fr").

### Données

Segment and Parts

* Données**Abs Top** (`Vector`) : (lecture seule) niveau supérieur absolu auquel mène l'escalier.
* Données**Last Segment** (`Link`) : dernier segment (volée des marches ou palier) d'un escalier en arc se connectant à ce segment. Le niveau de départ de l'escalier sera le niveau final de ce dernier segment.
* Données**Outline Left** (`VectorList`) : (lecture seule) contour gauche de l'escalier.
* Données**Outline Left All** (`VectorList`) : (lecture seule) contour gauche de tous les segments de l'escalier.
* Données**Outline Right** (`VectorList`) : (lecture seule) contour droit de l'escalier.
* Données**Outline Right All** (`VectorList`) : (lecture seule) contour droit de tous les segments de l'escalier.
* Données**Railing Height Left** (`Length`) : hauteur de la rampe gauche de l'escalier ou du palier.
* Données**Railing Height Right** (`Length`) : hauteur de la rampe droite de l'escalier ou du palier.
* Données**Railing Left** (`LinkHidden`) : balustrade gauche. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr") : le type de propriété est passé de `String` à `LinkHidden`.
* Données**Railing Offset Left** (`Length`) : décalage de la rampe gauche par rapport au bord de l'escalier ou du palier.
* Données**Railing Offset Right** (`Length`) : décalage de la rampe droite par rapport au bord de l'escalier ou du palier.
* Données**Railing Right** (`LinkHidden`) : balustrade droite. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr") : le type de propriété est passé de `String` à `LinkHidden`.

Stairs

* Données**Align** (`Enumeration`) : alignement des escaliers sur la ligne de base. Utilisé uniquement si une ligne de base est définie. Peut être `Left`, `Right` ou `Center`.
* Données**Height** (`Length`) : hauteur totale de l'escalier. Utilisé uniquement si aucune ligne de base n'est définie, ou si la ligne de base est horizontale. Ignoré si Données**Riser Height Enforce** est non nul.
* Données**Length** (`Length`) : longueur totale de l'escalier si aucune ligne de base n'est définie. Ignoré si Données**Tread Depth Enforce** est non nul.
* Données**Width** (`Length`) : largeur de l'escalier.
* Données**Width of Landing** (`FloatList`) : si la valeur de Données**Number Of Steps** est 1, l'objet escalier agit comme un palier. Lorsque c'est le cas et que la ligne de base est multi-segments, la largeur du premier segment du palier suit la Données**Width** et les largeurs des segments suivants suivent la liste définie ici.

Steps

* Données**Blondel Ratio** (`Float`) : (lecture seule) le rapport Blondel calculé. Ce rapport indique un escalier confortable et devrait se situer entre 62 et 64 cm ou 24,5 et 25,5 pouces.
* Données**Landing Depth** (`Length`) : profondeur du palier de la volée des marches, si elle est activée dans Données**Landings**. Par défaut, elle correspond à Données**Width** si elle est égale à 0.
* Données**Nosing** (`Length`) : taille du nez des marches.
* Données**Number Of Steps** (`Integer`) : nombre de marches (contremarches). Doit être d'au moins 2 pour une volée simple et d'au moins 4 pour un escalier avec un palier central.
* Données**Riser Height** (`Length`) : (lecture seule) hauteur des contremarches. Si Données**Riser Height Enforce** est 0, elle est calculée (Données**Height** / Données**Number of Steps**). Sinon, il est identique à Données**Riser Height Enforce**.
* Données**Riser Height Enforce** (`Length`) : hauteur imposée des contremarches.
* Données**Riser Thickness** (`Length`) : épaisseur des contremarches.
* Données**Tread Depth** (`Length`) : (Lecture seule) profondeur des marches. Si Données**Tread Depth Enforce** est 0, elle est calculée (Données**Length** / Données**Number of Steps**). Sinon, il est identique à Données**Tread Depth Enforce**.
* Données**Tread Depth Enforce** (`Length`) : profondeur imposée des marches.
* Données**Tread Thickness** (`Length`) : épaisseur des marches.

Structure

* Données**Connexion Down Start Stairs** (`Enumeration`) : type de liaison entre la plate-forme du plancher inférieur et le début de l'escalier. Peut être `HorizontalCut`, `VerticalCut` ou `HorizontalVerticalCut`.
* Données**Connection End Stairs Up** (`Enumeration`) : type de connexion entre l'extrémité de l'escalier et la plate-forme du plancher supérieur. Peut être `toFlightThickness` ou `toSlabThickness`.
* Données**Down Slab Thickness** (`Length`) : épaisseur de la plate-forme de l'étage inférieur.
* Données**Flight** (`Enumeration`) : direction de volée des marches après le palier. Peut être `Straight`, `HalfTurnLeft` ou `HalfTurnRight`. La propriété Données**Landings** doit être définie sur `At center`.
* Données**Landings** (`Enumeration`) : type de palier. Peut être `None` ou `At center`. (`At each corner` pas encore implémenté).
* Données**Stringer Overlap** (`Length`) : chevauchement des limons au-dessus du bas des marches.
* Données**Stringer Width** (`Length`) : largeur des longerons.
* Données**Structure** (`Enumeration`) : type de structure de l'escalier. Peut être `None`, `Massive`, `One stringer` ou `Two stringer`. Pour les deux dernières options, les propriétés Données**Stringer Width** et Données**Tread Thickness** doivent avoir une valeur non nulle.
* Données**Structure Offset** (`Length`) : décalage entre la bordure de l'escalier et la structure.
* Données**Structure Thickness** (`Length`) : épaisseur de la structure.
* Données**Up Slab Thickness** (`Length`) : épaisseur de la dalle de l'étage supérieur.
* Données**Winders** (`Enumeration`) : type de revêtements. Non implémenté.

## Limitations

* Les escaliers et paliers droits, demi-tour à gauche ou demi-tour à droite sont actuellement disponibles.
* Voir la [fil du forum](http://forum.freecadweb.org/viewtopic.php?f=23&t=6534) pour les escaliers circulaires
* Voir la [annonce sur le forum](http://forum.freecadweb.org/viewtopic.php?f=9&t=4564).

## Script

*Voir aussi :* [API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Escalier peut être utilisé dans des [macros](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") à l'aide de la fonction suivante :

```
Stairs = makeStairs(baseobj=None, length=None, width=None, height=None, steps=None, name="Stairs")

```

* Crée un objet `Stairs` à partir de `baseobj` donné.
* Si `baseobj` n'est pas indiqué, il utilisera `length`, `width`, `height` et `steps` pour construire un objet solide.

Exemple :

```
import Arch

Stairs = Arch.makeStairs(length=5000, width=1200, height=3000, steps=14)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Stairs/fr&oldid=1540389>"