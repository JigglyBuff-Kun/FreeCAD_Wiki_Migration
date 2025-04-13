---
title: FEM Mesh CalculiX/de
---
## FEM element types in CalculiX

For detailed information on FreeCAD FEM elements see [FEM Mesh](/FEM_Mesh "FEM Mesh") and [FEM Element Types](/FEM_Element_Types "FEM Element Types"). For CalculiX specific questions you may try the [Discourse group](https://calculix.discourse.group) or the [Discord channel](https://discord.gg/yyuQQg5).

### Segmentelement

**Segment element from FreeCAD to CalculiX -- node assignment**

|  |  |
| --- | --- |
| seg2 FreeCAD nodes | seg3 FreeCAD nodes |
|  |  |
| seg2 (B31) CalculiX nodes | seg3 (B32) CalculiX nodes |
|  |  |
| FreeCAD → CalculiX, Nodes |  |
| N1, N2 | N1, N3, N2 |

### Dreieckelement

**Triangle element from FreeCAD to CalculiX -- node assignment**

|  |  |
| --- | --- |
| tria3 FreeCAD nodes | tria6 FreeCAD nodes |
|  |  |
| tria3 (S3) CalculiX nodes | tria6 (S6) CalculiX nodes |
|  |  |
| FreeCAD → CalculiX, Nodes |  |
| N1, N2, N3 | N1, N2, N3, N4, N5, N6 |

### Viereckelement

**Quadrangle element from FreeCAD to CalculiX -- node assignment**

|  |  |
| --- | --- |
| quad4 FreeCAD nodes | quad8 FreeCAD nodes |
|  |  |
| quad4 (S4) CalculiX nodes | quad8 (S8) CalculiX nodes |
|  |  |
| FreeCAD → CalculiX, Nodes |  |
| N1, N2, N3, N4 | N1, N2, N3, N4, N5, N6, N7, N8 |

### Tetraederelement

The following node order is not implemented ! TODO: verify node order (do not forget getccxVolumesByFace()).

**Tetrahedron element from FreeCAD to CalculiX -- node assignment**

|  |  |
| --- | --- |
| tetra4 FreeCAD nodes | tetra10 FreeCAD nodes |
|  |  |
| tetra4 (C3D4) CalculiX nodes | tetra10 (C3D10) CalculiX nodes |
|  |  |
| FreeCAD → CalculiX, Nodes |  |
| N2, N3, N4, N1 | N2, N3, N4, N1, N6, N10, N9, N5, N7, N8 |

### Hexaederelement

**Hexahedron element from FreeCAD to CalculiX -- node assignment**

|  |  |
| --- | --- |
| hexa8 FreeCAD nodes | hexa20 FreeCAD nodes |
|  |  |
| hexa8 (C3D8) CalculiX nodes | hexa20 (C3D20) CalculiX nodes |
|  |  |
| FreeCAD → CalculiX, Nodes |  |
| N6, N7, N8, N5, N2, N3, N4, N1 | N6, N7, N8, N5, N2, N3, N4, N1, N14, N15, N16, N13, N10, N11, N12, N9, N18, N19, N20, N17 |

### Pentaederelement

**Pentahedron element from FreeCAD to CalculiX -- node assignment**

|  |  |
| --- | --- |
| penta6 FreeCAD nodes | penta15 FreeCAD nodes |
|  |  |
| penta6 (C3D6) CalculiX nodes | penta15 (C3D15) CalculiX nodes |
|  |  |
| FreeCAD → CalculiX, Nodes |  |
| N5, N6, N4, N2, N3, N1 | N5, N6, N4, N2, N3, N1, N11, N12, N10, N8, N9, N7, N14, N15, N13 |

## Related

* [FEM CalculiX](/FEM_CalculiX "FEM CalculiX") page
* [CalculiX preferences](/FEM_Preferences#CalculiX "FEM Preferences") dialog menu in the FEM Workbench preferences menu

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Mesh_CalculiX/de&oldid=1342004>"