---
title: Export to STL or OBJ
---

|                      |
| -------------------- |
| Tutorial             |
| Topic                |
| Export to STL or OBJ |
| Level                |
| Beginner             |
| Time to complete     |
| 20 minutes           |
| Authors              |
| r-frank              |
| FreeCAD version      |
| 0.16.6703            |
| Example files        |
| _None_               |
| See also             |
| _None_               |
|                      |

## Introduction

In this tutorial we will cover how to export STL/OBJ-files from FreeCAD. The mesh-format STL/OBJ is dimensionless; FreeCAD will assume on export that the units used in the model are in mm. If this is not the case you have to scale your model. One way to do this is using ![](/src/assets/images/Draft_Scale.svg) [Draft Scale](/Draft_Scale "Draft Scale").

## Sample part

You can use your own FreeCAD file, but you can also create a quick test file:

1. Open FreeCAD.
2. Create a new document.
3. Switch to ![](/src/assets/images/Workbench_Part.svg) [Part Workbench](/Part_Workbench "Part Workbench").
4. Insert a cube by clicking on ![](/src/assets/images/Part_Box.svg) [Part Box/Cube](/Part_Box "Part Box").
5. Insert a cone by clicking on ![](/src/assets/images/Part_Cone.svg) [Part Cone](/Part_Cone "Part Cone").
6. Select both objects in the [tree view](/Tree_view "Tree view").
7. Apply a fusion by clicking on ![](/src/assets/images/Part_Fuse.svg) [Part Fuse](/Part_Fuse "Part Fuse").
8. Save your file.

## Export Method 1: Using "File → Export"

1. With the default settings, this method creates a mesh with noticeably jagged curves. To get a smoother finish when e.g. 3D printing, the mesh resolution should be configured:
   1. Make sure the ![](/src/assets/images/Workbench_Mesh.svg) [Mesh Workbench](/Mesh_Workbench "Mesh Workbench") has been loaded (it is not loaded by default).
   2. Go to **Edit → Preferences... → Import-Export → Mesh Formats**.
   3. Change **Maximum mesh deviation**. A lower value will produce a mesh with a higher resolution.
2. Select the solid to be exported in the tree view.
3. Choose **File → Export...** and set the file type to **STL mesh (\*.stl \*.ast)**.
4. Enter your file name. The default extension is .stl. You must include the extension .ast to produce an .ast file.
5. Choose Save.

## Export Method 2: Using the Mesh Workbench in FreeCAD

1. Switch to the ![](/src/assets/images/Workbench_Mesh.svg) [Mesh Workbench](/Mesh_Workbench "Mesh Workbench").
2. Select the solid to be meshed in the tree view.
3. Choose **Meshes → ![](/src/assets/images/Mesh_FromPartShape.svg) Create Mesh from shape...** from the main (top) menu.
4. Select one of the available meshers and specify the available options. For more information refer to [Mesh from Shape](/Mesh_FromPartShape "Mesh FromPartShape").
5. Choose OK. The mesh object will be created in the tree view (with a green mesh icon ![](/src/assets/images/Workbench_Mesh.svg)).
6. Right click the mesh object in the tree view and choose **![](/src/assets/images/Mesh_Export.svg) Export mesh...**.
7. Fill in the file name, the extension is not necessary. The extension will be set based on the file type. If you include an extension which does not match the selected file type, an extension for the selected type will be added when the file is saved.
8. The default file type is **Binary STL (\*.stl)**. Change the type if you wish.
9. Choose Save.

## Which Method to choose ?

- Method 1 can be used for most situations where a mesh file is needed.
- With method 2 you can verify the mesh in FreeCAD. And if you have more than one solid to convert you can use Tools from the [Mesh Workbench](/Mesh_Workbench "Mesh Workbench"). For example, you can fuse meshes before exporting.

## Links

- [Import from STL or OBJ](/Import_from_STL_or_OBJ "Import from STL or OBJ")
- [Import Export](/Import_Export "Import Export")

Retrieved from "<http://wiki.freecad.org/index.php?title=Export_to_STL_or_OBJ/en&oldid=1334459>"
