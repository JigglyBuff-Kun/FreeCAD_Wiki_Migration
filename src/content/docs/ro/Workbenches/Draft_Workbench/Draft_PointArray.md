---
title: Draft PointArray
---
|  |
| --- |
| Draft PointArray |
| Menu location |
| Draft → PointArray |
| Workbenches |
| [Draft](/Draft_Workbench "Draft Workbench"), [Arch](/Arch_Workbench "Arch Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| 0.18 |
| See also |
| [Draft Array](/Draft_Array "Draft Array"), [Draft PathArray](/Draft_PathArray "Draft PathArray") |
|  |

## Descriere

Instrumentul PointArray plasează copii ale unei forme selectate de-a lungul diferitelor puncte selectate.

The base object can be a 2D object created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also a 3D object such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

The point object can be any object with a shape and vertices (including a [Std Part](/Std_Part "Std Part") containing one or more of such objects), as well as a [mesh](/Mesh_Workbench "Mesh Workbench") and a [point cloud](/Points_Workbench "Points Workbench"). Duplicate points in the point object are filtered out.

![](/images/Draft_PointArray_Example.png)

Draft PointArray

## Cum se folosește

1. Creați un obiect de formă pe care doriți să îl distribuiți. Veți obține cele mai bune rezultate dacă obiectul dvs. este centrat în jurul originii "" ', adică dacă Date **position** este [0, 0, 0].
2. Poziționați punctele folosind Punct de tragere.
3. Selectați punctele și creați o combinație a acestora utilizând [Draft Upgrade](/Draft_Upgrade "Draft Upgrade").
4. Mai întâi selectați forma, apoi noul compus punct, apoi apăsați butonul  ![](/images/Draft_PointArray.svg) [Draft PointArray](/Draft_PointArray "Draft PointArray").

## Notes

* Fused Link arrays are not displayed properly, in the 3D view their elements always appear unfused.

## Proprietăți

See also: [Property editor](/Property_editor "Property editor").

A Draft PointArray object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties (with the exception of some View properties that are not inherited by Link arrays). The following properties are additional unless otherwise stated:

### Data

Link

The properties in this group are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Date**Scale** (`Float`)
* Date (Hidden)**Scale Vector** (`Vector`)
* Date**Scale List** (`VectorList`)
* Date (Hidden)**Visibility List** (`BoolList`)
* Date (Hidden)**Placement List** (`PlacementList`)
* Date (Hidden)**Element List** (`LinkList`)
* Date (Hidden)**\_ Link Touched** (`Bool`)
* Date (Hidden)**\_ Child Cache** (`LinkList`)
* Date (Hidden)**\_ Link Owner** (`Integer`)
* Date (Hidden)**Colored Elements** (`LinkSubHidden`)
* Date**Link Copy On Change** (`Enumeration`)
* Date**Link Transform** (`Bool`)

Draft

* Date**Always Sync Placement** (`Bool`)

Objects

* Date **Base**: Obiectul formei
* Date **Count**: Numărul de copiere a formei (numai pentru citire)
* Date **PointList**: un compus de puncte

### View

Link

The properties in this group, with the exception of the inherited property, are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Vizualizare**Draw Style** (`Enumeration`)
* Vizualizare**Line Width** (`FloatConstraint`)
* Vizualizare**Override Material** (`Bool`)
* Vizualizare**Point Size** (`FloatConstraint`)
* Vizualizare**Selectable** (`Bool`): this is an inherited property that appears in the Selection group for other arrays
* Vizualizare**Shape Material** (`Material`)

Base

The properties in this group, with the exception of the inherited property, are only available for Link arrays. See [Std LinkMake](/Std_LinkMake#Properties "Std LinkMake") for more information.

* Vizualizare (Hidden)**Child View Provider** (`PersistentObject`)
* Vizualizare (Hidden)**Material List** (`MaterialList`)
* Vizualizare (Hidden)**Override Color List** (`ColorList`)
* Vizualizare (Hidden)**Override Material List** (`BoolList`)
* Vizualizare (Hidden)**Proxy** (`PythonObject`): this is an inherited property.

Display Options

The properties in this group are inherited properties. See [Part Feature](/Part_Feature#Properties "Part Feature") for more information.

* Vizualizare**Bounding Box** (`Bool`): this property is not inherited by Link arrays.
* Vizualizare**Display Mode** (`Enumeration`): for Link arrays it can be `Link` or `ChildView`. For other arrays it can be: `Flat Lines`, `Shaded`, `Wireframe` or `Points`
* Vizualizare**Show In Tree** (`Bool`)
* Vizualizare**Visibility** (`Bool`)

Draft

* Vizualizare**Pattern** (`Enumeration`): not used.
* Vizualizare**Pattern Size** (`Float`): not used.

Object style

The properties in this group are not inherited by Link arrays.

## Scripting

## Scrip-Programare

Instrumentul PointArray poate fi utilizat în [macros](/Macros "Macros") și de la consola [Python](/Python "Python") utilizând următoarele funcții:

```
point_array = make_point_array(base_object, point_object, extra=None, use_link=True)

```

* `base` este forma de copiat și  `ptlst` este un obiect cu geometrie, legături sau componente care definesc poziția copiilor.

Exempluː

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon = Draft.make_polygon(3, radius=500.0)

p1 = Draft.make_point(App.Vector(1500, 0, 0))
p2 = Draft.make_point(App.Vector(2500, 0, 0))
p3 = Draft.make_point(App.Vector(2000, 1000, 0))

compound = doc.addObject("Part::Compound", "Compound")
compound.Links = [p1, p2, p3]

point_array = Draft.make_point_array(polygon, compound)
doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_PointArray/ro&oldid=1557851>"