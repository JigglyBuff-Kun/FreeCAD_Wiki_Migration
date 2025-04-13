---
title: Arch Panneau
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Panneau |
| Emplacement du menu |
| 3D/BIM → Panneau Utilitaires → Outils pour les panneaux → Panneau |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| P A |
| Introduit dans la version |
| 0.15 |
| Voir aussi |
| [Arch Découpe de panneau](/Arch_Panel_Cut/fr "Arch Panel Cut/fr"), [Arch Feuille de panneaux](/Arch_Panel_Sheet/fr "Arch Panel Sheet/fr") |
|  |

## Description

L'outil **Arch Panneau** vous permet de créer toutes sortes d'éléments semblables à des panneaux, généralement pour des constructions de panneaux comme le projet [WikiHouse](https://www.wikihouse.cc/), mais aussi pour toutes sortes d'objets qui sont basés sur un profil plat.

![](/images/Arch_Panel_example.jpg)

*L'image ci-dessus montre une série d'objets panneaux, simplement réalisés à partir de contours 2D importés d'un fichier DXF. Ils peuvent ensuite être pivotés et assemblés pour créer des structures.*

Depuis la version version 0.17 et suivantes, Arch Panneau peut également être utilisé pour créer des profils ondulées ou trapézoïdaux :

![](/images/Arch_panel_wave.jpg)

## Utilisation

1. Sélectionnez une forme 2D (objet Draft, face ou esquisse).
2. Cliquez sur le bouton ![](/images/Arch_Panel.svg) Panneau, appuyez les touche P puis A.
3. Ajustez les propriétés souhaitées.

### Limitations

* Il n'existe actuellement aucun système automatique permettant de produire des feuilles de découpe en 2D à partir de panneaux, mais cette fonctionnalité est prévue et sera ajoutée à l'avenir.

## Options

* L'épaisseur d'un panneau peut être réglée après la création.
* Appuyez sur le bouton Échap ou Annuler pour abandonner la commande en cours.
* Un double-clic sur le panneau dans la vue en arborescence après sa création permet d'entrer en mode édition et d'accéder et de modifier ses ajouts et soustractions.
* Il est possible de créer automatiquement des panneaux composés de plus d'une feuille d'un matériau, en augmentant sa propriété Sheets.
* Les panneaux peuvent faire appel à ![](/images/Arch_MultiMaterial.svg) [Arch Multi-matériaux](/Arch_MultiMaterial/fr "Arch MultiMaterial/fr"). Lorsqu'on utilise un multi-matériaux, le panneau devient multi-couche, en utilisant les épaisseurs spécifiées du multi-matériaux. Toute couche dont l'épaisseur est égale à zéro verra son épaisseur définie automatiquement par l'espace restant défini par la valeur Thickness du panneau, après soustraction des autres couches.

## Propriétés

Un objet Arch Panel partage les propriétés communes et le comportement de tous les [Arch Composants](/Arch_Component/fr "Arch Component/fr").

* Données**Length** : longueur du panneau
* Données**Width** : largeur du panneau
* Données**Thickness** : épaisseur du panneau
* Données**Area** : surface du panneau (automatique)
* Données**Sheets** : nombre de feuilles de matériau dont est composé le panneau.
* Données**Wave Length** : longueur de l'ondulation pour les panneaux ondulés.
* Données**Wave Height** : hauteur de l'ondulation pour les panneaux ondulés.
* Données**Wave Type** : type de l'ondulation pour les panneaux ondulés, courbe, trapézoïdale ou en pointe.
* Données**Wave Direction** : orientation des ondulations pour les panneaux ondulés.
* Données**Bottom Wave** : si l'ondulation du fond du panneau est plate ou non.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Panneau peut-être utilisé dans une [macro](/Macros/fr "Macros/fr") et depuis la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
Panel = makePanel(baseobj=None, length=0, width=0, thickness=0, placement=None, name="Panel")

```

* Crée un objet `Panel` à partir du `baseobj` donné qui est un profil fermé et de l'extrusion donnée `thickness`.
  + Si aucun `baseobj` n'est indiqué, vous pouvez fournir les valeurs numériques pour `length`, `width` et `thickness` pour créer un bloc panneau.
* Si un `placement` est donné, il est utilisé.

Exemple :

```
import FreeCAD, Draft, Arch

Rect = Draft.makeRectangle(1000, 400)
Panel = Arch.makePanel(Rect, thickness=36)

```

## Tutoriels

* [Tutoriel de portage Wikihouse](/Wikihouse_porting_tutorial/fr "Wikihouse porting tutorial/fr")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Panel/fr&oldid=1540373>"