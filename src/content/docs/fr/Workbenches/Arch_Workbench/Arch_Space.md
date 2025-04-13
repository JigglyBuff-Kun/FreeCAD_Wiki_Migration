---
title: Arch Espace
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Espace |
| Emplacement du menu |
| 3D/BIM → Espace |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| S P |
| Introduit dans la version |
| 0.14 |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Arch Espace** vous permet de définir un volume vide, soit en le basant sur une forme solide, soit en définissant ses limites, soit en combinant les deux. S'il est basé uniquement sur des limites, le volume est calculé en partant du cadre de sélection de toutes les limites données et en soustrayant les espaces situés derrière chaque limite. L'objet Espace définit toujours un volume solide. La surface de plancher d'un objet d'espace, calculée en coupant un plan horizontal au centre de gravité du volume d'espace, peut également être affichée.

![](/images/Arch_Space_example.jpg)

L'objet Espace créé à partir d'un objet solide existant, deux faces de mur sont ajoutées en tant que limites.

## Utilisation

1. Sélectionnez un objet solide existant ou des faces sur des objets de contour.
2. Lancez la commande en utilisant plusieurs méthodes :
   * En appuyant sur le bouton ![](/images/Arch_Space.svg) Espace de la barre d'outils.
   * En utilisant les touches S puis P
   * En utilisant l'entrée **3D/BIM → Espace** du menu supérieur

Une fois qu'un espace a été créé, vous pouvez également ajouter ou supprimer des limites en utilisant les boutons ![](/images/Arch_Add.svg) [Ajouter](/Arch_Add/fr "Arch Add/fr") ou ![](/images/Arch_Remove.svg) [Supprimer](/Arch_Remove/fr "Arch Remove/fr") dans la barre d'outils. Vous pouvez également le faire dans le panneau des tâches ou dans l'[éditeur de propriétés](/Property_editor/fr "Property editor/fr").

Par exemple, pour ajouter une limite en fonction d'un espace qui croise un mur :

1. Sélectionnez la face du mur qui coupe l'espace. Ce sera la nouvelle limite.
2. En maintenant la touche Ctrl enfoncée, sélectionnez l'espace.
3. Appuyez sur le bouton ![](/images/Arch_Add.svg) [Ajouter](/Arch_Add/fr "Arch Add/fr") dans la barre d'outils.
4. La face du mur définit maintenant une nouvelle limite, et l'espace ne s'étendra que jusqu'à la face du mur dans la direction qui lui fait face.

Même exemple : ajoutez une limite en fonction d'un espace qui croise un mur. Cette fois, nous utilisons le panneau des tâches :

1. Double-cliquez sur l'objet espace dans l'arborescence. Cela activera son panneau des tâches.
2. Sélectionnez la face du mur qui croise l'espace. Ce sera la nouvelle limite.
3. Appuyez sur le bouton ![](/images/Arch_Add.svg) [Ajouter](/Arch_Add/fr "Arch Add/fr") dans le panneau des tâches. Le nom de la face du mur sera affiché dans la section « Limites de l'espace ».
4. Appuyez sur le bouton OK dans le panneau des tâches.
5. La face du mur définit maintenant une nouvelle limite, et l'espace ne s'étendra que jusqu'à la face du mur dans la direction qui lui fait face.

Autre solution : ajoutez une limite en fonction d'un espace qui croise un mur. Cette fois, nous utilisons l'éditeur de propriétés :

1. Allez vers la vue des propriétés et localisez la propriété Données**Boundaries** sous le groupe « Space ».
2. Sur le côté droit de la propriété Données**Boundaries**, cliquez sur le bouton ellipse.
3. Sélectionnez la face du mur qui croise l'espace. Ce sera la nouvelle limite. La fenêtre de dialogue « Créer un lien » reflète votre sélection.
4. Appuyez sur le bouton OK dans la boîte de dialogue « Lien ».
5. La face du mur définit maintenant une nouvelle limite, et l'espace ne s'étendra que jusqu'à la face du mur dans la direction qui lui fait face.

### Limitations

