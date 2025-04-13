---
title: FEM Mesh CalculiX
---
## Tipi di elementi FEM in CalculiX

Per informazioni dettagliate sugli elementi FEM di FreeCAD, vedere [Mesh FEM](/FEM_Mesh/it "FEM Mesh/it") e [Tipi di elementi FEM](/FEM_Element_Types/it "FEM Element Types/it").

### Elemento segmento

**Elemento segmento da FreeCAD a CalculiX - Assegnazione nodo**

|  |  |
| --- | --- |
| seg2 FreeCAD nodes | seg3 FreeCAD nodes |
|  |  |
| seg2 (B31) CalculiX nodes | seg3 (B32) CalculiX nodes |
|  |  |
| FreeCAD → CalculiX, Nodes |  |
| N1, N2 | N1, N3, N2 |

### Elemento Triangolo

**Elemento triangolo da FreeCAD a CalculiX - Assegnazione nodo**

|  |  |
| --- | --- |
| tria3 FreeCAD nodes | tria6 FreeCAD nodes |
|  |  |
| tria3 (S3) CalculiX nodes | tria6 (S6) CalculiX nodes |
|  |  |
| FreeCAD → CalculiX, Nodes |  |
| N1, N2, N3 | N1, N2, N3, N4, N5, N6 |

### Elemento Quadrangolo

**Elemento quadratico da FreeCAD a CalculiX - Assegnazione nodo**

|  |  |
| --- | --- |
| quad4 FreeCAD nodes | quad8 FreeCAD nodes |
|  |  |
| quad4 (S4) CalculiX nodes | quad8 (S8) CalculiX nodes |
|  |  |
| FreeCAD → CalculiX, Nodes |  |
| N1, N2, N3, N4 | N1, N2, N3, N4, N5, N6, N7, N8 |

### Elemento Tetraedro

Il seguente ordine di nodo non è implementato ! TODO: verify node order (do not forget getccxVolumesByFace()).

**Elemento tetraedro da FreeCAD a CalculiX - Assegnazione nodo**

|  |  |
| --- | --- |
| tetra4 FreeCAD nodes | tetra10 FreeCAD nodes |
|  |  |
| tetra4 (C3D4) CalculiX nodes | tetra10 (C3D10) CalculiX nodes |
|  |  |
| FreeCAD → CalculiX, Nodes |  |
| N2, N3, N4, N1 | N2, N3, N4, N1, N6, N10, N9, N5, N7, N8 |

### Elemento Esaedro

**Elemento esaedro da FreeCAD a CalculiX - Assegnazione nodo**

|  |  |
| --- | --- |
| hexa8 FreeCAD nodes | hexa20 FreeCAD nodes |
|  |  |
| hexa8 (C3D8) CalculiX nodes | hexa20 (C3D20) CalculiX nodes |
|  |  |
| FreeCAD → CalculiX, Nodes |  |
| N6, N7, N8, N5, N2, N3, N4, N1 | N6, N7, N8, N5, N2, N3, N4, N1 , N14, N15, N16, N13, N10, N11, N12, N9, N18, N19, N20, N17 |

### Elemento Pentaedro

**Elemento pentaedro da FreeCAD a CalculiX - Assegnazione nodo**

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

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Mesh_CalculiX/it&oldid=1334219>"