---
title: Mesh SegmenteErstellen
---

|                                                                                  |
| -------------------------------------------------------------------------------- |
| Mesh Segmentation                                                                |
| Menu location                                                                    |
| Meshes → Create mesh segments...                                                 |
| Workbenches                                                                      |
| [Mesh](/Mesh_Workbench "Mesh Workbench")                                         |
| Default shortcut                                                                 |
| _None_                                                                           |
| Introduced in version                                                            |
| -                                                                                |
| See also                                                                         |
| [Mesh SegmentationBestFit](/Mesh_SegmentationBestFit "Mesh SegmentationBestFit") |
|                                                                                  |

## Beschreibung

The **Mesh Segmentation** command creates separate mesh segments for specified surface types of a mesh object.

## Anwendung

1. Select a single mesh object.
2. There are several ways to invoke the command:
   - Press the ![](/images/Mesh_Segmentation.svg) [Create mesh segments...](/Mesh_Segmentation "Mesh Segmentation") button.
   - Select the **Meshes → ![](/images/Mesh_Segmentation.svg) Create mesh segments...** option from the menu.
3. The **Mesh segmentation** task panel opens.
4. Optionally check the **Smooth mesh** option and specify a value for the smoothness of the mesh. The higher the value the smoother the mesh is assumed to be. Specifying `0` has the same effect as unchecking this option. Do not select this option if you want to create planar segments.
5. Select the surface type you wish to create mesh segments for. You can select more than one type, but this can lead to poorer results. The available surface types are:
   - **Plane**
   - **Cylinder**
   - **Sphere**
   - **Freeform**
6. Specify the required settings. Make sure the **Tolerance** values are not too low, and the **Minimum number of faces** values not too high.
7. Press the OK button.
8. The command will create a [group](/Std_Group "Std Group") containing separate mesh objects, each a segment of the original mesh object.
9. If the created group is empty try using the command again with modified settings.

## Hinweise

- The current version of the command has trouble identifying faces at the edges of surface types.
- In some cases the [Mesh SegmentationBestFit](/Mesh_SegmentationBestFit "Mesh SegmentationBestFit") command will produce better results.

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_Segmentation/de&oldid=1333073>"
