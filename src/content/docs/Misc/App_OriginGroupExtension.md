---
title: App OriginGroupExtension
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

## Introduction

An [App Origin](/App_OriginGroupExtension "App OriginGroupExtension") object, or formally an `App::OriginGroupExtension`, is a class supplying selectable elements that represent the three standard axes (X, Y, Z) and three standard planes (XY, XZ and YZ) to objects that are intended to arrange different types of geometry in space.

![](/images/Std_Part.svg) [Std Part](/Std_Part "Std Part") [(App Part)](/App_Part "App Part") objects and
![](/images/PartDesign_Body.svg) [PartDesign Body](/PartDesign_Body "PartDesign Body") objects are created with Origin objects by default. If needed, Origin objects can be added to ![](/images/Assembly_Assembly_Tree.svg) [Assembly](/Assembly3_CreateAssembly "Assembly3 CreateAssembly") objects of the ![](/images/Assembly3_workbench_icon.svg) [Assembly3](/Assembly3_Workbench "Assembly3 Workbench") workbench, too.

![Tree view](/images/App_OriginGroupExtension_example.png) ![3D view](/images/App_OriginGroupExtension-02.png)

Left: The [tree view](/Tree_view "Tree view") showing three objects that use Origin objects. Right: Representation of the Origin elements in the [3D view](/3D_view "3D view").

The axes and planes are objects of type `App::Line` and `App::Plane` respectively. Each of these elements can be hidden and unhidden individually with the Space bar. This can be useful when selecting the correct reference for creating other objects e.g. [Sketches](/Sketch "Sketch").

![](/images/FreeCAD_core_objects.svg)

Simplified diagram of the relationships between the core objects in the program. Two of them have an Origin object to control the placement of the objects grouped under them.

Retrieved from "<http://wiki.freecad.org/index.php?title=App_OriginGroupExtension/en&oldid=1102096>"
