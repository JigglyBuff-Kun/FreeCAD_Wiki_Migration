---
title: Addon
---

## Introduction

In FreeCAD and in this documentation, an [addon](/Addon "Addon") is any component that is not part of the base installation, but that can be added to the system by certain methods.

## Different types

There are three types of addons:

- [Macros](/Macros "Macros"): short snippet of [Python](/Python "Python") code that provides a new tool or functionality in a single file ending with `.FCMacro`.
- [Workbenches](/External_workbenches "External workbenches"): collections of Python files that provide related [Gui Commands](/Gui_Command "Gui Command") (tools) centered around a particular topic, for example, tools to design cabinets, or tools to work with architecture, or tools to design boats, etc. These workbenches usually define new toolbars where [commands](/Gui_Command "Gui Command") are placed as buttons.
- [Preference Packs](/Preference_Packs "Preference Packs"): distributable collections of user preferences. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")

## Installation

The recommended way to install addons is with the ![](/images/Std_AddonMgr.svg) [Addon Manager](/Std_AddonMgr "Std AddonMgr").

But for macros and workbenches manual installation is also possible:

- [How to install macros](/How_to_install_macros "How to install macros")
- [Installing more workbenches](/Installing_more_workbenches "Installing more workbenches")

## Information for developers

If you have developed a macro or workbench, and want to see it included in the Addon manager, read how to do so on the repository pages: ([FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons/) and [FreeCAD-macros](https://github.com/FreeCAD/FreeCAD-macros/)). If you add your macro to the [Macros recipes](/Macros_recipes "Macros recipes") page, there is nothing else to do, it will automatically be picked up by the Addon manager.

See also:

- [Distribution of a Python workbench](/Workbench_creation#Distribution "Workbench creation")
- [Distribution of a C++ workbench](/Workbench_creation#Distribution_2 "Workbench creation")

Retrieved from "<http://wiki.freecad.org/index.php?title=Addon/en&oldid=1207617>"
