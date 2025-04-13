---
title: Draft Clone
---
|  |
| --- |
| Draft Clone |
| Menu location |
| Draft → Clone |
| Workbenches |
| [Draft](/Draft_Workbench "Draft Workbench"), [Arch](/Arch_Workbench "Arch Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| [Draft Scale](/Draft_Scale "Draft Scale") |
|  |

## Description

## Descriere

Acest instrument produce o clonă (o copie legată parametric de obiectul original) a unui obiect selectat. Dacă obiectul original se modifică, clona se schimbă și ea, dar își păstrează poziția, rotația și scala.

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench"). Clones of 2D objects can be used in [PartDesign Bodies](/PartDesign_Body "PartDesign Body").

![](/images/Draft_Clone_example.jpg)

![](/images/Draft_Clone_example.jpg)

## Usage

## Cum se folosește

1. Selectați obiectele pe care doriți să le clonați
2. Apăsați butonul ![](/images/Draft_Clone.png) [Draft Clone](/Draft_Clone "Draft Clone")

## Notes

* The scaling of a Draft Clone can be changed in the [Property editor](/Property_editor "Property editor") or, [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"), by double clicking it in the [Tree view](/Tree_view "Tree view") and entering new values in the task panel that opens. The latter option is more efficient.

## Properties

See also: [Property editor](/Property_editor "Property editor").

An object created with the Draft Clone command is derived from a [Part Part2DObject](/Part_Part2DObject "Part Part2DObject"), a [Part Feature](/Part_Feature "Part Feature") object or, if an Arch Clone is created, from the object type of the source object. It inherits all properties from that object. A clone derived from one of the first two objects also has the following additional properties:

### Data

Draft

## Proprietăți

* Date **Scale**: Specifică un factor de scară opțional pentru clonă
* Date **Fuse**: Dacă această clonă utilizează mai multe obiecte, aceasta specifică dacă rezultatul este o fuziune sau o combinație [introduced in 0.17](/Release_notes_0.17 "Release notes 0.17")
* Rezultatul instrumentului [Draft Scale](/Draft_Scale "Draft Scale") este, de asemenea, o clonă
* Nicio schiță nu poate fi mapată pe fețetele unei clone. Aceasta este o limitare cunoscută în prezent .

## Scripting

## Script-Programre

Instrumentul Clone poate fi folosită în [macro-uri](/Macros/ro "Macros/ro") şi de la consola Python cu ajutorul funcţiei următoare:

To create a clone use the `make_clone` method ([introduced in 0.19](/Release_notes_0.19 "Release notes 0.19")) of the Draft module. This method replaces the deprecated `clone` method.

```
cloned_object = make_clone(obj, delta=None, forcedraft=False)

```

* Face o clonă a obiectului (obiectelor) dat(e).
* Clona este o copie exactă, legată de obiectul dat.
* Dacă obiectul original se modifică, se schimbă și obiectul final. Opțional, puteți da un Vector delta pentru a muta clona departe de poziția inițială.

Exempluː

```
import FreeCAD as App
import Draft

doc = App.newDocument()

place = App.Placement(App.Vector(1000, 0, 0), App.Rotation())
polygon1 = Draft.make_polygon(3, 750)
polygon2 = Draft.make_polygon(5, 750, placement=place)

vector = App.Vector(2600, 500, 0)
cloned_object = Draft.clone([polygon1, polygon2], delta=vector)

cloned_object.Fuse = True

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Clone/ro&oldid=1550535>"