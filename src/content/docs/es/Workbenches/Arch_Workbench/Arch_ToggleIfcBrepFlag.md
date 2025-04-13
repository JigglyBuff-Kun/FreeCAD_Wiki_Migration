---
title: Arch ToggleIfcBrepFlag
---
:::caution
THIS COMMAND IS PART OF THE INTEGRATEDBIM WORKBENCHIN V1.0This page has been updated for that version.
:::

|  |
| --- |
| Arch ToggleIfcBrepFlag |
| Menu location |
| Arch → Utilities → Toggle Ifc Brep flag |
| Workbenches |
| [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Descripción

Esta herramienta activa / desactiva el indicador IfcBrep de un objeto  [Arch](/Arch_Workbench/es "Arch Workbench/es") (el valor predeterminado siempre está desactivado). Si el indicador está activado, cuando se exporta a IFC, el objeto se exportará como [IfcFacetedBrep](http://www.buildingsmart-tech.org/ifc/IFC4/final/html/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm) objeto, incluso si es posible un tipo de exportación de nivel superior como IfcExtrudedAreaSolid o IfcBooleanResult. Aunque los objetos IfcFacetedBrep son más pesados ​​y menos editables (pierden cierta información de geometría, como el historial de modelado), a menudo son menos propensos a errores. La configuración de este indicador permite resolver algunos casos de objetos que no se exportan correctamente cuando el indicador no está establecido.

## Utilización

1. Seleccione un objeto Arch
2. Seleccione el menú Arch → Utilities →  ![](/images/Arch_ToggleIfcBrepFlag.png)  [Toggle IfcBrepFlag](/Arch_ToggleIfcBrepFlag "Arch ToggleIfcBrepFlag")

Retrieved from "<http://wiki.freecad.org/index.php?title=Arch_ToggleIfcBrepFlag/es&oldid=1433463>"