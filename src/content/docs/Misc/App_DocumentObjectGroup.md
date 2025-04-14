---
title: App DocumentObjectGroup
---

## Introduction

![](/images/Folder.svg)

An [App DocumentObjectGroup](/App_DocumentObjectGroup "App DocumentObjectGroup") object, or formally an `App::DocumentObjectGroup`, is a simple element that allows grouping any type of [App DocumentObject](/App_DocumentObject "App DocumentObject") in the [tree view](/Tree_view "Tree view") no matter its type of data.

It was developed to organize the objects in the [tree view](/Tree_view "Tree view") in a way that is logical for the user.

![](/images/FreeCAD_core_objects.svg)

Simplified diagram of the relationships between the core objects in the program. The `App::DocumentObjectGroup` class has an extension that allows it to group any type of object; the Group itself doesn't have many properties.

## Usage

1. Press the ![](/images/Std_Group.svg) [Std Group](/Std_Group "Std Group") button in the structure toolbar. An empty Group is created.
2. To add objects to a Group, select them in the [tree view](/Tree_view "Tree view"), and then drag and drop them over the Group.
3. To remove objects from a Group, drag them out of the Group, and onto the document label at the top of the [tree view](/Tree_view "Tree view").

See the [Std Group](/Std_Group "Std Group") page for the complete information, including its use in [Scripting](/Std_Group#Scripting "Std Group").

## Properties

An [App DocumentObjectGroup](/App_DocumentObjectGroup "App DocumentObjectGroup") (`App::DocumentObjectGroup` class) is derived from the basic [App DocumentObject](/App_DocumentObject "App DocumentObject") (`App::DocumentObject` class), therefore it shares all the latter's properties.

See the properties in the [Std Group](/Std_Group "Std Group") page.

Retrieved from "<http://wiki.freecad.org/index.php?title=App_DocumentObjectGroup/en&oldid=1356810>"
