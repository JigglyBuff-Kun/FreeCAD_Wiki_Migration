---
title: Arch Couper selon un plan
---
:::caution
Cette commande fait partie de l'ensemble intégré de l'atelier BIMavec la V1.0Cette page a été mise à jour pour cette version.
:::

|  |
| --- |
| Arch Couper selon un plan |
| Emplacement du menu |
| Modification → Couper selon un plan |
| Ateliers |
| [BIM](/BIM_Workbench/fr "BIM Workbench/fr") |
| Raccourci par défaut |
| *Aucun* |
| Introduit dans la version |
| - |
| Voir aussi |
| *Aucun* |
|  |

## Description

L'outil **Arch Couper selon un plan** coupe un objet solide Arch comme un [Arch Mur](/Arch_Wall/fr "Arch Wall/fr") ou une [Arch Structure](/Arch_Structure/fr "Arch Structure/fr") avec une face plane.

![](/images/Arch_CutPlane_example.jpg)

À gauche : avant d'appliquer l'outil Couper selon un plan.  
Au milieu : mur résultant après la coupe.  
À droite : un autre résultat

## Utilisation

1. Si le plan de coupe doit être dérivé d'une arête droite ([introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")), vous pouvez aligner le [plan de travail](/Draft_SelectPlane/fr "Draft SelectPlane/fr") :
   * L'arête sélectionnée ne peut pas être parallèle à la normale du plan de travail.
   * La face de la coupe générée sera perpendiculaire au plan de travail.
2. Sélectionnez l'objet à découper.
3. Effectuez l'une des opérations suivantes :
   * Sélectionner un objet avec une seule face plane. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
   * Sélectionnez une face plane dans la [vue 3D](/3D_view/fr "3D view/fr").
   * Sélectionnez un objet avec une seule arête droite. [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
   * Sélectionnez une arête droite dans la [vue 3D](/3D_view/fr "3D view/fr"). [introduit dans la version 1.0](/Release_notes_1.0/fr "Release notes 1.0/fr")
4. Il y a plusieurs façons de lancer la commande :
   * Appuyez sur le ![](/images/Arch_CutPlane.svg) Couper selon un plan.
   * Sélectionnez l'option **Modification → ![](/images/Arch_CutPlane.svg) Couper selon un plan** du menu.
5. Choisissez **Derrière** ou **Devant** pour indiquer de quel côté de la face de la coupe, la matière doit être enlevée.
6. Appuyez sur le bouton OK.

## Script

*Voir aussi :* [Arch API](/Arch_API/fr "Arch API/fr") et [Débuter avec les scripts FreeCAD](/FreeCAD_Scripting_Basics/fr "FreeCAD Scripting Basics/fr").

L'outil Couper selon un plan peut être utilisé dans une [macro](/Macros/fr "Macros/fr") et à partir de la console [Python](/Python/fr "Python/fr") en utilisant la fonction suivante :

```
cutObj = cutComponentwithPlane(archObject, cutPlane, sideFace)

```

* Crée un objet `cutObj` à partir de `archObject` qui est coupé par `cutPlane` lequel est la face d'un autre objet.
  + `archObject` doit être un `SelectionObject` obtenu à partir de `FreeCADGui.Selection.SelectionEx()[0]`.
  + `cutPlane` doit être un `FaceObject` obtenu à partir de `FreeCADGui.Selection.SelectionEx()[0].SubObjects[0]`.
* `sideFace` indique de quel côté de `FaceObject` un volume sera créé; ce volume sera ensuite utilisé pour être soustrait de `archObject`. Si `sideFace` vaut `0`, cela créera un volume à l'arrière de la face, sinon il le créera devant la face.

Exemple :

```
import FreeCAD, FreeCADGui, Draft, Arch

p1 = FreeCAD.Vector(0, 0, 0)
p2 = FreeCAD.Vector(2000, 2000, 0)

Line = Draft.makeWire([p1, p2])
Wall = Arch.makeWall(Line, width=150, height=2000)

p3 = FreeCAD.Vector(0, 2000, 0)
p4 = FreeCAD.Vector(3000, 0, 0)

Line2 = Draft.makeWire([p3, p4])
Wall2 = Arch.makeWall(Line2, width=150, height=2000)
FreeCAD.ActiveDocument.recompute()

# Select the Wall
main_object = FreeCADGui.Selection.getSelectionEx()[0]

# Select the face of Wall2
selection = FreeCADGui.Selection.getSelectionEx()[0]
cut_face = selection.SubObjects[0]

cutObj = Arch.cutComponentwithPlane(main_object, cut_face, 0)
FreeCAD.ActiveDocument.recompute()

Wall3 = Draft.move(Wall, FreeCAD.Vector(-4000, 0, 0), copy=True)
Wall4 = Draft.move(Wall2, FreeCAD.Vector(-4000, 0, 0), copy=True)
FreeCAD.ActiveDocument.recompute()

# Select the Wall3
main_object2 = FreeCADGui.Selection.getSelectionEx()[0]

# Select the face of Wall4
selection2 = FreeCADGui.Selection.getSelectionEx()[0]
cut_face2 = selection2.SubObjects[0]

cutObj2 = Arch.cutComponentwithPlane(main_object2, cut_face2, 1)
FreeCAD.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_CutPlane/fr&oldid=1437963>"