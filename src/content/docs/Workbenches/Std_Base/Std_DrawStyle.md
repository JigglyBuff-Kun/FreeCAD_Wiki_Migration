---
title: Std DrawStyle
---

|                                                                |
| -------------------------------------------------------------- |
| Std DrawStyle                                                  |
| Menu location                                                  |
| View → Draw style → ...                                        |
| Workbenches                                                    |
| All                                                            |
| Default shortcut                                               |
| V 1 - V 7                                                      |
| Introduced in version                                          |
| -                                                              |
| See also                                                       |
| [Std SelBoundingBox](/Std_SelBoundingBox "Std SelBoundingBox") |
|                                                                |

## Description

The **Std DrawStyle** command can override the effect of the View**Display Mode** [property](/Property_editor "Property editor") of objects in a [3D view](/3D_view "3D view").

## Usage

1. There are several ways to invoke the command:
   - Click on the black down arrow to the right of the ![](/images/Std_DrawStyleAsIs.svg) [Draw style](/Std_DrawStyle "Std DrawStyle") button and select a style from the flyout.
   - In the menu go to **View → Draw style** and select a style.
   - In the [3D view](/3D_view "3D view") context menu go to **Draw style** and select a style.
   - Use one of the keyboard shortcut: V then 1, 2, 3, 4, 5, 6 or 7.

## Available draw styles

### As is

The **As is** style does not override the View**Display Mode** of objects.

![](/images/Std_DrawStyleAsIs_example.png)

4 identical objects each with a different Display Mode (from left to right: 'Points', 'Wireframe', 'Shaded' and 'Flat lines') with the 'As is' draw style applied

### Points

The **Points** style overrides the View**Display Mode** of objects. This style matches the 'Points' Display Mode. Vertices are displayed in solid colors. Edges and faces are not displayed.

![](/images/Std_DrawStylePoints_example.png)

The same objects with the 'Points' draw style applied

### Wireframe

The **Wireframe** style overrides the View**Display Mode** of objects. This style matches the 'Wireframe' Display Mode. Vertices and edges are displayed in solid colors. Faces are not displayed.

![](/images/Std_DrawStyleWireframe_example.png)

The same objects with the 'Wireframe' draw style applied

### Hidden line

The **Hidden line** style overrides the View**Display Mode** of objects. Objects are displayed as if converted to triangular meshes.

![](/images/Std_DrawStyleHiddenLine_example.png)

The same objects with the 'Hidden line' draw style applied

### No shading

The **No shading** style overrides the View**Display Mode** of objects. Vertices, edges and faces are displayed in solid colors.

![](/images/Std_DrawStyleNoShading_example.png)

The same objects with the 'No shading' draw style applied

### Shaded

The **Shaded** style overrides the View**Display Mode** of objects. This style matches the 'Shaded' Display Mode. Vertices and edges are not displayed. Faces are illuminated depending on their orientation.

![](/images/Std_DrawStyleShaded_example.png)

The same objects with the 'Shaded' draw style applied

### Flat lines

The **Flat lines** style overrides the View**Display Mode** of objects. This style matches the 'Flat lines' Display Mode. Vertices and edges are displayed in solid colors. Faces are illuminated depending on their orientation.

![](/images/Std_DrawStyleFlatLines_example.png)

The same objects with the 'Flat lines' draw style applied

## Notes

- Objects in a [3D view](/3D_view "3D view") also have a View**Draw Style** property. This property controls the linetype used for the edges. The Std DrawStyle command does not override this property.
- For a macro to toggle between two draw styles see: [Macro Toggle Drawstyle](/Macro_Toggle_Drawstyle "Macro Toggle Drawstyle").

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_DrawStyle/en&oldid=1449680>"
