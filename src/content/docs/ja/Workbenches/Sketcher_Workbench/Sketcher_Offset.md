---
title: スケッチャー・オフセット
---

|                                                      |
| ---------------------------------------------------- |
| Sketcher Offset                                      |
| Menu location                                        |
| Sketch → Sketcher tools → Offset geometry            |
| Workbenches                                          |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut                                     |
| Z T                                                  |
| Introduced in version                                |
| 1.0                                                  |
| See also                                             |
| _None_                                               |
|                                                      |

## Description

The ![](/images/Sketcher_Offset.svg) [Sketcher Offset](/Sketcher_Offset "Sketcher Offset") tool creates equidistant edges around selected edges.

![](/images/Sketcher_OffsetExample.png)

Equidistant edges around a closed (O) and an open (U) construction polyline

## Usage

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

Dim-OVP = Dimensional [On-View-Parameters](/Sketcher_Preferences#General "Sketcher Preferences").

1. Select one or more lines, circles and/or circular arcs.
2. There are several ways to invoke the tool:
   - Press the ![](/images/Sketcher_Offset.svg) [Offset geometry](/Sketcher_Offset "Sketcher Offset") button.
   - Select the **Sketcher → Sketcher tools → ![](/images/Sketcher_Offset.svg) Offset geometry** option from the menu.
   - Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_Offset.svg) Offset geometry** option from the context menu.
   - Use the keyboard shortcut: Z then T.
3. The cursor changes to a cross with the tool icon.
4. The **Offset parameters** section is added at the top of the [Sketcher Dialog](/Sketcher_Dialog "Sketcher Dialog").
5. Optionally press the U key or check the **Delete original geometries** checkbox to only keep the new outline.
6. Optionally press the J key or check the **Add offset constraint** checkbox to add a dimensional constraint between the offset outline and the original geometry.
7. Optionally press the M key or select from the dropdown list in the parameters section to change the tool mode:
   - ![](/images/Sketcher_OffsetArc.svg) **Arc**
   - ![](/images/Sketcher_OffsetIntersection.svg) **Intersection**
8. Pick a point to define the offset distance. Or with Dim-OVP: enter this distance.
9. The geometry is created and if **Add offset constraint** has been selected a dimensional constraint is added.

## Limitations

This tool has certain limitations, mainly due to [OCC](/OpenCASCADE "OpenCASCADE") issues:

- The following types of geometry are currently unsupported: ellipses, B-splines, hyperbolas and parabolas.
- Offsetting a single line can yield unexpected results.
- Open profiles are offset on both sides, creating a closed contour.
- External geometry can't be offset directly.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_Offset/ja&oldid=1535390>"
