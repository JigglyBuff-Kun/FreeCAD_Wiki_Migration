---
title: BIM Project/pt-br
---
|  |
| --- |
| BIM Project |
| Menu location |
| 3D/BIM → Project |
| Workbenches |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descrição

The **BIM Project** tool creates a [native IFC](/NativeIFC "NativeIFC") project in the current document. In IFC, a project (IfcProject) is the root object of all the contents of the model. It is mandatory to have one in each IFC file.

It is not necessary to create a project to export a FreeCAD model to IFC, as a default one will be added each time you export an IFC file. However, when working with [native IFC](/NativeIFC "NativeIFC"), an IFC file is attached to the model, and all the geometry and properties of that model and its components come from the attached IFC file. The project is where the IFC file is attached to the document.

Typically, you create a BIM project to attach an IFC file. When creating the project, the attached IFC file is blank, and not saved. The next time you will save the FreeCAD file, you will also be asked to save the IFC file.

If you distribute the FreeCAD file, all attached IFC files must be distributed together, otherwise FreeCAD won't be able to extract the geometry. However, if the **shape mode** property of all objects contained in a project is set to **Shape**, then the FreeCAD file can be distributed without the accompanying IFC file, and will still open correctly on other computers. The IFC objects, however, won't be editable anymore.

When inserting an IFC file, a project object is created, that contains all the contents of the file. Like all NativeIFC objects, the project can be expanded by double-clicking it in the tree.

## Utilização

1. Make sure you have a FreeCAD document open.
2. Press the ![](/images/BIM_Project.svg) [Project](/BIM_Project "BIM Project") button.
3. Optionally, lock the document by pressing the ![](/images/IFC.svg) [IFC Lock](/NativeIFC#Locked_and_unlocked_modes "NativeIFC") button.

## Locked and unlocked mode

In the [BIM Workbench](/BIM_Workbench "BIM Workbench"), the status bar features an ![](/images/IFC.svg) [IFC Lock](/NativeIFC#Locked_and_unlocked_modes "NativeIFC") button that allows to toggle between **locked** and **unlocked** modes. When unlocked, you can have several [projects](/BIM_Project "BIM Project") inside your FreeCAD document, and also have both IFC and non-IFC elements.

In locked mode, the data attached to your project object becomes attached directly to the FreeCAD document. The FreeCAD document acts as a faithful replica, or rendering, of the IFC document. The project object is therefore removed. You can have only one project in your FreeCAD document, and you cannot have non-IFC objects anymore (every new object is instantly converted to IFC).

## Adicionando objetos a um projeto

Objects are added to a project simply by dragging and dropping them onto the project in the tree view. These objects will be converted to IFC and might loose some of their former parametric behaviours when those are not supported by IFC.

## Diferença

When the project contains unsaved changes, a red dot will appear on its tree icon. Right-clicking the project and choosing **IFC → Diff** will open a dialog to see a [diff](https://en.wikipedia.org/wiki/Diff) of what has changed in the attached IFC file. This is a good way to make sure what you changed is really what you intended.

## Saving

IFC files attached to a project are automatically saved each time you save the FreeCAD file. They can also be saved manually anytime by right-clicking the project and choosing **IFC → Save**.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Project/pt-br&oldid=1539567>"