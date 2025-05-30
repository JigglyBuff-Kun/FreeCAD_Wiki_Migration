---
title: Draft Agréger
---
|  |
| --- |
| Draft Agréger |
| Emplacement du menu |
| Draft/BIM : Modification → Agréger |
| Ateliers |
| [Draft](/Draft_Workbench/fr "Draft Workbench/fr"), [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| U P |
| Introduit dans la version |
| - |
| Voir aussi |
| [Draft Désagréger](/Draft_Downgrade/fr "Draft Downgrade/fr") |
|  |

## Description

La commande ![](/images/Draft_Upgrade.svg) **Draft Agréger** assemble les objets sélectionnés. Le résultat dépend du nombre d'objets sélectionnés et de leur type. La commande peut par exemple fusionner des éléments et créer des faces. Il vaut la peine d'essayer d'améliorer une sélection plusieurs fois pour voir si un meilleur résultat peut être obtenu. Voir l'exemple dans l'image. Notez que tous les objets ne peuvent pas être mis à jour. Cette commande est le pendant de la commande [Draft Désagréger](/Draft_Downgrade/fr "Draft Downgrade/fr").

![](/images/Draft_Upgrade_example.jpg)

Une polyligne ouverte non modifiable est transformée en polyligne fermée, puis en une face. Une polyligne carrée fermée non modifiable est également promue vers une face. Les deux faces sont ensuite promues pour créer un composé, qui est finalement promu vers une polyligne Draft modifiable.

## Utilisation

1. En option, sélectionnez un ou plusieurs objets.
2. Il existe plusieurs façons de lancer la commande :
   * Appuyez sur le bouton ![](/images/Draft_Upgrade.svg) Agréger.
   * [Draft](/Draft_Workbench/fr "Draft Workbench/fr") : sélectionnez l'option **Modification → ![](/images/Draft_Upgrade.svg) Agréger** du menu.
   * [BIM](/BIM_Workbench/fr "BIM Workbench/fr") : sélectionnez l'option **Modification → ![](/images/Draft_Upgrade.svg) Agréger** du menu.
   * Utilisez le raccourci clavier : U puis P.
3. Si vous n'avez pas encore sélectionné d'objet : sélectionnez un objet dans la [vue 3D](/3D_view/fr "3D view/fr").

## Remarques

* Les [Draft Lignes](/Draft_Line/fr "Draft Line/fr") et [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr") peuvent être jointes avec cette commande, mais aussi avec la commande [Draft Joindre](/Draft_Join/fr "Draft Join/fr") ou la commande [Draft Polylignes](/Draft_Wire/fr "Draft Wire/fr") .

## Script

Voir aussi : [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) et [FreeCAD Débuter avec les scripts](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

Pour mettre à jour des objets, utilisez la méthode `upgrade` de l'atelier Draft.

```
upgrade_list = upgrade(objects, delete=False, force=None)

```

* `objects` contient les objets à mettre à jour. Il s'agit soit d'un objet unique, soit d'une liste d'objets.
* Si `delete` est `True`, les objets sources sont supprimés.
* `force` force une certaine manière de mettre à niveau en appelant une fonction interne spécifique. Cela peut être : `"makeCompound"`, `"closeGroupWires"`, `"makeSolid"`, `"closeWire"`, `"turnToParts"`, `"makeFusion"`, `"makeShell"`, `"makeFaces"`, `"draftify"`, `"joinFaces"`, `"makeSketchFace"`, `"makeWires"` ou `"turnToLine"`.
* `upgrade_list` est retourné. C'est une liste contenant deux listes : une liste de nouveaux objets et une liste d'objets à supprimer. Si `delete` est `True`, la seconde liste est vide.

Exemple :

```
import FreeCAD as App
import Draft

doc = App.newDocument()

circle = Draft.make_circle(1000)
rectangle = Draft.make_rectangle(2000, 800)
doc.recompute()

add_list1, delete_list1 = Draft.upgrade([circle, rectangle], delete=False)

line1 = Draft.make_line(App.Vector(2000, 0, 0), App.Vector(2500, 1500, 0))
line2 = Draft.make_line(App.Vector(2500, 1500, 0), App.Vector(3000, -1000, 0))
doc.recompute()

add_list2, delete_list2 = Draft.upgrade([line1, line2], delete=False)

simple_wire = add_list2[0]
add_list3, delete_list3 = Draft.upgrade(simple_wire, delete=False)

closed_wire = add_list3[0]
add_list4, delete_list4 = Draft.upgrade(closed_wire, delete=False)

face = add_list4[0]
add_list5, delete_list5 = Draft.upgrade(face, delete=False)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Upgrade/fr&oldid=1475700>"