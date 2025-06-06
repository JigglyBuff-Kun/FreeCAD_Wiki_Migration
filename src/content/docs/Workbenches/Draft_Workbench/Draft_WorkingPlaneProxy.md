---
title: Draft WorkingPlaneProxy
---

|                                                                                    |
| ---------------------------------------------------------------------------------- |
| Draft WorkingPlaneProxy                                                            |
| Menu location                                                                      |
| Utilities → Create working plane proxy Utils → Create working plane proxy          |
| Workbenches                                                                        |
| [Draft](/Draft_Workbench "Draft Workbench"), [BIM](/BIM_Workbench "BIM Workbench") |
| Default shortcut                                                                   |
| _None_                                                                             |
| Introduced in version                                                              |
| -                                                                                  |
| See also                                                                           |
| [Draft SelectPlane](/Draft_SelectPlane "Draft SelectPlane")                        |
|                                                                                    |

## Description

The ![](/images/Draft_WorkingPlaneProxy.svg) **Draft WorkingPlaneProxy** command creates a working plane proxy to save the current [Draft working plane](/Draft_SelectPlane "Draft SelectPlane"). A working plane proxy can be used to quickly restore a working plane. The camera position and visibility of the objects in the [3D view](/3D_view "3D view") are also saved in the working plane proxy and can, [optionally](#Properties), be restored as well.

![](/images/Draft_WPProxy_example.png)

Three working plane proxies showing different orientations and offsets

## Usage

1. Optionally change the [working plane](/Draft_SelectPlane "Draft SelectPlane").
2. Optionally change the [3D view](/3D_view "3D view").
3. Optionally change the visibility state of objects in the document.
4. There are several ways to invoke the command:
   - [Draft](/Draft_Workbench "Draft Workbench"): Press the ![](/images/Draft_WorkingPlaneProxy.svg) [Create working plane proxy](/Draft_WorkingPlaneProxy "Draft WorkingPlaneProxy") button.
   - Draft: Select the **Utilities → ![](/images/Draft_WorkingPlaneProxy.svg) Create working plane proxy** option from the menu, or from the [Tree view](/Tree_view "Tree view") or 3D view context menu.
   - [BIM](/BIM_Workbench "BIM Workbench"): Select the **Utils → ![](/images/Draft_WorkingPlaneProxy.svg) Create working plane proxy** option from the menu.
5. A working plane proxy is created.
6. To align the [working plane](/Draft_SelectPlane "Draft SelectPlane") with a working plane proxy, double-click the working plane proxy in the [Tree view](/Tree_view "Tree view") or use it with the [Draft SelectPlane](/Draft_SelectPlane "Draft SelectPlane") command.

## Context menu

For a Draft WorkingPlaneProxy these additional options are available in the [Tree view](/Tree_view "Tree view") context menu:

- **![](/images/Draft_SelectPlane.svg) Write camera position**: updates the View**View Data** property of the working plane proxy with the current [3D view](/3D_view "3D view") camera settings.
- **![](/images/Draft_SelectPlane.svg) Write objects state**: updates the View**Visibility Map** property of the working plane proxy with the current visibility state of objects in the document.

## Notes

- Working plane proxies can be [moved](/Draft_Move "Draft Move") and [rotated](/Draft_Rotate "Draft Rotate") like any other object. Use ![](/images/Draft_Snap_Center.svg) [Draft Snap Center](/Draft_Snap_Center "Draft Snap Center") to snap to their Data**Placement** point.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A Draft WorkingPlaneProxy object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Base

- Data**Placement** (`Placement`): specifies the position of the working plane proxy in the [3D view](/3D_view "3D view"). See [Placement](/Placement "Placement").
- Data (Hidden)**Shape** (`Shape`): specifies the shape of the working plane proxy.

### View

Base

- View**Line Color** (`Color`): specifies the color of all elements of the working plane proxy.
- View**Line Width** (`Float`): specifies the line width of the axes and arrow symbols.
- View**Restore State** (`Bool`): specifies if the View**Visibility Map** is restored when the [working plane](/Draft_SelectPlane "Draft SelectPlane") is aligned with the working plane proxy.
- View**Restore View** (`Bool`): specifies if the View**View Data** is restored when the [working plane](/Draft_SelectPlane "Draft SelectPlane") is aligned with the working plane proxy.
- View**Transparency** (`Percent`): specifies the transparency of the face of the working plane proxy.
- View**View Data** (`FloatList`): specifies the camera position and settings.
- View (Hidden)**Visibility Map** (`Map`): specifies the visibility state of objects.

Draft

- View**Arrow Size** (`Length`): specifies the size of the arrow symbols displayed at the tip of the three axes.
- View**Display Size** (`Length`): specifies the length and width of the working plane proxy.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

To create a Draft WorkingPlaneProxy use the `make_workingplaneproxy` method of the Draft module.

If the [Draft Workbench](/Draft_Workbench "Draft Workbench") is active the FreeCAD application object has a `DraftWorkingPlane` property which stores the current working plane. The `Placement` from the `getPlacement` method of the `DraftWorkingPlane` object can be used to create an aligned working plane proxy. The `Placement` of a working plane proxy in turn can be used to realign the working plane.

```
# This code only works if the Draft Workbench is active!

import FreeCAD as App
import FreeCADGui as Gui
import Draft

doc = App.newDocument()

workplane = App.DraftWorkingPlane
place = workplane.getPlacement()

proxy = Draft.make_workingplaneproxy(place)
proxy.ViewObject.DisplaySize = 3000
proxy.ViewObject.ArrowSize = 200

axis2 = App.Vector(1, 1, 1)
point2 = App.Vector(3000, 0, 0)
place2 = App.Placement(point2, App.Rotation(axis2, 90))

proxy2 = Draft.make_workingplaneproxy(place2)
proxy2.ViewObject.DisplaySize = 3000
proxy2.ViewObject.ArrowSize = 200

workplane.setFromPlacement(proxy2.Placement, rebase=True)
Gui.Snapper.setGrid()

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_WorkingPlaneProxy/en&oldid=1473557>"
