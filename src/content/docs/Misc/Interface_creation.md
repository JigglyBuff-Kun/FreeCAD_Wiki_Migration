---
title: Interface creation
---

## Introduction

Power users have the possibility of [creating interfaces](/Interface_creation "Interface creation") to help them produce complex tools for their custom [addons](/Addon "Addon"), such as [macros](/Macros "Macros") or full [workbenches](/Workbenches "Workbenches").

Interfaces are created using [PySide](/PySide "PySide"), which is a library for using Qt with [Python](/Python "Python").

![](/images/FreeCAD_creating_interfaces.svg)

Two general methods to create interfaces, by including the interface in the Python file, or by using `.ui` files.

## Description

There are typically two ways of creating interfaces with PySide.

### Interface in a .ui file

In this method the interface is defined in a `.ui` file (an XML document that defines the structure of the interface), which is then imported into [Python](/Python "Python") code that uses it. This is the recommended approach.

- It allows the programmer to work with the graphical interface separately from the logic that will use it.
- It allows anybody to look at the interface alone, that is, the `.ui` file, without having to run Python code.
- The `.ui` file may be designed by anybody without programming knowledge.
- The `.ui` interface can be used in a standalone window (modal), or in an embedded window (non-modal); therefore, this method is ideal to create custom [task panels](/Task_panel "Task panel").
- Since the `.ui` file just describes the "appearance" of the interface, it does not need to be tied to a particular programming language; it may be used both in [Python](/Python "Python") and C++ code.

### Interface completely in Python code

In this method the entire interface is defined by several Python calls.

- This is an older way of working with interfaces.
- This method produces very verbose code because many details of the interface need to be specified by hand.
- It is not simple to separate the interface from the logic that uses that code, meaning that a user would need to run the [Python](/Python "Python") file in the correct context in order to see how the interface would look.
- This method has the advantage that several interfaces may be contained within a single document, at the expense of making the file very large.
- This method is recommended only for small interfaces that don't define more than a few widgets, for example in [macros](/Macros "Macros").

For examples on this method see [Interface creation completely in Python](/Dialog_creation "Dialog creation").

Retrieved from "<http://wiki.freecad.org/index.php?title=Interface_creation/en&oldid=1068431>"
