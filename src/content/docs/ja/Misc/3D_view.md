---
title: 3Dビュー
---
## Introduction

The [3D view](/3D_view "3D view") of FreeCAD is an instance of a Coin3D [scenegraph](/Scenegraph "Scenegraph") that forms the most important window in the [interface](/Interface "Interface"). Coin3D is a library that implements the OpenInventor 2.1 scene description standard.

Certain properties of the view, like background color, [mouse navigation](/Mouse_navigation "Mouse navigation") style, and zooming steps, can be configured in the [preferences editor](/Preferences_Editor "Preferences Editor").

![](/images/FreeCAD_3D_view.png)

The [3D view](/3D_view "3D view") is a component of the FreeCAD [interface](/Interface "Interface"). By default it shows a small widget with coordinate axes, and the navigation cube also with coordinate axes; the grid can be displayed and configured by loading the [Draft Workbench](/Draft_Workbench "Draft Workbench").

## Context menu

The options in the context menu of the 3D view depend on the selected object(s) and the currently active workbench. To display this menu optionally select one or more objects and then right-click in the 3D view.

## Details

FreeCAD uses the Quarter library to use Coin3D in a Qt environment.

It is possible to interact directly with the 3D view scenegraph from the [Python console](/Python_console "Python console") by using the Python library Pivy.

For more information see the power user documentation:

* [Scenegraph](/Scenegraph "Scenegraph"), description of Coin3D.
* [Pivy](/Pivy "Pivy"), usage of Coin3D from the Python console.
* [Third party libraries](/Third_Party_Libraries "Third Party Libraries") used by FreeCAD.
* [Coin3D](https://grey.colorado.edu/coin3d/index.html) C++ documentation.

Retrieved from "<http://wiki.freecad.org/index.php?title=3D_view/ja&oldid=1532668>"