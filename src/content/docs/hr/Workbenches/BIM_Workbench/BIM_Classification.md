---
title: BIM Classification/hr
---
|  |
| --- |
| BIM Classification |
| Menu location |
| Manage → Manage classification... |
| Workbenches |
| [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Opis

The **Classification manager** allows you to attribute a standard class to a BIM object or material. Standard systems are not included with FreeCAD, and you must download those that you wish to use prior to using this tool. See the [Downloading classification systems](#Downloading_classification_systems) section below.

![](/images/BIM_classification_screenshot.png)

Classification manager

## Kako koristiti

1. Install one or more classification standard XML or IFC files as explained above.
2. If you wish to add or edit a class for an object, select that object and press the BIM Classification button.
3. If you wish to add or edit a class for a material, don't select anything and press the BIM Classification button. You will be able to browse the materials directly from the classification manager window.

## Downloading classification systems

Several classification systems are available in XML or IFC form (both are supported by this tool) from <https://github.com/Moult/IfcClassification>, or directly from their publishers, or from <https://www.graphisoft.com/downloads/archicad/BIM_Data.html>. To make these XML or IFC files known to FreeCAD they must be placed in a BIM subfolder of your FreeCAD user folder. The exact location for your system is informed on the BIM classification dialog. If both an IFC and XML file are available, the BIM Classification tool will prefer the IFC one.

There is a [convenience macro](/Macro_Download_Classifications "Macro Download Classifications") that can download all systems available from <https://github.com/Moult/IfcClassification> and place them directly in the right folder. After running the macro, everything is ready to use this tool.

Retrieved from "<http://wiki.freecad.org/index.php?title=BIM_Classification/hr&oldid=1534390>"