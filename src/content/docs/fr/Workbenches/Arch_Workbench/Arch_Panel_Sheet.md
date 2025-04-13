---
title: Arch Feuille de panneaux
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Feuille de panneaux |
| Emplacement du menu |
| Utilitaires → Outils pour les panneaux → Feuille de panneaux |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| P S |
| Introduit dans la version |
| - |
| Voir aussi |
| [Arch Panneau](/Arch_Panel/fr "Arch Panel/fr"), [Arch Découpe de panneau](/Arch_Panel_Cut/fr "Arch Panel Cut/fr"), [Arch Calepinage](/Arch_Nest/fr "Arch Nest/fr") |
|  |

## Description

Cet outil permet de construire une feuille 2D, comprenant un nombre quelconque d'objets [Arch Découpe de panneau](/Arch_Panel_Cut/fr "Arch Panel Cut/fr"), ou tout autre objet 2D tel que ceux réalisés par l'[atelier Draft](/Draft_Workbench/fr "Draft Workbench/fr") et l'[atelier Sketcher](/Sketcher_Workbench/fr "Sketcher Workbench/fr"). La feuille de panneaux est généralement réalisée pour mettre en page les découpes à effectuer par une machine CNC. Ces feuilles peuvent ensuite être exportées vers un fichier [DXF](/Draft_DXF/fr "Draft DXF/fr").

![](/images/Arch_Wikihouse_03.jpg)

![](/images/Arch_Wikihouse_04.jpg)

*L'image ci-dessus montre comment les feuilles de panneaux apparaissent lors de l'exportation au format DXF.*

## Utilisation

1. Sélectionnez un ou plusieurs objets [Arch Découpe de panneau](/Arch_Panel_Cut/fr "Arch Panel Cut/fr") ou tout autre objet 2D qui se trouve sur le plan XY.
2. Sélectionnez l'option **Utilitaires → Outils pour les panneaux → ![](/images/Arch_Panel.svg) Feuille de panneaux** du menu.
3. Réglez les propriétés souhaitées.

## Options

* Après la création de la feuille de panneaux, avec ou sans objets enfants, tout autre objet enfant peut être ajouté/supprimé de la feuille de panneaux en double-cliquant sur celle-ci dans la vue en arborescence et en ajoutant ou supprimant des objets de son répertoire Group.
* Un double-clic sur le panneau dans la vue en arborescence permet également de déplacer les objets contenus dans cette feuille, ou de déplacer son étiquette.
* Il est possible de créer automatiquement des panneaux composés de plus d'une feuille d'un matériau, en augmentant sa propriété Sheets.
* Les feuilles de panneaux peuvent afficher une marge, utile pour s'assurer qu'un certain espace est toujours présent entre les objets internes et le bord de la feuille.
* Lorsque les feuilles de panneaux sont exportées au format DXF, les contours, les trous intérieurs et les étiquettes de leurs enfants intérieurs sont placés sur des couches différentes, comme le montre l'image ci-dessus.

## Propriétés

### Données

* Données**Height** : La hauteur de la feuille
* Données**Width** : La largeur de la feuille
* Données**Fill Ratio** : Le pourcentage de la surface de la feuille qui est remplie par des découpes (automatique)
* Données**Tag Text** : Le texte à afficher
* Données**Tag Size** : La taille du texte de l'étiquette
* Données**Tag Position** : La position du texte de l'étiquette. Conserver (0,0,0) pour la position centrale automatique
* Données**Tag Rotation** : La rotation du texte de l'étiquette
* Données**Font File** : La police du texte de l'étiquette
* Données**Make Face** : Si True, le panneau est une Part Face, sinon une Part Polyligne
* Données**Grain Direction** : Cela vous permet donner la direction principale de la fibre du panneau (dans le sens des aiguilles d'une montre, 0° signifie le haut du panneau)

### Vue

* Vue**Margin** : Affichage d'une marge à l'intérieur de la bordure du panneau.
* Vue**Show Margin** : Active/désactive l'affichage de la marge.
* Vue**Show Grain** : Affiche une texture de fibre (Make Face doit être défini à True).

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Feuille de panneaux peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante:

```
Sheet = makePanelSheet(panels=[], name="PanelSheet")

```

* Crée un objet `Sheet` à partir de `panels` qui est une liste d'objets [Arch Panneau](/Arch_Panel/fr "Arch Panel/fr").

Exemple:

```
import FreeCAD, Draft, Arch

Rect = Draft.makeRectangle(500, 200)
Polygon = Draft.makePolygon(5, 750)

p1 = FreeCAD.Vector(1000, 0, 0)
p2 = FreeCAD.Vector(2000, 400, 0)
p3 = FreeCAD.Vector(1250, 800, 0)
Wire = Draft.makeWire([p1, p2, p3], closed=True)

Panel1 = Arch.makePanel(Rect, thickness=36)
Panel2 = Arch.makePanel(Polygon, thickness=36)
Panel3 = Arch.makePanel(Wire, thickness=36)
FreeCAD.ActiveDocument.recompute()

Cut1 = Arch.makePanelCut(Panel1)
Cut2 = Arch.makePanelCut(Panel2)
Cut3 = Arch.makePanelCut(Panel3)
Cut1.ViewObject.LineWidth = 3
Cut2.ViewObject.LineWidth = 3
Cut3.ViewObject.LineWidth = 3
FreeCAD.ActiveDocument.recompute()

Sheet = Arch.makePanelSheet([Cut1, Cut2, Cut3])

```

## Tutoriels

* [Tutoriel de portage Wikihouse](/Wikihouse_porting_tutorial/fr "Wikihouse porting tutorial/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel_Sheet/fr&oldid=1437492>"