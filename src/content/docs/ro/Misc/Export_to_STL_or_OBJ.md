---
title: Exportul ca STL ori OBJ
---
|  |
| --- |
| Tutorial |
| Topic |
| Export to STL or OBJ |
| Level |
| Beginner |
| Time to complete |
| 20 minutes |
| Authors |
| r-frank |
| FreeCAD version |
| 0.16.6703 |
| Example files |
|  |
| See also |
| *None* |
|  |

## Introduction

## Introducere

În acest tutorial vom discuta cum să exportați fișiere STL / OBJ din FreeCAD.
Din moment ce formatul STL / OBJ-ul este compus din ochiuri este adimensional, FreeCAD va presupune că
unitățile utilizate în model sunt în mm.
Dacă nu este cazul, trebuie să vă scalați modelul.

## Sample part

## Model de Piesă

Puteți utiliza propriul fișier FreeCAD, dar puteți crea, de asemenea, un fișier de test rapid de către

* Creați un nou document
* Comutați pe Atelierul Part
* Insert a cube by clicking on ![](/images/Part_Box.png)
* Insert a cone by clicking on ![](/images/Part_Cone.png)
* Select all two objects in the tree view
* Apply a fusion by clicking on ![](/images/Part_Fuse.png)
* Salvați fișierul

## Export Method 1: Using "File → Export"

1. With the default settings, this method creates a mesh with noticeably jagged curves. To get a smoother finish when e.g. 3D printing, the mesh resolution should be configured:
   1. Make sure the ![](/images/Workbench_Mesh.svg) [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") has been loaded (it is not loaded by default).
   2. Go to **Edit → Preferences... → Import-Export → Mesh Formats**.
   3. Change **Maximum mesh deviation**. A lower value will produce a mesh with a higher resolution.
2. Select the solid to be exported in the tree view.
3. Choose **File → Export...** and set the file type to **STL mesh (\*.stl \*.ast)**.
4. Enter your file name. The default extension is .stl. You must include the extension .ast to produce an .ast file.
5. Choose Save.

## Export Method 2: Using the Mesh Workbench in FreeCAD

## Metoda 2 de Export: folosirea atelierului Plase în FreeCAD

* Comutați pe Atelierul Mesh
* Selectați în vederea arborescentă solidul care va fi transformat în plasă
* Choose  Meshes → ![](/images/Mesh_Mesh_from_Shape.svg) Create Mesh from shape... from the top menu
* Select one of the three available meshers and specify the available options, for more info refer to [this page (Mesh from Shape)](/Mesh_MeshFromShape "Mesh MeshFromShape")
* Choose  OK and the mesh object will be created in the tree view (with green mesh icon)
* Select the mesh object in the tree view and right click on mesh object in the tree view
* Choose ![](/images/Mesh_ExportMesh.png) Export mesh to export mesh
* You will be prompted to choose file name (default is the name of the mesh object) and the file type (default is "Binary STL (\*.stl)")
* Selectați  Save și ați terminat

## Which Method to choose ?

## Care metodă alegem?

* Se preferă metoda 2. Mai ales atunci când aveți mai multe corpuri pentru a converti de la Tools din Atelierul Mesh, cum ar fi fuzionarea Plaselor înainte de export.

## Links

## Links

* [Import from STL or OBJ](/Import_from_STL_or_OBJ "Import from STL or OBJ")

Retrieved from "<http://wiki.freecad.org/index.php?title=Export_to_STL_or_OBJ/ro&oldid=1334462>"