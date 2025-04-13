---
title: Draft Simetrizarea
---
|  |
| --- |
| Draft Mirror |
| poziția meniului |
| Draft → Mirror |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Draft Scale](/Draft_Scale/ro "Draft Scale/ro") |
|  |

## Description

## Descriere

Acest instrument produce o copie în oglindă a unui obiect selectat, utilizând un obiect [Mirror Object](/Part_Mirror/ro "Part Mirror/ro"). Copia este legată parametric de obiectul original: dacă se modifică obiectul original, copia oglindă se modifică și ea, dar rămâne oglindită.

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/images/Draft_Mirror_example.jpg)

![](/images/Draft_Mirror_example.jpg)

## Usage

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

## Cum se utilizează

1. Selectați obiectele pe care doriți să le reflectați
2. Apăsați butonul ![](/images/Draft_Mirror.png) [Draft Mirror](/Draft_Mirror "Draft Mirror")
3. Faceți clic pe primul punct al liniei de oglindă din vizualizarea 3D sau tastați un coordinate
4. Faceți clic pe celălalt punct al liniei de simetrie/oglindire din vizualizarea 3D sau tastați un coordinate

## Options

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts.

## Opțiuni

* După crearea oglinzii, legarea sa cu obiectul original poate fi eliminată folosind instrumentul  [Creare parțială simplă](/Part_SimpleCopy "Part SimpleCopy").
* Oglinda unui obiect Draft poate fi de asemenea transformată într-un Wire Draft, utilizând [Draft Downgrade](/Draft_Downgrade "Draft Downgrade") apoi [Draft Upgrade](/Draft_Upgrade "Draft Upgrade").

## Notes

* Mirrored copies of [Draft Lines](/Draft_Line "Draft Line"), [Draft Wires](/Draft_Wire "Draft Wire"), [Draft Arcs](/Draft_Arc "Draft Arc") and [Draft Circles](/Draft_Circle "Draft Circle") can be turned into independent editable Draft objects by using [Draft Downgrade](/Draft_Downgrade "Draft Downgrade") and then [Draft Upgrade](/Draft_Upgrade "Draft Upgrade").
* The [Part SimpleCopy](/Part_SimpleCopy "Part SimpleCopy") command can be used to create a copy of a mirrored object that is not linked to its source object.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A [Part Mirror](/Part_Mirror "Part Mirror") object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

* Date**Source** (`Link`): specifies the object that is mirrored.

Plane

## Proprietăți

* Date**Base**: Baza punctului planului de simetrie
* Date**Normal**: Direcția normală la planul de simetrie

## Scripting

## Script-Programre

Unealta Clone poate fi folosită în [macro-uri](/Macros/ro "Macros/ro") şi de la consola Python cu ajutorul funcţiei următoare:

To mirror objects use the `mirror` method of the Draft module.

```
mirrored_list = mirror(objlist, p1, p2)

```

* Realizează oglinda (obiectelor) obiectului dat peste un plan definit de o linie de la p1 la p2 și paralel cu vizualizarea curentă
* Rezultatul este un obiect `Part::Mirroring`
* Dacă obiectul original se modifică, obiectul final se schimbă și el, dar rămâne oglindit

Exempluː

```
import FreeCAD as App
import Draft

doc = App.newDocument()

place = App.Placement(FreeCAD.Vector(1000, 0, 0), App.Rotation())
polygon1 = Draft.make_polygon(3, 750)
polygon2 = Draft.make_polygon(5, 750, placement=place)

p1 = App.Vector(2000, -1000, 0)
p2 = App.Vector(2000, 1000, 0)

line1 = Draft.make_line(p1, p2)
mirrored1 = Draft.mirror(polygon1, p1, p2)

Line2 = Draft.make_line(-p1, -p2)
mirrored2 = Draft.mirror([polygon1, polygon2], -p1, -p2)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Mirror/ro&oldid=1456349>"