---
title: Aus Sketchup importieren
---
< Back to [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")

## Best Method

From experience, currently the best method to import a file from Sketchup is to use the Collada (\*.dae) format. FreeCAD does not natively support the Collada format. To have this functionality in FreeCAD, the user needs to install a Python module for importing and exporting the format. It's a relatively easy task to perform and instructions can be found on the [Extra python modules](/Extra_python_modules "Extra python modules") page. The direct link to the instructions is - [Extra python modules: pyCollada](http://www.freecadweb.org/wiki/index.php?title=Extra_python_modules#pyCollada).

## Importing Collada (\*.dae) files

Providing the pyCollada module has been installed, you can open or import Collada files just like any other. Select the File menu and then pick either Open or Import. Select your Collada file and click Open. You can filter the file type by selecting the Files of type pull down in the Open or Import dialog and select Collada (\*.dae) from the list.

## Alternatives

Using a Sketchup STL export plugin, you may also choose to use a format that FreeCAD supports natively. There are a number of these plugins available for Sketchup and some work better than others. Some research may be required of the user to determine which one will best serve their needs.

## Notes

Both Collada (\*.dae) and STL are mesh formats. To use these files within FreeCAD, which works primarily with solids, additional work to the objects imported using these formats will in most cases be required.

## Related

* [FreeCAD Howto Import Export](/FreeCAD_Howto_Import_Export "FreeCAD Howto Import Export")
* [Import Export](/Import_Export "Import Export")
* [Import Export Preferences](/Import_Export_Preferences "Import Export Preferences")

Retrieved from "<http://wiki.freecad.org/index.php?title=Importing_From_Sketchup/de&oldid=1515608>"