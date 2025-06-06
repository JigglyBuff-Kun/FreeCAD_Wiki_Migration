---
title: BIM Project
---
|  |
| --- |
| BIM ProjectManager |
| Menu location |
| Manage → Manage project... |
| Workbenches |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descripción

El cuadro de diálogo de configuración del proyecto es un cuadro de diálogo de asistente que le permite crear un conjunto básico de objetos de guía en el documento actual o en un documento nuevo, que le ayudará a comenzar a modelar un proyecto BIM.

![](/images/BIM_project_screenshot.png)

BIM Project Setup

## Usage

El diálogo de configuración del proyecto puede crear:

* A new [document](/Document_structure "Document structure"). Alternatively, the other objects will be created in the currently opened document.
* A [site](/Arch_Site "Arch Site"). The Site object represents a piece of terrain, where your project will be located. You can give it a number of useful properties, such as street address and earth coordinates. Upon creation, the site is just an empty container for other BIM objects, but a 3D object representing the actual terrain can be attached to it later on.
* A [building](/Arch_Building "Arch Building"). The Building object is a container for all the BIM objects that will belong to a same building. You can define a building type, and give it gross rectangular dimensions, that will be represented as a rectangle drawn on the ground (X,Y) plane.
* A set of [axes](/Arch_Axis "Arch Axis"), by defining their number and spacing. Axes are used as guidelines to align 2D and 3D objects. These axes can be modified or new axes introduced later on.
* A set of [BuildingParts](/Arch_BuildingPart "Arch BuildingPart") to represent levels. BuildingParts are generic BIM container objects that can be used to group other BIM objects in a number of meaningful ways, such as repeatable components or building levels.
* A set of default [groups](/Std_Group "Std Group") inside each level. Groups can be used to organize your BIM objects in clearer categories, such as "Walls" or "Columns". They have no impact on the model itself, but often help to make your model structure clearer when it contains a lot of objects.

## Templates

The Project tool supports two kinds of templates:

* Once you have filled the different options, the contents of the BIM project setup wizard can be **saved** as a template. These templates can be **restored** and adapted at a later time. Project templates are stored as plain text files in your FreeCAD user folder.
* Alternatively, you can also save the contents of the current document as a template. This will save the currently opened document as a standard **.FCStd** file, but also include additional BIM settings like the current working plane, or current units. By using the **restore** option anytime, the contents of that template file will be merged into the active document and all settings found in it applied.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_ProjectManager/es&oldid=1481062>"