---
title: Tree view
---

## Introduction

The [Tree view](/Tree_view "Tree view") appears in the upper section of the **Model** panel (if the [Combo view](/Combo_view "Combo view") is active) or as a stand-alone panel. It shows all user defined objects that are part of a FreeCAD document. The Tree view is a representation of the [document's structure](/Document_structure "Document structure"), and indicates what information is saved to disk.

These objects don't necessarily have to be geometrical shapes visible in the [3D view](/3D_view "3D view"), but can also be supporting data objects created with any of the [workbenches](/Workbenches "Workbenches").

![](/src/assets/images/FreeCAD_Tree_view.png)

The Tree view showing various elements in the document.

## Working with the Tree view

By default, whenever a new object is created, it is added to the end of the list in the Tree view. The Tree view allows managing the objects to keep them organized; it permits creating [groups](/Std_Group "Std Group"), moving objects inside groups, moving groups inside other groups, relabeling objects, copying objects, deleting objects, and using options from its [context menu](#Context_menu).

Many operations create objects that are dependent on a previously existing object. In this case, the Tree view shows this relationship by absorbing the older object inside the new object. Expanding and collapsing the objects in the Tree view shows the parametric history of that object. Objects that are deeper inside others are older, while objects that are outside are newer, and are derived from the older objects. By modifying the interior objects, the parametric operations propagate all the way to the top, generating a new result.

![](/src/assets/images/FreeCAD_Tree_view_parametric_history.png)

The topmost object is created by doing parametric operations on objects which themselves were created by previous operations.  
Fully expanding the tree reveals the original elements that were used to create the partial solids.

### Tree view columns

The Tree view always displays a column with the icons and labels of objects. Two additional columns can optionally be displayed as well. To enable these columns right-click the Tree view and in the context menu select **Tree settings** and then **Show description** ([introduced in 0.21](/Release_notes_0.21 "Release notes 0.21")) and/or **Show internal name** ([introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")). Column headings are added if more than one column is displayed. Note that the internal names of objects cannot be changed.

### Edit object label

Select an object in the first column and press F2 (on Windows and Linux), or Enter (on macOS), to edit its Data**Label** property. This property can also be edited via the context menu option **Rename** or in the [Property editor](/Property_editor "Property editor").

### Edit object description

An object can optionally have a description. This information is stored in its Data**Label2** property. If the description column is displayed you can edit this property by selecting an object in that column and pressing F2 (on Windows and Linux), or Enter (on macOS). The property can also be changed in the [Property editor](/Property_editor "Property editor").

### Context menu

The options in the context menu of the Tree view depend on the selected object(s) and the currently active workbench. To display this menu right-click the background of the list, right-click an object in the list, or select multiple objects in the list and then right-click one of them.

### Keyboard modifiers

The usual keyboard modifiers can be used in the Tree view. The modifiers can be combined as well.

- Ctrl: hold down this key to select multiple objects.
- Shift: hold down this key to select all objects between a previously selected object and the next selected object.

### Keyboard shortcuts

The following keyboard shortcuts are available when the focus is on the Tree view:

- Ctrl+F: opens a search box at the bottom of the tree, allowing to search and reach objects using their internal names or labels.
- Expand and collapse actions using Alt+Arrow combinations: [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
  - Alt+Left: collapses selected item(s).
  - Alt+Right: expands selected item(s).
  - Alt+Up: expands selected item(s) with all their tier-1 children collapsed (deeper children remain unchanged).
  - Alt+Down: expands selected item(s) with all their tier-1 children expanded as well (deeper children remain unchanged).

## Overlay icons

One or more overlay icons can be displayed on top of an object's default icon in the Tree view. The available overlay icons and their meaning are listed below.

### White check mark on blue background

This indicates that the object has to be [recomputed](/Std_Refresh "Std Refresh"), due to changes made to the model or because the user marked the object in the Tree view context menu to be recomputed. In most cases recomputes are triggered automatically, but sometimes they are delayed for performance reasons.

### White exclamation mark on red background

This indicates that the object has an error that needs to be fixed. After recomputing the whole document a tooltip describing the error is shown when you hover the mouse over the object in the Tree view. Note: All other objects depending on an object in such an error state will not be properly recomputed, thus they may still show some old state.

### Purple chain link

This is typically shown for [sketches](/Sketch "Sketch"), [PartDesign](/PartDesign_Workbench "PartDesign Workbench") primitives, such as box, cylinder, etc. and [Datum](/Datum "Datum") geometry. It indicates that the object is not attached to anything. It has no Attachment Offset and gets its position and alignment solely from its [Placement](/Placement "Placement") property.

There is a [Basic Attachment Tutorial](/Basic_Attachment_Tutorial "Basic Attachment Tutorial") explaining how to handle such objects.

### Yellow X

This is only used for [sketches](/Sketch "Sketch") and indicates that the sketch is not fully constrained. If the sketch is in [edit mode](/Sketcher_EditSketch "Sketcher EditSketch") the number of remaining degrees of freedom is shown in the [solver messages](/Sketcher_Dialog#Solver_messages "Sketcher Dialog").

### White arrow on green background

This indicates the so called [Tip](/PartDesign_Body#Tip "PartDesign Body") of a [PartDesign Body](/PartDesign_Body "PartDesign Body"). It is usually the last feature in a body and represents the whole body to the world outside of the body, e.g. when the body is exported or used in [Part boolean](/Part_Boolean "Part Boolean") operations. The tip can be changed by the user.

### Red backslash

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

This indicates a suppressed [PartDesign](/PartDesign_Workbench "PartDesign Workbench") feature.

### White upwards curved arrow

This indicates a [linked](/Std_LinkMake "Std LinkMake") object.

### Two white upwards curved arrows

This indicates a [linked](/Std_LinkMake "Std LinkMake") object loaded from an external document.

### Eye symbol

This indicates that the object will be hidden in the Tree view if the **Show items hidden in Tree view** context menu option is unchecked.

### Cyan ice crystal

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0")

This indicates a [frozen](/Std_ToggleFreeze "Std ToggleFreeze") object that is not recomputed when its parents change.

## Preferences

See [Combo view](/Combo_view#Preferences "Combo view").

Retrieved from "<http://wiki.freecad.org/index.php?title=Tree_view/en&oldid=1495035>"
