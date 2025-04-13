---
title: Kreslení Facebinder
---
|  |
| --- |
| Draft\_Facebinder |
| Umístění Menu |
| Draft → Facebinder |
| Pracovní stoly |
| [Kreslení](/Draft_Workbench/cs "Draft Workbench/cs"), [Architektura](/Arch_Workbench/cs "Arch Workbench/cs") |
| Výchozí zástupce |
| F F |
| Představen ve verzi |
| - |
| Viz také |
| *Nikdo* |
|  |

## Popis

Facebinder je velmi jednoduchý objekt zkonstruovaný z vybraných ploch jiných objektů. Je parametrický, můžete upravit původní objekt a objekt facebinder se úměrně změní. Tento objekt může být použit například pro vytváření vysunutí kolekce ploch z jiných objektů. Typické použití je v architektonickém designu, vytvoření objektu, který pokrývá několik zdí. Facebinder můžete po vytvoření posunovat a otáčet a všechno zůstává propojené s původními plochami

It can be used to create an extrusion from a collection of faces. This extrusion can for example represent a wall finish in architectural design.

![](/images/Draft_facebinder_example.jpg)

Facebinder created from the faces of walls

## Použití

1. Vyberte plochy objektů (pro výběr několika ploch použijte CTRL)
2. Stiskněte tlačítko  ![](/images/Draft_Facebinder.png) [Facebinder](/Draft_Facebinder "Draft Facebinder"),nebo klávesy F, F

## Properties

See also: [Property editor](/Property_editor "Property editor").

![](/images/Draft_Facebinder_Corners.png)

On the left an extruded facebinder with closed corners (pink),  
on the right an extruded facebinder with open corners (orange).  
Closed corners are a V1.1 feature.

A Draft Facebinder object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Draft

* Údaje**Area** (`Area`): (read-only) specifies the total area of the linked faces of the facebinder.
* Údaje**Extrusion** (`Distance`): specifies the extrusion thickness of the facebinder. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1"): If the facebinder has connected faces and Údaje**Sew** is `true`, an attempt is made to close the corners of the extrusion. If this is not possible faces are extruded separately.
* Údaje**Faces** (`LinkSubList`): specifies the linked faces of the facebinder.
* Údaje**Offset** (`Distance`): specifies an offset distance to apply between the facebinder and the original faces, prior to extrusion.
* Údaje**Remove Splitter** (`Bool`): Specifies whether to remove splitter lines that divide co-planar faces of the facebinder.
* Údaje**Sew** (`Bool`): Specifies whether to perform a topological sewing operation on the facebinder.

### View

Draft

* Pohled**Pattern** (`Enumeration`): specifies the [Draft Pattern](/Draft_Pattern "Draft Pattern") with which to fill the faces of the facebinder. This property only works if Pohled**Display Mode** is `Flat Lines`.
* Pohled**Pattern Size** (`Float`): specifies the size of the [Draft Pattern](/Draft_Pattern "Draft Pattern").

## Scripting

## Skriptování

Nástroj Facebinder může být použit ve skriptech Pythonu a v [makrech](/Macros/cs "Macros/cs") použitím následující funkce:

```
facebinder = make_facebinder(selectionset)

```

* Vytvoří objekt facebinder z daného výběrového setu, což je seznam vybraných objektů, tak jak je vrací metoda FreeCADGui.Selection.getSelectionEx().
* Počítat se bude pouze s vybranými plochami.
* Vrací nově vytvořený objekt.

```
PropertyLinkSubList = [tuple1, tuple2, tuple3, ...]
PropertyLinkSubList = [(object1, list1), (object2, list2), (object3, list3), ...]
PropertyLinkSubList = [(object1, ['Face1', 'Face4', 'Face6']), ...]
PropertyLinkSubList = [(object1, ('Face1', 'Face4', 'Face6')), ...]

```

The thickness of the Facebinder can be added by overwriting its `Extrusion` attribute; the value is entered in millimeters.

The placement of the Facebinder can be changed by overwriting its `Placement` attribute, or by individually overwriting its `Placement.Base` and `Placement.Rotation` attributes.

Příklad:

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Facebinder/cs&oldid=1551494>"