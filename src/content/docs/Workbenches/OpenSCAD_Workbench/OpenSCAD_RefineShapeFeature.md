---
title: OpenSCAD RefineShapeFeature
---

|                                                          |
| -------------------------------------------------------- |
| OpenSCAD RefineShapeFeature                              |
| Menu location                                            |
| OpenSCAD → Refine Shape Feature                          |
| Workbenches                                              |
| [OpenSCAD](/OpenSCAD_Workbench "OpenSCAD Workbench")     |
| Default shortcut                                         |
| _None_                                                   |
| Introduced in version                                    |
| -                                                        |
| See also                                                 |
| [Part RefineShape](/Part_RefineShape "Part RefineShape") |
|                                                          |

## Description

Cleans unnecessary lines. After a Boolean operation, some lines defining the previous form remain visible, this tool creates a copy of the totally cleaned.

![](/src/assets/images/PartRefineShape_it.png)

## Usage

1. Select the shape to be cleaned.
2. Click the OpenSCAD → Refine shape menu.

- A parent-object is created and totally cleaned, the original object is rendered hidden.

## Limitations

- The refinement algorithm only works on shells. Therefore it iterates over the shells of the input shape and then for each shell it creates a new shell with joined faces wherever possible. This means if your input shape is only a face, wire, edge or vertex then the algorithm does nothing.
- As opposed to ![](/src/assets/images/Part_RefineShape.svg) [Part RefineShape](/Part_RefineShape "Part RefineShape") in the ![](/src/assets/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench"), this feature **WILL** update when the underlying shapes are changed.

## Notes

- the function does not modify the existing shape, but returns a new shape.
- the function is normally used as last step in the modelling history.
- the function can help to get difficult fillets to work.
- the function is intended to stop 3D printers from printing unwanted edges.

Retrieved from "<http://wiki.freecad.org/index.php?title=OpenSCAD_RefineShapeFeature/en&oldid=1216218>"
