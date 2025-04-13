---
title: Part Revolve
---

|                                          |
| ---------------------------------------- |
| Part Revolve                             |
| Menu location                            |
| Part → Revolve                           |
| Workbenches                              |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut                         |
| _None_                                   |
| Introduced in version                    |
| -                                        |
| See also                                 |
| _None_                                   |
|                                          |

## Description

Revolves the selected object around a given axis. The following shape types are allowed, and lead to the listed output shapes:

| Input shape | Output shape               |
| ----------- | -------------------------- |
| Vertex      | Edge                       |
| Edge        | Face                       |
| Wire        | Shell                      |
| Face        | Solid                      |
| Shell       | Compound solid (Compsolid) |

A [Sketch](/Sketcher_Workbench "Sketcher Workbench") can be used as well. Solids or compound solids are not allowed as input shapes. Normal compounds are currently not allowed either.

![](/src/assets/images/Dialog-revolve.png)

The Angle argument specifies how far the object is to be turned. The coordinates move the origin of the axis of revolving, relative to the origin of the coordinate system.

If you select a user defined axis, the numbers define the direction of the revolving axis with respect to the coordinate system: If the Z coordinate is 0 and the Y and X coordinate are non-zero, then the axis will lie in the X-Y-plane. Its angle is such that its tangent is the ratio of the given X and Y coordinates.

## Notes

- [App Link](/App_Link "App Link") objects linked to the appropriate object types can also be used as shapes and to specify the axis. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
- If the object to revolve intersects the rotation axis the operation will fail in most cases.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Revolve/en&oldid=1206667>"
