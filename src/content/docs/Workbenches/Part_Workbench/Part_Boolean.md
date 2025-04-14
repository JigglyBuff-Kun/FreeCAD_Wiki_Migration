---
title: Part Boolean
---

|                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Part Boolean                                                                                                                                                   |
| Menu location                                                                                                                                                  |
| Part → Boolean → Boolean...                                                                                                                                    |
| Workbenches                                                                                                                                                    |
| [Part](/Part_Workbench "Part Workbench")                                                                                                                       |
| Default shortcut                                                                                                                                               |
| _None_                                                                                                                                                         |
| Introduced in version                                                                                                                                          |
| -                                                                                                                                                              |
| See also                                                                                                                                                       |
| [Part Cut](/Part_Cut "Part Cut"), [Part Fuse](/Part_Fuse "Part Fuse"), [Part Common](/Part_Common "Part Common"), [Part Section](/Part_Section "Part Section") |
|                                                                                                                                                                |

## Description

![](/images/Part_Boolean.svg) [Part Boolean](/Part_Boolean "Part Boolean") is a generic all-in-one boolean tool. It allows you to specify the objects and operation to perform via a single dialog.

For quicker access to these operations, use ![](/images/Part_Cut.svg) [Part Cut](/Part_Cut "Part Cut"), ![](/images/Part_Fuse.svg) [Part Fuse](/Part_Fuse "Part Fuse"), ![](/images/Part_Common.svg) [Part Common](/Part_Common "Part Common") and ![](/images/Part_Section.svg) [Part Section](/Part_Section "Part Section").

![](/images/PartBooleansDialog.png)

Dialog to select objects and perform boolean operations with them.

## Usage

See the individual commands:

- ![](/images/Part_Cut.svg) [Part Cut](/Part_Cut "Part Cut")
- ![](/images/Part_Fuse.svg) [Part Fuse](/Part_Fuse "Part Fuse")
- ![](/images/Part_Common.svg) [Part Common](/Part_Common "Part Common")
- ![](/images/Part_Section.svg) [Part Section](/Part_Section "Part Section")

## Coplanar problems

The boolean operations are performed by the internal geometry kernel, [OpenCASCADE Technology](/OpenCASCADE "OpenCASCADE") (OCCT). This library sometimes has problems producing boolean results when the input objects share an edge or a face. To be sure the boolean operation is successful the recommendation is that the shapes intersect each other clearly; this means that in most cases, one shape should protrude or be larger in size than the other shape.

In cases of coplanarity, even if the first boolean operation succeeds, subsequent boolean operations may fail. In this case, the problem may not be in the last operation done, but in the older ones, that is, in the nested operations as indicated in the [tree view](/Tree_view "Tree view"). To troubleshoot these issues, it is recommended to use the ![](/images/Part_CheckGeometry.svg) [Part CheckGeometry](/Part_CheckGeometry "Part CheckGeometry") tool to inspect all objects for problems.

![](/images/Part_Boolean_cut_coplanar_1.png)

![](/images/Part_Boolean_cut_coplanar_2.png)

Left: shapes that share a face, a boolean cut may produce incorrect results. Right: shapes that intersect each other clearly, the boolean cut will be successful in most cases.

![](/images/Part_Boolean_fusion_coplanar_1.png)

![](/images/Part_Boolean_fusion_coplanar_2.png)

Left: shapes that share a face, a boolean union may produce incorrect results. Right: shapes that intersect each other clearly, the boolean union will be successful in most cases.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_Boolean/en&oldid=1466660>"
