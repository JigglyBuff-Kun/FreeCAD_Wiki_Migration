---
title: Espaço
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch Space |
| Menu location |
| 3D/BIM → Space |
| Workbenches |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut |
| S P |
| Introduced in version |
| 0.14 |
| See also |
| *None* |
|  |

## Description

The **Arch Space** tool allows you to define an empty volume, either by basing it on a solid shape, or by defining its boundaries, or a mix of both. If it is based solely on boundaries, the volume is calculated by starting from the bounding box of all the given boundaries, and subtracting the spaces behind each boundary. The Space object always defines a solid volume. The floor area of a space object, calculated by intersecting a horizontal plane at the center of mass of the space volume, can also be displayed.

![](/images/Arch_Space_example.jpg)

Space object created from an existing solid object, then two wall faces are added as boundaries.

## Utilização

1. Select an existing solid object, or faces on boundary objects.
2. Invoke the command using several methods:
   * Pressing the ![](/images/Arch_Space.svg) [Space](/Arch_Space "Arch Space") button in the toolbar.
   * Using the S then P keyboard keys
   * Using the **3D/BIM → Space** entry from the top menu

Once a space has been created, you can also add or remove boundaries to/from it using the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") or ![](/images/Arch_Remove.svg) [Remove](/Arch_Remove "Arch Remove") buttons in the toolbar. Alternatively, you can also do this in the Tasks panel or in the [Property editor](/Property_editor "Property editor").

As an example, to add a boundary, given a space that intersects a wall:

1. Select the wall face that intersects the space. That will be the new boundary.
2. Keeping the Ctrl key pressed, select the space.
3. Press the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") button in the toolbar.
4. The wall face now defines a new boundary, and the space will only extend up to the wall face in the direction facing it.

The same example: add a boundary, given a space that intersects a wall. This time we're using the Tasks panel:

1. Double-click the space object in the Tree View. This will activate its Tasks panel.
2. Select the wall face that intersects the space. That will be the new boundary.
3. Press the ![](/images/Arch_Add.svg) [Add](/Arch_Add "Arch Add") button in the Tasks panel. The name of the wall face will be displayed in the "Space boundaries" section there.
4. Press the OK button in the Tasks panel.
5. The wall face now defines a new boundary, and the space will only extend up to the wall face in the direction facing it.

Yet another alternative: add a boundary, given a space that intersects a wall. This time we're using the Property editor:

1. Navigate to the Property View and locate the Dados**Boundaries** property under the "Space" group.
2. On the right hand side of the Dados**Boundaries** property, click on the ellipsis button.
3. Select the wall face that intersects the space. That will be the new boundary. The "Link" dialog will reflect your selection.
4. Press the OK button in the "Link" dialog.
5. The wall face now defines a new boundary, and the space will only extend up to the wall face in the direction facing it.

### Limitações

* The boundaries properties is currently not editable via GUI.
* See the [forum announcement](http://forum.freecadweb.org/viewtopic.php?f=9&t=4275).

## Propriedades

* Dados**Base**: The base object, if any (must be a solid)
* Dados**Boundaries**: A list of optional boundary elements
* Dados**Area**: The computed floor area of this space
* Dados**FinishFloor**: The finishing of the floor of this space
* Dados**FinishWalls**: The finishing of the walls of this space
* Dados**FinishCeiling**: The finishing of the ceiling of this space
* Dados**Group**: Objects that are included inside this space, such as furniture
* Dados**SpaceType**: The type of this space
* Dados**FloorThickness**: The thickness of the floor finish
* Dados**NumberOfPeople**: The number of people who typically occupy this space
* Dados**LightingPower**: The electric power needed to light this space in Watts
* Dados**EquipmentPower**: The electric power needed by the equipment of this space in Watts
* Dados**AutoPower**: If True, Equipment Power will be automatically filled by the equipment included in this space
* Dados**Conditioning**: The type of air conditioning of this space
* Dados**Internal**: Specifies if this space is internal or external

* Vista**Text**: The text to show. Use $area, $label, $floor, $walls, $ceiling to insert the respective data
* Vista**FontName**: The name of the font
* Vista**TextColor**: The color of the text
* Vista**FontSize**: The size of the text
* Vista**FirstLine**: The size of the first line of text (multiplies the font size. 1 = same size, 2 = double size, etc..)
* Vista**LineSpacing**: The space between the lines of text
* Vista**TextPosition**: The position of the text. Leave (0,0,0) for automatic position
* Vista**TextAlign**: The justification of the text
* Vista**Decimals**: The number of decimals to use for calculated texts
* Vista**ShowUnit**: Show the unit suffix or not

## Opções

* To create zones that group several spaces, use an [Arch BuildingPart](/Arch_BuildingPart "Arch BuildingPart") and set its IFC type to "Spatial Zone".
* The Space object has the same display modes as other Arch and Part objects, with one more, called **Footprint**, that displays only the bottom face of the space.

## Scripting

*See also:* [Arch API](/Arch_API "Arch API") and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

The Space tool can be used in [macros](/Macros "Macros") and from the [Python](/Python "Python") console by using the following function:

```
Space = makeSpace(objects=None, baseobj=None, name="Space")

```

* Creates a `Space` object from the given `objects` or `baseobj`, which can be
  + one document object, in which case it becomes the base shape of the Space object, or
  + a list of selection objects as returned by `FreeCADGui.Selection.getSelectionEx()`, or
  + a list of tuples `(object, subobjectname)`

Example:

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

After a space object is created, selected faces can be added to it with the following code:

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

Boundaries can also be removed, again by selecting the indicated faces:

```
selection = FreeCADGui.Selection.getSelectionEx()
Arch.removeSpaceBoundaries(Space, selection)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Space/pt-br&oldid=1559091>"