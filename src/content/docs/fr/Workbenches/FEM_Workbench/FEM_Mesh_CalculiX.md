---
title: FEM Maillage avec CalculiX
---
## Types d'éléments MEF dans CalculiX

Pour plus d'informations détaillées de FreeCAD FEM éléments voir [FEM Maillage](/FEM_Mesh/fr "FEM Mesh/fr") et [FEM Types d'éléments](/FEM_Element_Types/fr "FEM Element Types/fr"). Pour les questions spécifiques à CalculiX, vous pouvez essayer [Discourse group](https://calculix.discourse.group) ou [Discord channel](https://discord.gg/yyuQQg5).

### Élément Segment

**Élément de segment de FreeCAD à CalculiX -- affectation des nœuds**

|  |  |
| --- | --- |
| Nœuds FreeCAD seg2 | Nœuds FreeCAD seg3 |
|  |  |
| Nœuds CalculiX seg2 (B31) | Nœuds CalculiX seg3 (B32) |
|  |  |
| FreeCAD → CalculiX, Nœuds |  |
| N1, N2 | N1, N3, N2 |

### Élément Triangle

**Élément de triangle de FreeCAD à CalculiX -- affectation des nœuds**

|  |  |
| --- | --- |
| Nœuds FreeCAD tria3 | Nœuds FreeCAD tria6 |
|  |  |
| Nœuds CalculiX tria3 (S3) | Nœuds CalculiX tria6 (S6) |
|  |  |
| FreeCAD → CalculiX, Nœuds |  |
| N1, N2, N3 | N1, N2, N3, N4, N5, N6 |

### Élément quadrangle

**Élément quadrangle de FreeCAD à CalculiX -- affectation des nœuds**

|  |  |
| --- | --- |
| Nœuds FreeCAD quad4 | Nœuds FreeCAD quad8 |
|  |  |
| Nœuds CalculiX quad4 (S4) | Nœuds CalculiX quad8 (S8) |
|  |  |
| FreeCAD → CalculiX, Nœuds |  |
| N1, N2, N3, N4 | N1, N2, N3, N4, N5, N6, N7, N8 |

### Élément Tétraèdre

L'ordre de nœud suivant n'est pas implémenté ! TODO: vérifier l'ordre des noeuds (n'oubliez pas getccxVolumesByFace()).

**Élément de tétraèdre de FreeCAD à CalculiX -- affectation des nœuds**

|  |  |
| --- | --- |
| Nœuds FreeCAD tetra4 | Nœuds FreeCAD tetra10 |
|  |  |
| Nœuds CalculiX tetra4 (C3D4) | Nœuds CalculiX tetra10 (C3D10) |
|  |  |
| FreeCAD → CalculiX, Nœuds |  |
| N2, N3, N4, N1 | N2, N3, N4, N1, N6, N10, N9, N5, N7, N8 |

### Élément Hexaèdre

**Élément de hexaèdre de FreeCAD à CalculiX -- affectation des nœuds**

|  |  |
| --- | --- |
| Nœuds FreeCAD hexa8 | Nœuds FreeCAD hexa20 |
|  |  |
| Nœuds CalculiX hexa8 (C3D8) | Nœuds CalculiX hexa20 (C3D20) |
|  |  |
| FreeCAD → CalculiX, Nœuds |  |
| N6, N7, N8, N5, N2, N3, N4, N1 | N6, N7, N8, N5, N2, N3, N4, N1, N14, N15, N16, N13, N10, N11, N12, N9, N18, N19, N20, N17 |

### Élément Pentaèdre

**Élément de pentaèdre de FreeCAD à CalculiX -- affectation des nœuds**

|  |  |
| --- | --- |
| Nœuds FreeCAD penta6 | Nœuds FreeCAD penta15 |
|  |  |
| Nœuds CalculiX penta6 (C3D6) | Nœuds CalculiX penta15 (C3D15) |
|  |  |
| FreeCAD → CalculiX, Nœuds |  |
| N5, N6, N4, N2, N3, N1 | N5, N6, N4, N2, N3, N1, N11, N12, N10, N8, N9, N7, N14, N15, N13 |

## En relation

* La page [FEM Calculix](/FEM_CalculiX/fr "FEM CalculiX/fr")
* [Préférences de CalculiX](/FEM_Preferences/fr#CalculiX "FEM Preferences/fr") dans le menu des préférences de l'atelier FEM.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_Mesh_CalculiX/fr&oldid=1334305>"