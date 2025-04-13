---
title: DAG view
---

## Introduction

The [DAG view](/DAG_view "DAG view") is a [directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) (DAG) that shows the relationships between different objects in the document. It is meant primarily to show how certain objects depend on others in a complex model with many features and references, such as those that can be created with the ![](/src/assets/images/Workbench_PartDesign.svg) [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench").

The DAG view resembles the graph that can be produced from a Git repository and its branches. Together with the standard [tree view](/Tree_view "Tree view") and the [dependency graph](/Std_DependencyGraph "Std DependencyGraph"), the DAG view is a tool to inspect the parametric history of objects in a document.

## Example

A simple model will be seen with different views.

![](/src/assets/images/FreeCAD_DAG_view_3D.png)

Model with 2D and 3D shapes.

![](/src/assets/images/FreeCAD_DAG_view_Tree_view.png) ![](/src/assets/images/FreeCAD_DAG_view.png)

Left: objects shown in the standard [tree view](/Tree_view "Tree view"). Right: objects shown in the DAG view.

![](/src/assets/images/FreeCAD_DAG_view_Std_DependencyGraph.png)

Relationships between the objects shown in the [dependency graph](/Std_DependencyGraph "Std DependencyGraph").

## Activating the DAG view

The DAG view was introduced in 0.17 as an experimental feature for power users and developers, so they could troubleshoot complex models; therefore, the DAG view is not available by default.

To use this view use the [parameter editor](/Std_DlgParameter "Std DlgParameter"). Create the following subgroup if it doesn't exist

- `BaseApp/Preferences/DockWindows/DAGView`

then add the parameter `Enabled` of type `Boolean`, and set it to `true`.

Restart FreeCAD and activate DAG view: **[View](/Std_View_Menu "Std View Menu") → Panels → DAG view**.

In the [parameter editor](/Std_DlgParameter "Std DlgParameter") you can also change some properties in the following subgroup

- `BaseApp/Preferences/DAGView`
- FontPointSize - Set size of text font and can help with readability with high DPI displays. Set to 0 for default font size.
- SelectionMode
  - 0 - single click selects an item. Ctrl-click to add items to selection.
  - 1 - every click adds/removes item to selection.
- Direction - the order in which items are displayed.
  - 1 - child on top, parent under it
  - -1 - parent on top, children under it

## Links

- [DAGView](https://forum.freecadweb.org/viewtopic.php?f=20&t=11276), forum thread presenting the new tool.
- [easter egg of PartDesign Next: DAG View](https://forum.freecadweb.org/viewtopic.php?t=15375), including the view together with the update to PartDesign.

Retrieved from "<http://wiki.freecad.org/index.php?title=DAG_view/en&oldid=893479>"
