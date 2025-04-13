---
title: GUIコマンド
---
The GuiCommand is one of the most important functions of FreeCAD in the main interaction point of the user. Every time the user selects a menu item or presses a toolbar button it activates a GuiCommand. Some of the attributes of a GuiCommand are:

* Defines a name
* Contains an icon
* Defines the scope for an undo/redo
* Has a help page
* Opens and controls dialogs
* Macro recording
* and others.

## Naming

The GuiCommand is named in a standard way: *ModuleName\_CommandName* e.g., "[Base\_Open](/index.php?title=Base_Open&action=edit&redlink=1 "Base Open (page does not exist)")" this is the Open Gui Command in the Base system. The GuiCommand in a certain module is named with the module name in front e.g., "[Part\_Cylinder](/Part_Cylinder "Part Cylinder")".

If the documentation is not finished use [Template:UnfinishedDocu](/Template:UnfinishedDocu "Template:UnfinishedDocu").

## Help page

Every GuiCommand has to have a help page. The help page is hosted on the FreeCAD documentation wiki. The article has the same name as the GuiCommand, e.g. [Draft ShapeString](/Draft_ShapeString "Draft ShapeString").

To create your own help pages you can use the template [GuiCommand model](/GuiCommand_model "GuiCommand model")

Example:

* [Draft ShapeString](/Draft_ShapeString "Draft ShapeString")
* [Draft Line](/Draft_Line "Draft Line")

## Icons

![](/images/Tango-Palette.png)

Every GuiCommand has to have an icon. We use the [Tango icon set](http://tango-project.org/Tango_Desktop_Project/) and its guidelines. On the right side you see the tango color palette.

All icons should be created in [SVG](/SVG "SVG") format with a vector image application, such as [Inkscape](http://inkscape.org). This makes it easier to apply changes and derive additional icons in the same application space.

### Icons color coding chart

![](/images/Colorchart.png)

We try as much as possible to respect this chart, so the color of the icons has a direct meaning.

Retrieved from "<http://wiki.freecad.org/index.php?title=Gui_Command/ja&oldid=1544374>"