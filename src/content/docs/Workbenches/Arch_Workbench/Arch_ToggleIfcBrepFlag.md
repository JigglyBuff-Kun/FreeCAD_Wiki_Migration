---
title: Arch ToggleIfcBrepFlag
---

:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|                                                                                            |
| ------------------------------------------------------------------------------------------ |
| Arch ToggleIfcBrepFlag                                                                     |
| Menu location                                                                              |
| Utils → Toggle IFC B-rep flag                                                              |
| Workbenches                                                                                |
| [BIM](/BIM_Workbench "BIM Workbench")                                                      |
| Default shortcut                                                                           |
| _None_                                                                                     |
| Introduced in version                                                                      |
| -                                                                                          |
| See also                                                                                   |
| [Arch IfcExplorer](/Arch_IfcExplorer "Arch IfcExplorer"), [Arch IFC](/Arch_IFC "Arch IFC") |
|                                                                                            |

## Description

The **Arch ToggleIfcBrepFlag** tool turns the IfcBrep flag of a selected [BIM](/BIM_Workbench "BIM Workbench") object on/off (the default is always off). If the flag in on, when exported to IFC, the object will be exported as an [IfcFacetedBrep](https://standards.buildingsmart.org/IFC/DEV/IFC4_2/FINAL/HTML/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm) object, even if a higher-level kind of export such as IfcExtrudedAreaSolid or IfcBooleanResult is possible. Although IfcFacetedBrep objects are heavier and less editable (they loose some geometry information such as the modeling history), they are often less error-prone. Setting this flag allows to solve some cases of objects that are not exported correctly when the flag is not set.

## Usage

1. Select an Arch object.
2. Select the **Utils → ![](/src/assets/images/Arch_ToggleIfcBrepFlag.svg) Toggle IFC B-rep flag** option from the menu.

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_ToggleIfcBrepFlag/en&oldid=1465912>"
