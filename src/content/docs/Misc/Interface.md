---
title: Interface
---

## Introduction

The FreeCAD [interface](/Interface "Interface") is based on Qt, a well known graphical user interface (GUI) toolkit, particularly used in Linux, but also available in Windows and MacOS.

![](/images/FreeCAD_interface_base_divisions.svg)

Standard interface in v0.19.

The main window of the application can be roughly divided into 11 sections:

1. The [main view area](/Main_view_area "Main view area"), which can contain different tabbed windows
2. The [3D view](/3D_view "3D view"), normally embedded in the [main view area](/Main_view_area "Main view area")
3. The upper part of the [combo view](/Combo_view "Combo view"), which includes the [tree view](/Tree_view "Tree view") and [task panel](/Task_panel "Task panel")
4. The lower part of the [combo view](/Combo_view "Combo view"), which includes the [property editor](/Property_editor "Property editor")
5. The [selection view](/Selection_view "Selection view")
6. The [report view](/Report_view "Report view")
7. The [Python console](/Python_console "Python console")
8. The [status bar](/Status_bar "Status bar")
9. The toolbar area, see the following information on the toolbars
10. The [Workbench selector](/Std_Workbench "Std Workbench"), which itself is a toolbar
11. The [standard menu](/Standard_Menu "Standard Menu")

## Components of the interface

Like many pieces of software, FreeCAD includes a standard menu bar, and then a series of toolbars and panels where the user tools are found.

### Menus

The [standard menus](/Standard_Menu "Standard Menu") are: [**File**](/Std_File_Menu "Std File Menu"), [**Edit**](/Std_Edit_Menu "Std Edit Menu"), [**View**](/Std_View_Menu "Std View Menu"), [**Tools**](/Std_Tools_Menu "Std Tools Menu"), [**Macro**](/Std_Macro_Menu "Std Macro Menu"), [**Windows**](/Std_Windows_Menu "Std Windows Menu"), [**Help**](/Std_Help_Menu "Std Help Menu").

### Toolbars

The standard toolbars that appear in the interface are:

- File toolbar: tools to work with files, open documents, copy, paste, undo and redo actions.
- [Workbench toolbar](/Std_Workbench "Std Workbench"): it contains a single widget to select the active [workbench](/Workbenches "Workbenches").
- Macro toolbar: tools to record, edit, and execute [macros](/Macros "Macros").
- View toolbar: tools to control how objects appear in the [3D view](/3D_view "3D view").
- Structure toolbar: tools to organize objects in the document, and create links to additional documents.

These can be turned on and off by right clicking on an empty space on one of the toolbars and choosing the desired element, or from the menu, **View → Toolbars**.

### Panels

The main panels that allow working with objects are:

- [3D view](/3D_view "3D view"): the area where 2D and 3D geometry is drawn.
- [Combo view](/Combo_view "Combo view"): the panel that contains the [tree view](/Tree_view "Tree view"), the [task panel](/Task_panel "Task panel"), and the [property editor](/Property_editor "Property editor").
- [Tree view](/Tree_view "Tree view"): the element that shows all objects in the document and their parametric history.
- [Task panel](/Task_panel "Task panel"): the panel that shows different actions and options depending on the drawing tool selected.
- [Property editor](/Property_editor "Property editor"): the place where object properties are modified.
- [Selection view](/Selection_view "Selection view"): the panel that shows elements that are currently selected.
- [Report view](/Report_view "Report view"): the text box that shows different messages from the application and its tools.
- [Python console](/Python_console "Python console"): the editor that allows running [Python](/Python "Python") code interactively to see results in the [3D view](/3D_view "3D view").
- [Status bar](/Status_bar "Status bar"): the bar that shows certain messages from the application, and that has the [mouse navigation](/Mouse_navigation "Mouse navigation") selector.
- [DAG view](/DAG_view "DAG view"): an alternative to the [tree view](/Tree_view "Tree view"), which shows the relationships between different objects through a graph.

With the exception of the 3D view, all can be turned on and off by right clicking on an empty space on one of the top toolbars and choosing the desired element, or from the menu, **View → Panels**.

To activate and deactivate the status bar use the menu, **View → Status bar**.

### Other

Other useful interfaces and windows include:

- [Scene inspector](/Std_SceneInspector "Std SceneInspector"): a panel that shows the Coin3D nodes that make up the [scenegraph](/Scenegraph "Scenegraph"). For power users and developers, it may be useful to troubleshoot operations that manipulate the scene directly, and the objects created in the [3D view](/3D_view "3D view").
- [Dependency graph](/Std_DependencyGraph "Std DependencyGraph"): a window showing the dependency graph of all the objects in the document, created with the auxiliary program [Graphviz](https://graphviz.org/). It is helpful to recognize problems in the creation of objects, such as circular dependencies, which may not be entirely evident from the [tree view](/Tree_view "Tree view") or the [DAG view](/DAG_view "DAG view").

### Customization

Toolbars can have more or fewer buttons, and custom toolbars can be created with a mix of different tools, and to store developed macros.

These options are in the menu, **Tools → Customize**. See [interface customization](/Interface_Customization "Interface Customization").

Retrieved from "<http://wiki.freecad.org/index.php?title=Interface/en&oldid=1075951>"
