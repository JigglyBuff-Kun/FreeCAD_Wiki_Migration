---
title: Selection methods
---

## Overview

[Selection methods](/Selection_methods "Selection methods") in FreeCAD allow picking objects in the [FreeCAD Interface](/Interface "Interface"): such as [3D view](/3D_view "3D view"), [tree view](/Tree_view "Tree view"), [selection view](/Selection_view "Selection view"), and other dialogs. Some selection methods are workbench specific and are documented in the particular workbench documentation.

## 3D view

In the [3D view](/3D_view "3D view") there are various ways of selecting objects.

### Simple selection

Simple selection with the mouse (by default left-click) and pre-selection (hover) are described in the [mouse navigation](/Mouse_navigation "Mouse navigation") page.

### Repeated clicks

The first click selects a sub-element (vertex, edge or face) of the object under the mouse. A second click selects the whole object.

The third click extends the selection to its container object ([PartDesign Body](/PartDesign_Body "PartDesign Body"), [Std Part](/Std_Part "Std Part"), and others). Further clicks expand the selection up the container chain.

### Selection commands

- To select all objects: [Std SelectAll](/Std_SelectAll "Std SelectAll").
- To box select multiple main objects: [Std BoxSelection](/Std_BoxSelection "Std BoxSelection").
- To box select multiple faces: [Std BoxElementSelection](/Std_BoxElementSelection "Std BoxElementSelection") or [Part BoxSelection](/Part_BoxSelection "Part BoxSelection").

## Selection view

The [selection view](/Selection_view "Selection view") shows the names of the objects being selected, including their full name within an object, for example, `Unnamed#Body.Box001.Face17`.

It also allows to perform some actions like [Std ViewFitSelection](/Std_ViewFitSelection "Std ViewFitSelection"), and sending the object to the [Python console](/Python_console "Python console").

### Object export

_This should be in the [selection view](/Selection_view "Selection view") page._

Select any complex object, for example, a [PartDesign Body](/PartDesign_Body "PartDesign Body") or [Std Part](/Std_Part "Std Part"), then in the [selection view](/Selection_view "Selection view") select again the object, and then press Ctrl + C in the keyboard to open the **Object selection** dialog. This allows copying the selected object together with all or only some of that object's dependency objects. For example, for a [Std Part](/Std_Part "Std Part") the possible objects to select include the [Std Part](/Std_Part "Std Part") itself, but also its Origin, its three base axes (XYZ), and its three base planes (XY, YZ, XZ).

After pressing OK, the selected objects are copied into memory, and then can be pasted in the document to duplicate these objects only.

![](/images/ObjectSelection.png)

Object selection dialog that is launched from the [selection view](/Selection_view "Selection view").

## Tree view

In the [tree view](/Tree_view "Tree view") items can be selected, or deselected, one at a time, by holding the Ctrl key and clicking with the mouse.

A range of items can be selected by clicking on the first item, holding Shift, and clicking on the last item.

Selecting a single item will also show its properties in the [property editor](/Property_editor "Property editor").

Double clicking will open any associated [task panel](/Task_panel "Task panel") containing actions. Make sure to close this task panel before executing another command or switching to any other workbench.

More methods are available by opening the context menu (right-click), depending on the object selected or the active workbench; see the information in [tree view](/Tree_view "Tree view").

## Scripting

Selecting objects is inherently a graphical task and therefore it is only available when the graphical user interface is loaded.

These methods can be used in [macros](/Macros "Macros") or from the [Python console](/Python_console "Python console"):

```
import FreeCADGui as Gui

Gui.Selection.addSelection
Gui.Selection.addSelectionGate
Gui.Selection.Filter

```

The `addSelectionGate` method prevents the user from selecting objects not specified in the selection string. A ![](/images/Button_invalid.svg) symbol appears when the pointer is over an item not in the specified group.

```
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Edge")

#### or
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Face")

#### or
Gui.Selection.addSelectionGate("SELECT Part::Feature SUBELEMENT Vertex")

```

To remove `SelectionGate()`:

```
Gui.Selection.removeSelectionGate()

```

See the [Source documentation](/Source_documentation "Source documentation") and [Std PythonHelp](/Std_PythonHelp "Std PythonHelp") for more help on using these tools.

Retrieved from "<http://wiki.freecad.org/index.php?title=Selection_methods/en&oldid=1268553>"
