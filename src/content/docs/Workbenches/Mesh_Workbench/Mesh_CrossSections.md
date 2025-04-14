---
title: Mesh CrossSections
---

|                                                                   |
| ----------------------------------------------------------------- |
| Mesh CrossSections                                                |
| Menu location                                                     |
| Meshes → Cutting → Cross-sections...                              |
| Workbenches                                                       |
| [Mesh](/Mesh_Workbench "Mesh Workbench")                          |
| Default shortcut                                                  |
| _None_                                                            |
| Introduced in version                                             |
| 0.19                                                              |
| See also                                                          |
| [Mesh SectionByPlane](/Mesh_SectionByPlane "Mesh SectionByPlane") |
|                                                                   |

## Description

The **Mesh CrossSections** command creates multiple cross sections across mesh objects. The cross sections are taken parallel to one of the main global planes (XY, XZ or YZ). For each set of cross sections a single [Part Feature](/Part_Feature "Part Feature") is created.

## Usage

1. Select one or more mesh objects.
2. There are several ways to invoke the command:
   - Press the ![](/images/Mesh_CrossSections.svg) [Cross-sections...](/Mesh_CrossSections "Mesh CrossSections") button.
   - Select the **Meshes → Cutting → ![](/images/Mesh_CrossSections.svg) Cross-sections...** option from the menu.
3. The **Cross sections** task panel opens.
4. The planes that will be used to create the cross sections are indicated in the [3D view](/3D_view "3D view"), and will be updated based on the task panel inputs.
5. Select the **Guiding plane**:
   - **XY**
   - **XZ**
   - **YZ**
6. Specify the **Position** of the guiding plane from the origin. The default position is based on the center of the bounding box of the selected mesh objects. Choosing a different **Guiding plane** or toggling the **Sections** checkbox will reset the **Positon** to this default value.
7. Optionally check the **Sections** checkbox to create multiple cross sections:
   - **On both sides**: if checked, cross sections are created on both sides of the guiding plane.
   - **Count**: the number of cross sections.
   - **Distance**: the distance between the cross sections. The default value is based on the dimensions of the bounding box, the **On both sides** option, and the **Count** value. Changing the **Count** value will reset the **Distance** to this default value. Changing the **On both sides** option will recalculate the **Distance** (`*2.0` or `*0.5`). Note that the input box may be greyed out, but the value can in fact be changed.
   - Optionally check the **Connect edges if distance is less than** checkbox and specify a value.
8. Press the Apply button to create the set of cross sections.
9. Optionally change one or more settings and create additional sets of cross sections.
10. Press the OK button or the Cancel button to close the task panel and finish the command.

## Properties

See: [Part Feature](/Part_Feature "Part Feature").

Retrieved from "<http://wiki.freecad.org/index.php?title=Mesh_CrossSections/en&oldid=1332921>"
