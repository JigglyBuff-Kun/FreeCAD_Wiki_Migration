---
title: Arch Axes
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Axes |
| Emplacement du menu |
| Annotation → Axes |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| A X |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch Système d'axes](/Arch_AxisSystem/fr "Arch AxisSystem/fr"), [Arch Grille](/Arch_Grid/fr "Arch Grid/fr") |
|  |

## Description

L'outil ![](/images/Arch_Axis.svg) Axes vous permet de placer une série d'axes dans le document en cours. La distance et l'angle entre les axes sont personnalisables, ainsi que le style de numérotation. Les axes servent principalement de références pour accrocher des objets mais peuvent également être utilisés avec ![](/images/Arch_AxisSystem.svg) [Arch Système d'axes](/Arch_AxisSystem/fr "Arch AxisSystem/fr"). Ils peuvent également être référencés par d'autres objets Arch pour créer des réseaux paramétriques, par exemple des poutres ou des colonnes. ![](/images/Arch_Grid.svg) [Arch Grilles](/Arch_Grid/fr "Arch Grid/fr") peut également être utilisé à la place des axes.

![](/images/Arch_Axis_example.jpg)

Deux objets axes placés perpendiculairement l'un par rapport à l'autre pour créer une grille

## Utilisation

1. Appuyez sur le bouton ![](/images/Arch_Axis.svg) Axe ou appuyez sur les touches A puis X.
2. [Draft Déplacer](/Draft_Move/fr "Draft Move/fr")/[Draft Pivoter](/Draft_Rotate/fr "Draft Rotate/fr") positionnent le système d'axes dans la position souhaitée.
3. Passez en mode édition en double-cliquant sur le système d'axes dans l'arborescence pour ajuster ses paramètres tels que le nombre d'axes, les distances et les angles entre les axes.

## Options

* Chaque axe de la série a sa propre distance et son propre angle par rapport à l'axe précédent. Cela permet de faire des systèmes très complexes tels que des systèmes non orthogonaux, des systèmes polaires ou tout type de système non uniforme.
* Double-cliquez sur l'axe dans la vue en arborescence permet d'éditer les distances, les angles et les étiquettes de chaque axe.
* La longueur des axes, la taille des bulles et les styles de numérotation sont personnalisables directement via les propriétés du système d'axes.
* Chaque axe peut également afficher une étiquette, modifiable via la fenêtre de dialogue du panneau des tâches.

## Propriétés

* Données**Length** : longueur des axes.
* Données**Limit** : si supérieure à zéro, chaque axe sera représenté par deux lignes de la longueur donnée au lieu d'une ligne continue. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")
* Vue**Bubble Size** : taille des infobulles des axes.
* Vue**Numeration style** : style de numérotation : 1,2,3, A,B,C, etc...
* Vue**Bubble Position** : position de l'infobulle sur l'axe : point de départ, point à la fin, les deux ou aucun.
* Vue**Font Name** : police du numéro de l'infobulle et/ou des étiquettes
* Vue**Font Size** : taille du texte de l'étiquette uniquement (le texte de l'infobullee est contrôlé par la taille de l'infobulle)
* Vue**Show Labels** : active/désactive l'affichage du textes des étiquettes

## Utilisation comme marque de section

En définissant la propriété **Bubble Position** à **Arrow left/right** ou **Bar left/right**, l'axe affichera une flèche ou une barre remplie à la place de l'infobulle, afin qu'elle puisse être utilisée comme marque de section. [introduit dans la version 0.20](/Release_notes_0.20/fr "Release notes 0.20/fr")

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Axes peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
Axes = makeAxis(num=5, size=1000, name="Axes")

```

* Crée un objet `Axes` à partir du nombre donné (`num`) d'axes et de `size`, l'intervalle entre chaque axe.

Exemple :

```
import Draft, Arch

Axes = Arch.makeAxis(5, 1000)

Axes.ViewObject.LineWidth = 3
Axes.ViewObject.BubbleSize = 200
Axes.ViewObject.FontSize = 150

Axes2 = Arch.makeAxis(6, 500)

Axes2.ViewObject.LineWidth = 2
Axes2.ViewObject.BubbleSize = 200
Axes2.ViewObject.FontSize = 150
Axes2.ViewObject.NumberingStyle = "A,B,C"
FreeCAD.ActiveDocument.recompute()

Axes2.Length = 6000
Draft.rotate(Axes2, -90)
Draft.move(Axes2, FreeCAD.Vector(-1000, 2500, 0))
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Axis/fr&oldid=1496031>"