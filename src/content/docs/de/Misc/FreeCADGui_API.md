---
title: FreeCADGui API/de
---
:::caution
(Oktober 2019) Diese Seite nicht bearbeiten. Die Informationen sind unvollständig und veraltet. Für die aktuelle API siehe die (engl.)autogenerierte API-Dokumentationoder erstelle die Dokumentation selbst, sieheQuellendokumentation.
:::

This module is the counterpart of the FreeCAD module. It contains everything related to the User interface and the 3D views. Example:

```
import FreeCAD as App
import FreeCADGui as Gui

# get the 3D model document
doc = App.ActiveDocument    

# get the visual representation model document
gui_doc = Gui.ActiveDocument

gui_doc.activateWorkbench("myWorkbench")

```

![](/images/Method.png) **activateWorkbench(***string***)**

**Description**: Activates a workbench by name

**Returns**: nothing

![](/images/Method.png) **activeDocument(****)**

**Description**:

**Returns**: the active document or None if no one exists

![](/images/Method.png) **activeWorkbench(****)**

**Description**:

**Returns**: the active workbench object

![](/images/Method.png) **addCommand(***string, object***)**

**Description**: Adds a FreeCAD command. String is the name of the command and object is a classname defining the command

**Returns**:

![](/images/Method.png) **addIcon(***string, string or list***)**

**Description**: Adds an icon as file name or in XPM format to the system

**Returns**:

![](/images/Method.png) **addIconPath(***string***)**

**Description**: Add a new path to the system where to find icon files

**Returns**:

![](/images/Method.png) **addPreferencePage(***string,string***)**

**Description**: Adds a UI form to the preferences dialog. The first argument specifies the file name and the second specifies the group name

**Returns**:

![](/images/Method.png) **addWorkbench(***string, object***)**

**Description**: Adds a workbench under a defined name. The string is the workbench name and the object is a classname defining the workbench

**Returns**:

![](/images/Method.png) **createDialog(***string***)**

**Description**: Opens a UI file

**Returns**:

![](/images/Method.png) **getDocument(***string***)**

**Description**: Gets a document by its name

**Returns**: the document

![](/images/Method.png) **getWorkbench(***string***)**

**Description**: Gets a workbench by its name

**Returns**: the workbench

![](/images/Method.png) **insert(***string***)**

**Description**: Open a macro, Inventor or VRML file

**Returns**: the document

![](/images/Method.png) **listWorkbenches(****)**

**Description**: Shows a list of all workbenches

**Returns**: a list

![](/images/Method.png) **open(***string***)**

**Description**: Opens a macro, Inventor or VRML file

**Returns**: the openend document

![](/images/Method.png) **removeWorkbench(***string***)**

**Description**: Removes a workbench by name

**Returns**:

![](/images/Method.png) **runCommand(***string***)**

**Description**: Runs a FreeCAD command by name

**Returns**:

![](/images/Method.png) **updateGui(****)**

**Description**: Updates the main window and all its windows

**Returns**:

Retrieved from "<http://wiki.freecad.org/index.php?title=FreeCADGui_API/de&oldid=1253742>"