---
title: Selection view
---

## Introduction

The [selection view](/Selection_view "Selection view") is a panel in the [interface](/Interface "Interface") by default located below the [combo view](/Combo_view "Combo view"). Just like the [property editor](/Property_editor "Property editor"), it shows more information about the currently selected objects.

A selection can be made by picking an object in the [3D view](/3D_view "3D view") or in the [tree view](/Tree_view "Tree view"). Multiple bodies can be selected by holding Ctrl.

![](/images/FreeCAD_interface_base_divisions.svg)

Selection view indicated by the number 5, in the standard [interface](/Interface "Interface").

## Selection of objects

The tree view of this example has two [PartDesign Bodies](/PartDesign_Body "PartDesign Body"), with several features each, and a simple [Part Cone](/Part_Cone "Part Cone"). The tree is as follows.

![](/images/FreeCAD_Selection_Tree_view.png)

The selection view is empty if no object is selected in the [3D view](/3D_view "3D view") or in the [tree view](/Tree_view "Tree view").

![](/images/FreeCAD_Selection_view_empty.png) ![](/images/FreeCAD_Selection_view_empty_3D.png)

If you select an object, it will appear in the list of objects, together with the document it belongs to. Both the read-only internal `Name`, and the user changeable `Label` will be displayed.

The `Name` can contain only basic alphanumeric characters `[_0-9a-zA-Z]`, while the `Label` can contain any symbol including spaces and accented characters.

```
Document#Name (Label)

```

![](/images/FreeCAD_Selection_view_one_object.png) ![](/images/FreeCAD_Selection_view_one_object_3D.png)

If you select various objects, they will be listed in the view. If these objects are located inside a type of container, for example, a [PartDesign Body](/PartDesign_Body "PartDesign Body"), the displayed name will be given in a hierarchical manner, that is, `Document#Parent.Child`. In this case, not only the child, but the entire parent will appear highlighted in the 3D view.

```
Document#Body.Feature. (Feature_label)

```

![](/images/FreeCAD_Selection_view_many_objects.png) ![](/images/FreeCAD_Selection_view_many_objects_3D.png)

Individual body elements, that is, vertices, edges, and faces, can be selected, and they will be displayed in a hierarchical manner as well.

```
Document#Body.Feature.Vertex (Feature_label)
Document#Body.Feature.Edge (Feature_label)
Document#Body.Feature.Face (Feature_label)

```

![](/images/FreeCAD_Selection_view_many_objects_subelements.png) ![](/images/FreeCAD_Selection_view_many_objects_subelements_3D.png)

## Search bar

If you have many objects in your document and you cannot pick the one that you want from the [3D view](/3D_view "3D view") or from the [tree view](/Tree_view "Tree view"), you can write the partial name of the object in the search field; it will search all names in the document, and show a list of those that partially match the text that you entered. When you find the object that you are looking for, you may click on it to select it.

## Actions

Right clicking on an element in the list brings up various commands.

- **Select only**: deselects everything, and selects only the parent object that contains the given element.
- **Deselect**: completely removes the selection of all objects.
- **Zoom fit**: deselect everything, and selects only the parent object that contains the given element. Moreover, the [3D view](/3D_view "3D view") is panned and zoomed so that the parent object is centered on the screen. This is useful when selecting one object in the tree view, and then quickly focus the camera on it in the 3D view.
- **Go to selection**: deselects everything, and selects only the the parent object that contains the selected element. In this case, the [tree view](/Tree_view "Tree view") is adjusted and expanded to show exactly where the selected object is in the tree. This is useful when the objects in the 3D view are contained inside many container objects in the tree view, for example, [Std Parts](/Std_Part "Std Part"), [Std Groups](/Std_Group "Std Group"), [PartDesign Bodies](/PartDesign_Body "PartDesign Body"), [Arch BuildingParts](/Arch_BuildingPart "Arch BuildingPart"), and similar. When you have hundreds of bodies, it is easier to select the object in the 3D view, and then choose **Go to selection**, to immediately locate the object in the tree view, and then proceed to edit its properties in the [Property editor](/Property_editor "Property editor").
- **Mark to recompute**: marks the selected object as "Touched", meaning that its properties will be updated next time the document is [recomputed](/Recompute "Recompute").
- **To Python console**: this creates a variable `obj` that holds a reference to the parent object. This is useful when writing scripts and testing commands in the [Python console](/Python_console "Python console"). Instead of using the full name of the object, it's easier to use the shorter and more compact name `obj`.

## Picked object

if the **Picked object list** checkbox is checked, a secondary list will appear showing all the sub-elements (vertices, edges, and faces) that could be selected by a single click, even those that are behind (hidden by) other objects.

![](/images/FreeCAD_Selection_view_pick_hidden.png) ![](/images/FreeCAD_Selection_view_pick_hidden_3D.png)

Retrieved from "<http://wiki.freecad.org/index.php?title=Selection_view/en&oldid=1334238>"
