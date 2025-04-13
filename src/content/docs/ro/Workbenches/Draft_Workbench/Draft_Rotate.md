---
title: Rotire
---
|  |
| --- |
| Draft Rotate |
| poziția meniului |
| Draft → Rotate |
| Ateliere |
| [Draft](/Draft_Workbench/ro "Draft Workbench/ro"), [Arch](/Arch_Workbench/ro "Arch Workbench/ro") |
| scurtătură |
| R O |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| *Nici unul* |
|  |

## Descriere

Acest instrument rotește sau copiază obiectele selectate cu un unghi dat în jurul unui punct de pe [work plane](/Draft_SelectPlane "Draft SelectPlane") curent. Dacă nu este selectat niciun obiect, veți fi invitat să selectați unul ..

The command can be used on 2D objects created with the [Draft Workbench](/Draft_Workbench "Draft Workbench") or [Sketcher Workbench](/Sketcher_Workbench "Sketcher Workbench"), but also on many 3D objects such as those created with the [Part Workbench](/Part_Workbench "Part Workbench"), [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") or [BIM Workbench](/BIM_Workbench "BIM Workbench").

![](/images/Draft_Rotate_example.jpg)

Rotating an object around a center point

## Cum se folosește

See also: [Draft Snap](/Draft_Snap "Draft Snap") and [Draft Constrain](/Draft_Constrain "Draft Constrain").

1. Select objects you wish to rotate or copy
2. Press the ![](/images/Draft_Rotate.png) [Draft Rotate](/Draft_Rotate "Draft Rotate") button, or press R then O keys
3. Click a center point on the 3D view, or type a coordinate
4. Click a second point on the 3D view, or give a reference angle
5. Click a third point on the 3D view, or give a rotation angle

## Opţiuni

The single character keyboard shortcuts available in the task panel can be changed. See [Draft Preferences](/Draft_Preferences "Draft Preferences"). The shortcuts mentioned here are the default shortcuts (for version 1.0).

* Press X, Y or Z after a point to constrain the next point on the given axis.
* To enter coordinates manually, simply enter the numbers, then press ENTER between each X, Y and Z component.
* Press T or click the checkbox to check/uncheck the **Continue** button. If continue mode is on, the Rotate tool will restart after you finish or close it, allowing you to rotate or copy the objects another time without pressing the Rotate button again.
* Pressing ALT or C or clicking the **Copy** button will make a copy of the objects, instead of rotating them. If you keep ALT pressed after clicking the third point, you will be able to place more copies, until you release the ALT key.
* Press CTRL while drawing to force [snapping](/Draft_Snap "Draft Snap") your point to the nearest snap location, independently of the distance.
* Press SHIFT while drawing to [constrain](/Draft_Constrain "Draft Constrain") your next point horizontally or vertically in relation to the rotation center.
* Press ESC or the **Cancel** button to abort the current command.

## Notes

* An Object that is [attached](/Part_EditAttachment "Part EditAttachment") cannot be rotated with the Draft Rotate command. To rotate it either its Date**Support** object has to be rotated, or its Date**Attachment Offset** has to be changed.
* The base angle concept can be somewhat confusing. Especially since it works only when selecting points, not when specifying the angle using the input field. An explanation of how it works, with an example, can be found in [this forum thread](https://forum.freecad.org/viewtopic.php?p=736674#p736674).

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* To reselect the base objects after copying objects: **Edit → Preferences... → Draft → General → Select base objects after copying**.

## Scripting

## Script

The Rotate tool can by used in [macros](/Macros "Macros") and from the python console by using the following function:

```
rotated_list = rotate(objectslist, angle, center=Vector(0,0,0), axis=Vector(0,0,1), copy=False)

```

* Rotates the given object or the objects contained in the given list with the given angle around the given center if provided, using axis as a rotation axis.
* If axis is omitted, the rotation will be around the vertical Z axis.
* If copymode is True, the actual objects are not moved, but copies are created instead.
* Returns the objects (or their copies is copymode was True).

Exempluː

```
import FreeCAD as App
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(3, radius=300)
Draft.move(polygon1, App.Vector(1000, 0, 0))

# Rotation around the origin
angle1 = 45
rot2 = Draft.rotate(polygon1, angle1, copy=True)
rot3 = Draft.rotate(polygon1, 2*angle1, copy=True)
rot4 = Draft.rotate(polygon1, 4*angle1, copy=True)

polygon2 = Draft.make_polygon(3, radius=1000)
polygon3 = Draft.make_polygon(5, radius=500)
Draft.move(polygon2, App.Vector(2000, 0, 0))
Draft.move(polygon3, App.Vector(2000, 0, 0))

# Rotation around another point
angle2 = 60
cen = App.Vector(3100, 0, 0)
list2 = [polygon2, polygon3]
rot_list2 = Draft.rotate(list2, angle2, center=cen, copy=True)
rot_list3 = Draft.rotate(list2, 2*angle2, center=cen, copy=True)
rot_list4 = Draft.rotate(list2, 4*angle2, center=cen, copy=True)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_Rotate/ro&oldid=1473120>"