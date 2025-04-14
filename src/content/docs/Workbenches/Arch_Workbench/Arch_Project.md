---
title: Arch Project
---

:::caution
THIS COMMAND IS OBSOLETEIt is not available in1.0 and above. UseBIM Projectinstead.
:::

|                                                                                      |
| ------------------------------------------------------------------------------------ |
| Arch Project                                                                         |
| Menu location                                                                        |
| Arch → Project                                                                       |
| Workbenches                                                                          |
| [Arch](/Arch_Workbench "Arch Workbench")                                             |
| Default shortcut                                                                     |
| P O                                                                                  |
| Introduced in version                                                                |
| -                                                                                    |
| See also                                                                             |
| [Arch Site](/Arch_Site "Arch Site"), [Arch Building](/Arch_Building "Arch Building") |
|                                                                                      |

## Description

The Arch Project is a special object suitable to add better compatibility with [IFC](/Arch_IFC "Arch IFC") files. Every IFC file is required to contain an [IfcProject](https://standards.buildingsmart.org/IFC/RELEASE/IFC4_1/FINAL/HTML/schema/ifckernel/lexical/ifcproject.htm) entity. The IfcProject is mostly used to define general project settings such as projection systems, for GIS compatibility, or units systems.

When exporting a FreeCAD model to the IFC file format, if your model does not contain any Project object, a default one will be created automatically, which in most cases will be sufficient. However, you might want to be able to fine-tune the project settings, in which case adding a Project object can be useful. When importing an IFC file, a Project object will always be created. However, if not specifically using it, you can simply delete it after import.

Note that, although any other BIM object can be added to a Project, which the IFC standard does not prohibit, the common way of doing is always to only have [sites](/Arch_Site "Arch Site") or [buildings](/Arch_Building "Arch Building") as direct children of a project. All other BIM objects should be inside these sites or buildings. The Project itself should always be at the top of your model structure, that is, it shouldn't be included in any other object.

## Usage

1. Press the ![](/images/Arch_Project.svg) [Arch Project](/Arch_Project "Arch Project") button, or press the P then O keys.
2. Add any object to your project by drag-and-dropping them onto the Project in the [Tree view](/Tree_view "Tree view").

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_Project/en&oldid=1467148>"
