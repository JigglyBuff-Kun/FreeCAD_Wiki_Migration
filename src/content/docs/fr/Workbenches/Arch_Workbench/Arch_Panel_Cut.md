---
title: Arch Découpe de panneau
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Découpe de panneau |
| Emplacement du menu |
| Utilitaires → Outils pour les panneaux → Découpe de panneau |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| P C |
| Introduit dans la version |
| 0.17 |
| Voir aussi |
| [Arch Panneau](/Arch_Panel/fr "Arch Panel/fr"), [Arch Feuille de panneaux](/Arch_Panel_Sheet/fr "Arch Panel Sheet/fr"), [Arch Calepinage](/Arch_Nest/fr "Arch Nest/fr") |
|  |

## Description

L'outil **Arch Découpe de panneau** crée, dans le document 3D, une vue 2D plane d'un objet [Panneau](/Arch_Panel/fr "Arch Panel/fr"), à inclure dans une [Arch Feuille de panneaux](/Arch_Panel_Sheet/fr "Arch Panel Sheet/fr") ou directement exportée vers un [DXF](/Draft_DXF/fr "Draft DXF/fr"). Les objets Découpe de panneau sont également pris en charge par l'[atelier CAM](/CAM_Workbench/fr "CAM Workbench/fr").

![](/images/Arch_Wikihouse_02.jpg)

## Utilisation

1. Sélectionner un ou plusieurs objets [Arch Panneau](/Arch_Panel/fr "Arch Panel/fr")
2. Sélectionner l'option **Utilitaires → Outils pour les panneaux → ![](/images/Arch_Panel_Cut.svg) Découpe de panneau** du menu.
3. Ajuster les propriétés désirées

## Options

* Si le panneau n'est pas plat (par exemple un panneau ondulé), le relief n'apparaîtra pas dans la découpe du panneau. Cet outil est surtout utile pour les panneaux plats.
* La découpe du panneau peut afficher une balise. Cette balise peut être une ligne de texte personnalisée ou peut automatiquement afficher la balise, l'étiquette ou la description du panneau auquel elle est liée.
* Pour être utile à l'usinage CNC, la balise doit être écrite en utilisant une police de caractères bâton, où les lettres sont des polylignes simples qui sont faciles à suivre par la machine. Lors de sa création, l'objet Panel Cut utilise automatiquement la police spécifiée dans Édition → Préférences → Draft → Textes et cotes → Fichier de la police par défaut de Formes à partir de texte.
* Un double-clic sur la découpe de panneau dans la vue en arborescence après sa création vous permet d'entrer en mode édition et de modifier la position de la balise.
* Lorsque vous avez besoin de mettre en page différentes découpes de panneaux ensemble, les découpes de panneaux peuvent afficher une marge, ce qui est utile pour s'assurer qu'un certain espace est toujours présent entre une coupe et une autre.

## Propriétés

### Données

* Données**Source** : l'objet [Arch Panneau](/Arch_Panel/fr "Arch Panel/fr") montré par cette découpe.
* Données**Tag Text** : le texte à afficher. Peut être %tag%, %label% ou %description% pour afficher la balise ou l'étiquette du panneau.
* Données**Tag Size** : taille du texte de l'étiquette
* Données**Tag Position** : position du texte de l'étiquette. Laisser à (0,0,0) pour une position centrale automatique.
* Données**Tag Rotation** : rotation du texte de l'étiquette
* Données**Font File** : police du texte de l'étiquette
* Données**Make Face** : si mis à vrai, le panneau est une Part Face, sinon une Part Polyligne.

### Vue

* Vue**Margin** : marge à afficher hors du panneau coupé.
* Vue**Show Margin** : active/désactive l'affichage de la marge

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Découpe de panneau peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et dans la console [Python](/Python/fr "Python/fr") en utilisant le code suivant :

```
View = makePanelCut(panel, name="PanelView")

```

* Crée un objet `View` (projection 2D) à partir du `panel` existant.

Exemple :

```
import FreeCAD, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(500, 0, 0)
p3 = FreeCAD.Vector(500, 50, 0)
p4 = FreeCAD.Vector(550, 50, 0)
p5 = FreeCAD.Vector(600, 0, 0)
p6 = FreeCAD.Vector(1000, 0, 0)
p7 = FreeCAD.Vector(1000, 400, 0)
p8 = FreeCAD.Vector(600, 400, 0)
p9 = FreeCAD.Vector(600, 350, 0)
p10 = FreeCAD.Vector(550, 350, 0)
p11 = FreeCAD.Vector(500, 400, 0)
p12 = FreeCAD.Vector(0, 400, 0)

Wire = Draft.makeWire([p1, p2, p3, p4, p5, p6,
                       p7, p8, p8, p9, p10, p11, p12], closed=True)
Panel = Arch.makePanel(Wire, thickness=36)
FreeCAD.ActiveDocument.recompute()

View = Arch.makePanelCut(Panel)
View.ViewObject.LineWidth = 3
FreeCAD.ActiveDocument.recompute()

```

## Tutoriels

* [Tutoriel de portage Wikihouse](/Wikihouse_porting_tutorial/fr "Wikihouse porting tutorial/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel_Cut/fr&oldid=1438382>"