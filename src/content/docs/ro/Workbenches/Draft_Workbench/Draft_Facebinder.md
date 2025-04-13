---
title: Draft Facebinder
---
|  |
| --- |
| Draft Facebinder |
| poziția meniului |
| Draft → Facebinder |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| F F |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| *Nici unul* |
|  |

## Descriere

Facebinderul este un obiect foarte simplu, construit din fațetele selectate ale altor obiecte. Este parametric, puteți modifica obiectul original și actualizările obiectului facebinder în consecință. Acesta poate fi apoi folosit, de exemplu, pentru a face o extrudare dintr-o colecție de fațete de la alte obiecte. O utilizare tipică este în designul arhitectural, pentru a construi un obiect care acoperă mai multe bucăți de pereți. Puteți mișca și roti în jurul fațetei după crearea ei, totul va rămâne legat de fațetele originale.

It can be used to create an extrusion from a collection of faces. This extrusion can for example represent a wall finish in architectural design.

![](/images/Draft_facebinder_example.jpg)

Facebinder created from the faces of walls

## Cum se folosește

1. Selectați fețetele pe obiecte (utilizați CTRL pentru a selecta mai multe fețe)
2. Apăsați butonul  ![](/images/Draft_Facebinder.svg)  [Facebinder](/Draft_Facebinder "Draft Facebinder"), sau apăsați tatele  F,  F

## Properties

See also: [Property editor](/Property_editor "Property editor").

![](/images/Draft_Facebinder_Corners.png)

On the left an extruded facebinder with closed corners (pink),  
on the right an extruded facebinder with open corners (orange).  
Closed corners are a V1.1 feature.

A Draft Facebinder object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Date**Area** (`Area`): (read-only) specifies the total area of the linked faces of the facebinder.
* Date**Extrusion** (`Distance`): specifies the extrusion thickness of the facebinder. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): If the facebinder has connected faces and Date**Sew** is `true`, an attempt is made to close the corners of the extrusion. If this is not possible faces are extruded separately.
* Date**Faces** (`LinkSubList`): specifies the linked faces of the facebinder.
* Date**Offset** (`Distance`): specifies an offset distance to apply between the facebinder and the original faces, prior to extrusion.
* Date**Remove Splitter** (`Bool`): Specifies whether to remove splitter lines that divide co-planar faces of the facebinder.
* Date**Sew** (`Bool`): Specifies whether to perform a topological sewing operation on the facebinder.

### View

Draft

* Vizualizare**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the faces of the facebinder. This property only works if Vizualizare**Display Mode** is `Flat Lines`.
* Vizualizare**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Scripting

## Scrip-Programare

Instrumentul Facebinder poate fi folosit în scripturile python și [macros](/Macros "Macros") utilizând următoarea funcție:

```
facebinder = make_facebinder(selectionset)

```

* Creează un obiect facebinder din setul de selecție dat, care este o listă de obiecte de selecție, cum ar fi returnate de metoda FreeCADGui.Selection.getSelectionEx ().
* Sunt luate în considerare doar fețele selectate
* Returnează obiectul nou creat

```
PropertyLinkSubList = [tuple1, tuple2, tuple3, ...]
PropertyLinkSubList = [(object1, list1), (object2, list2), (object3, list3), ...]
PropertyLinkSubList = [(object1, ['Face1', 'Face4', 'Face6']), ...]
PropertyLinkSubList = [(object1, ('Face1', 'Face4', 'Face6')), ...]

```

The thickness of the Facebinder can be added by overwriting its `Extrusion` attribute; the value is entered in millimeters.

The placement of the Facebinder can be changed by overwriting its `Placement` attribute, or by individually overwriting its `Placement.Base` and `Placement.Rotation` attributes.

Exempluː

```
import FreeCAD as App
import FreeCADGui as Gui
import Draft

doc = App.newDocument()

# Insert a solid box
box = doc.addObject("Part::Box", "Box")
box.Length = 2300
box.Width = 800
box.Height = 1000

# selection = Gui.Selection.getSelectionEx()
selection = [(box, ("Face1", "Face6"))]
facebinder = Draft.make_facebinder(selection)
facebinder.Extrusion = 50

doc.recompute()

facebinder.Placement.Base = App.Vector(1000, -1000, 100)
facebinder.ViewObject.ShapeColor = (0.99, 0.99, 0.4)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Facebinder/ro&oldid=1551501>"