* Les propriétés des bords ne sont actuellement pas modifiables via l'interface graphique.
* Voir sur le forum [forum announcement](http://forum.freecadweb.org/viewtopic.php?f=9&t=4275).

## Propriétés

* Données**Base** : objet de base, le cas échéant (doit être un solide)
* Données**Boundaries** : liste d'éléments de limite facultatifs.
* Données**Area** : surface de plancher calculée de cet espace.
* Données**FinishFloor** : finition du sol de cet espace.
* Données**FinishWalls** : finition des murs de cet espace.
* Données**FinishCeiling** : finition du plafond de cet espace.
* Données**Group** : objets inclus dans cet espace, tels que des meubles.
* Données**SpaceType** : type de cet espace.
* Données**FloorThickness** : épaisseur de la finition du sol.
* Données**NumberOfPeople** : nombre de personnes qui occupent généralement cet espace.
* Données**LightingPower** : puissance électrique nécessaire pour éclairer cet espace en watts.
* Données**EquipmentPower** : puissance électrique nécessaire à l'équipement de cet espace en watts.
* Données**AutoPower** : si True, la puissance de l'équipement sera automatiquement renseignée par l'équipement inclus dans cet espace.
* Données**Conditioning** : type de climatisation de cet espace.
* Données**Internal** : spécifie si cet espace est interne ou externe.

* Vue**Text** : texte à afficher. Utilisez $area, $label, $floor, $walls, $ceiling pour insérer les données respectives.
* Vue**FontName** : nom de la police.
* Vue**TextColor** : couleur du texte.
* Vue**FontSize** : taille du texte.
* Vue**FirstLine** : taille de la première ligne de texte (multiplie la taille de la police. 1 = même taille, 2 = double taille, etc...)
* Vue**LineSpacing** : espace entre les lignes de texte.
* Vue**TextPosition** : position du texte. Laisser à (0,0,0) pour la position automatique.
* Vue**TextAlign** : justification du texte.
* Vue**Decimals** : nombre de décimales à utiliser pour les textes calculés.
* Vue**ShowUnit** : affiche le suffixe de l'unité ou non.

## Options

* Pour créer des zones regroupant plusieurs espaces, utilisez [Arch Partie de bâtiment](/Arch_BuildingPart/fr "Arch BuildingPart/fr") et définir son type IFC sur "Spatial Zone".
* L'objet Space a les mêmes modes d'affichage que les autres objets d'Arch et Part, avec un mode en plus appelé **Footprint** qui n'affiche que la face inférieure de l'espace.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Espace peut être utilisé dans des [macros](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") à l'aide de la fonction suivante :

```
Space = makeSpace(objects=None, baseobj=None, name="Space")

```

* Crée un objet `Space` à partir de `objects` donné ou `baseobj` qui peut être :
  + un objet de document, auquel cas il devient la forme de base de l'objet Espace, ou
  + une liste d'objets de sélection renvoyés par `FreeCADGui.Selection.getSelectionEx()`, ou
  + une liste de tuples `(objet,subobjectname)`

Exemple :

```
import FreeCAD, Arch

Box = FreeCAD.ActiveDocument.addObject("Part::Box", "Box")
Box.Length = 1000
Box.Width = 1000
Box.Height = 1000

Space = Arch.makeSpace(Box)
Space.ViewObject.LineWidth = 2
FreeCAD.ActiveDocument.recompute()

```

Après avoir créé un objet Space, les faces sélectionnées peuvent être ajoutées avec le code suivant :

```
import FreeCAD, FreeCADGui, Draft, Arch

points = [FreeCAD.Vector(-500, 0, 0), FreeCAD.Vector(1000, 1000, 0)]
Line = Draft.makeWire(points)
Wall = Arch.makeWall(Line, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

# Select a face of the wall
selection = FreeCADGui.Selection.getSelectionEx()
Arch.addSpaceBoundaries(Space, selection)

```

Les limites peuvent également être supprimées, à nouveau en sélectionnant les faces indiquées :

```
selection = FreeCADGui.Selection.getSelectionEx()
Arch.removeSpaceBoundaries(Space, selection)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Space/fr&oldid=1559151>"