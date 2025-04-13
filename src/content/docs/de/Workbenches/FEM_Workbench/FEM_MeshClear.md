---
title: FEM NetzLöschen
---
|  |
| --- |
| FEM NetzLöschen |
| Menüeintrag |
| Kontextmenü des Mesh-Objekts oder der Baumansicht → FEM-Netz löschen |
| Arbeitsbereich |
| [FEM](/FEM_Workbench/de "FEM Workbench/de") |
| Standardtastenkürzel |
| *Keiner* |
| Eingeführt in Version |
| - |
| Siehe auch |
| [FEM Tutorium](/FEM_tutorial/de "FEM tutorial/de") |
|  |

## Beschreibung

Enables the user to reinitialize the mesh from the FreeCAD FEM mesh object. The mesh still exists but does not have any vertices, edges, faces or elements. The meshing information, Netgen/Gmsh parameters, mesh regions, mesh groups and mesh boundary layer remain in the Model Tree, which means the mesh can be reproduced later. The main use of this function is to lighten the FreeCAD file, either to improve performance when using FreeCAD, to save disk space or enable easy transfer of files without losing meshing data.

## Anwendung

1. Eins der ![](/images/FEM_MeshNetgenFromShape.svg) [Netgen-](/FEM_MeshNetgenFromShape "FEM MeshNetgenFromShape") oder ![](/images/FEM_MeshGmshFromShape.svg) [Gmsh-](/FEM_MeshGmshFromShape "FEM MeshGmshFromShape")FEM-Mesh-Objekte mit der rechten Maustaste in der [Baumansicht](/Tree_view/de "Tree view/de") anklicken.
2. Den Menüeintrag **![](/images/FEM_MeshClear.svg) FEM-Netz löschen** des Kontextmenüs auswählen.

## Hinweise

Die Objekte in der Baumansicht bleiben erhalten, da sie die Vernetzungsdaten repräsentieren, aber das eigentliche Netz wird aus der FreeCAD-Datei entfernt.

Retrieved from "<http://wiki.freecad.org/index.php?title=FEM_MeshClear/de&oldid=1460583>"