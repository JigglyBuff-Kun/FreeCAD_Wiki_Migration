---
title: Draft AutoGroup/es
---
|  |
| --- |
| Draft AutoGroup |
| Ubicación en el Menú |
| Draft → Utilities → AutoGroup |
| Entornos de trabajo |
| [Draft](/Draft_Workbench/es "Draft Workbench/es"), [Arch](/Arch_Workbench/es "Arch Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Description

The **Draft AutoGroup** command changes the active [Draft Layer](/Draft_Layer "Draft Layer") or, [optionally](#Preferences), the active [Std Group](/Std_Group "Std Group") or group-like [BIM](/BIM_Workbench "BIM Workbench") object. New [Draft](/Draft_Workbench "Draft Workbench") and [BIM](/BIM_Workbench "BIM Workbench") objects are automatically placed in this active layer or group.

This command was originally intended for groups, hence its name, but was redesigned in FreeCAD version 0.19 when a layer system was introduced. Because handling layers is now the default for the command the rest of this page primarily focuses on layers.

![](/images/Draft_Tray_Menu.png)

The layer menu of the Draft Tray (image updated for version 1.1)

## Usage

1. Optionally select the layer you want to make active in the [Tree view](/Tree_view "Tree view").
2. There are several ways to invoke the command:
   * Press the ![](/images/Draft_tray_button_layer.png) button in the [Draft Tray](/Draft_Tray "Draft Tray"). This button can look different. If there is an active layer it will show the name of the layer and a layer icon with the line and face color of the layer.
   * If you have selected a layer: select the **![](/images/Button_right.svg) Activate this layer** option from the [Tree view](/Tree_view "Tree view") context menu.
3. If you have not yet selected a layer the layer menu opens. Do one of the following:
   * Select **![](/images/Button_invalid.svg) None** to work without an active layer.
   * Select an existing layer to make active.
   * Select **![](/images/Draft_NewLayer.svg) New Layer...** to create a new layer:
     1. The **Create new layer** dialog box opens. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
     2. Enter a **Layer name**.
     3. Press the OK button.
     4. The new layer is activated. [introduced in 1.1](/Release_notes_1.1 "Release notes 1.1")
4. If the active layer was changed the button in the [Draft Tray](/Draft_Tray "Draft Tray") is updated.

## Notes

* A new [layer](/Draft_Layer "Draft Layer") can also be created by right-clicking the layer container in the [Tree view](/Tree_view "Tree view") and selecting the **![](/images/Draft_NewLayer.svg) Add new layer** option from the context menu.
* If [Draft construction mode](/Draft_ToggleConstructionMode "Draft ToggleConstructionMode") is switched on the active [layer](/Draft_Layer "Draft Layer") is ignored.

## Preferences

See also: [Preferences Editor](/Preferences_Editor "Preferences Editor") and [Draft Preferences](/Draft_Preferences "Draft Preferences").

* This command can optionally also handle groups: **Edit → Preferences... → Draft → General → Include groups in layer list**.

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

If the [Draft Workbench](/Draft_Workbench "Draft Workbench") is active the FreeCADGui application object has a `draftToolBar` property. This `draftToolBar` object has an `autogroup` property, which contains the name of the active autogroup, or is `None` if no autogroup is active. To change the active autogroup use the `setAutoGroup` method of the `draftToolBar` object. To put objects in the active autogroup use the `autogroup` method of the Draft module.

```
# This code only works if the Draft Workbench is active!

import FreeCAD as App
import FreeCADGui as Gui
import Draft

doc = App.newDocument()

polygon1 = Draft.make_polygon(5, radius=1000)
polygon2 = Draft.make_polygon(3, radius=500)
polygon3 = Draft.make_polygon(6, radius=220)

layer = Draft.make_layer()
Gui.draftToolBar.setAutoGroup(layer.Name)

Draft.autogroup(polygon1)
Draft.autogroup(polygon2)
Draft.autogroup(polygon3)

doc.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=Draft_AutoGroup/es&oldid=1550510>"