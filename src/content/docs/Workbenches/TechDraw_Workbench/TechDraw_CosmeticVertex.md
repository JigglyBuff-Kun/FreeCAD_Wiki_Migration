---
title: TechDraw CosmeticVertex
---

|                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------- |
| TechDraw CosmeticVertex                                                                                                      |
| Menu location                                                                                                                |
| TechDraw → Add Vertices → Add Cosmetic Vertex                                                                                |
| Workbenches                                                                                                                  |
| [TechDraw](/TechDraw_Workbench "TechDraw Workbench")                                                                         |
| Default shortcut                                                                                                             |
| _None_                                                                                                                       |
| Introduced in version                                                                                                        |
| 0.19                                                                                                                         |
| See also                                                                                                                     |
| [TechDraw Midpoint](/TechDraw_Midpoints "TechDraw Midpoints"), [TechDraw Quadrant](/TechDraw_Quadrants "TechDraw Quadrants") |
|                                                                                                                              |

## Description

The **TechDraw CosmeticVertex** tool adds a [vertex](/Glossary#V "Glossary"), which is not part of the source geometry, to a view. This vertex behaves like any other vertex and can be used for dimensioning.

![](/images/TechDraw_CosmeticVertex_Sample.png)

Cosmetic vertices used to create an otherwise impossible dimension

## Usage

1. Select a view.
2. There are several ways to invoke the tool:
   - Press the ![](/images/TechDraw_CosmeticVertex.svg) [Add Cosmetic Vertex](/TechDraw_CosmeticVertex "TechDraw CosmeticVertex") button.
   - Select the **TechDraw → Add Vertices → ![](/images/TechDraw_CosmeticVertex.svg) Add Cosmetic Vertex** option from the menu.
3. A task panel opens.
4. Optionally press the Point Picker button and pick a point on the page. Press the Escape picking button to cancel this operation.
5. Optionally change or specify the X and Y coordinates of the point. The coordinates are relative to the center of the view.
6. Press the OK button.

## Notes

- You cannot change the position of an existing cosmetic vertex. At the moment there is no other way than to delete it and create a new one.

## Properties

Cosmetic vertices have no properties of their own, as they are not document objects. They share color and size settings with regular geometry vertices.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Cosmetic vertices are available to [macros](/Macros "Macros") or the [Python](/Python "Python") console.

```
dvp = App.ActiveDocument.View
org = App.Vector(0.0, 0.0, 0.0)
dvp.makeCosmeticVertex(org);

#lines too!
start = FreeCAD.Vector (1.0, 5.0, 0.0)
end = FreeCAD.Vector(1.0, -5.0, 0.0)
style = 2
weight = 0.75
pyGreen = (0.0, 0.0, 1.0, 0.0)
dvp.makeCosmeticLine(start,end,style, weight, pyGreen)

```

Retrieved from "<http://wiki.freecad.org/index.php?title=TechDraw_CosmeticVertex/en&oldid=1391453>"
