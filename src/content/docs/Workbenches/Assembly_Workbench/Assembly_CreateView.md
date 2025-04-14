---
title: Assembly CreateView
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                      |
| ---------------------------------------------------- |
| Assembly CreateView                                  |
| Menu location                                        |
| Assembly → Create Exploded View                      |
| Workbenches                                          |
| [Assembly](/Assembly_Workbench "Assembly Workbench") |
| Default shortcut                                     |
| V                                                    |
| Introduced in version                                |
| 1.0                                                  |
| See also                                             |
| _None_                                               |
|                                                      |

## Description

The ![](/images/Assembly_CreateView.svg) [Assembly CreateView](/Assembly_CreateView "Assembly CreateView") tool creates an exploded views container (Exploded_Views object) in the active Assembly that contains one (default) or more exploded views (Exploded_View objects). An assembly can only hold one exploded views container.

An exploded view collects the moves (Move objects) used to relocate parts from assembled position to exploded position. The altered positions of assembled parts and the representations of the moves are only visible when an exploded view is being edited and in TechDraw views derived from an exploded view.

## Usage

1. Make sure an assembly is active.
2. There are several ways to invoke the tool:
   - Press the ![](/images/Assembly_CreateView.svg) [Create Exploded View](/Assembly_CreateView "Assembly CreateView") button.
   - Select the **Assembly → ![](/images/Assembly_CreateView.svg) Create Exploded View** option from the menu.
   - Use the keyboard shortcut: E.
3. If no Exploded_Views object pre-exists: An Exploded_Views container is added to the active assembly.
4. An Exploded_View object is added to the Exploded_Views container.
5. The **Create Exploded View** dialog opens in the [task panel](/Task_panel "Task panel").
6. Optionally check **Parts as single solid** checkbox to...
7. Optionally choose one way to add a Move:
   - Explode radially:
     1. Press Explode radially
     2. All parts are selected and a dragger (see [Notes](#Notes)) appears.
     3. Optionally realign the dragger by selecting one option from the **Align dragger to...** drop-down list.
        - Align to...
          1. Select an edge or a face of any part to align the dragger.
        - Align to part center.
          1. The dragger is aligned according to the grounded part's center.
        - Align to part origin.
          1. The dragger is aligned according to the grounded part's origin.
     4. Move the dragger by one or more of the following options (only the offset from the start point counts, each part's direction is calculated separately):
        - Press and hold the left mouse button on an axis arrow and drag to translate the object along that axis.
        - Press and hold the left mouse button on a plane and drag to translate the object along that plane.
        - Press and hold the left mouse button on a sphere and drag to rotate the object around that axis.
     5. A Move (see [Notes](#Notes)) is added once the left mouse button is released.
   - Explode along separate movements:
     1. Select one or more parts.
     2. A dragger appears.
     3. Optionally realign the dragger (see above).
     4. Move the dragger as described above (the directions according to the dragger handles are taken into account).
     5. A Move is added once the left mouse button is released.
     6. Optionally select/deselect parts and/or repeat dragging to add more Moves.
8. Do one of the following:
   - Press the OK button to confirm and finish the tool.
   - Press the Cancel button to revert all changes and finish the tool.
9. All parts are moved back into their assembly position and the connecting lines are hidden.

## Notes

- The dragger is a tool similar to the transformation manipulator (![](/images/Std_TransformManip.svg) [Std TransformManip](/Std_TransformManip "Std TransformManip")), but without an **Increments** task panel.
- A Move object in the [tree view](/Tree_view "Tree view") is represented in the [3D view](/3D_view "3D view") by a dashed red line for each part involved in this move. These connecting lines are only visible when this tool is running, or in a TechDraw view that is derived from an Exploded_View object.
- To add an exploded view to a TechDraw page: switch to the [TechDraw Workbench](/TechDraw_Workbench "TechDraw Workbench"), add a page, select the exploded view object in the tree, and click [Insert View](/TechDraw_View "TechDraw View").

## Properties

See also: [Property editor](/Property_editor "Property editor").

Exploded_Views containers are `Assembly::ViewGroup` objects. Exploded_View objects are derived from the `ExplodedView` class, and Move objects from the `ExplodedViewStep` class.

### Assembly::ViewGroup

#### Data

Base

- Data**Label** (`String`):
- Data (Hidden)**Label2** (`String`):
- Data (Hidden)**Expression Engine** (`ExpressionEngine`):
- Data (Hidden)**Visibility** (`Bool`):
- Data**Group** (`LinkList`):
- Data (Hidden)**\_ Group Touched** (`Bool`):

#### View

Display Options

- View**Display Mode** (`Enumeration`):
- View**Show In Tree** (`Bool`):
- View**Visibility** (`Bool`):

Selection

- View**On Top When Selected** (`Enumeration`):
- View**Selection Style** (`Enumeration`):

### ExplodedView

An **ExplodedView** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

#### Data

Exploded View

- Data**Moves** (`LinkList`): List of the Move objects of the exploded view.

### ExplodedViewStep

An **ExplodedViewStep** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

#### Data

Exploded Move

- Data**Move Type** (`Enumeration`): The Type of the move. (`Normal`, `Radial`).
- Data**Movement Transform** (`Placement`): This is the movement of the move.

  : The end placement is the result of the start placement \* this placement.

- Data**Obj Names** (`StringList`): The objects moved by the move.
- Data**Parts** (`LinkList`): The containing parts of objects moved by the move.

Retrieved from "<http://wiki.freecad.org/index.php?title=Assembly_CreateView/en&oldid=1515379>"
