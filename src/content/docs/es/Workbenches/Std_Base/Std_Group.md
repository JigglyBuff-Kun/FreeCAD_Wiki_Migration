---
title: Std Group/es
---
|  |
| --- |
| Std Group |
| Ubicación en el Menú |
| Tree View → Right click on the document name |
| Entornos de trabajo |
| All |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| [Draft SelectGroup](/Draft_SelectGroup/es "Draft SelectGroup/es"), [Draft AddToGroup](/Draft_AddToGroup/es "Draft AddToGroup/es") |
|  |

## Description

[Std Group](/Std_Group "Std Group") (internally called [App DocumentObjectGroup](/App_DocumentObjectGroup "App DocumentObjectGroup")) is a general purpose container that allows you to group different types of objects in the [Tree view](/Tree_view "Tree view"), regardless of their data type. It is used as a simple folder to categorize and organize the objects in your model, in order to keep a logical structure. Std Groups may be nested inside other Std Groups.

The Std Group tool is not defined by a particular workbench, but by the base system, thus it is found in the **structure toolbar** that is available in all [workbenches](/Workbenches "Workbenches").

To group 3D objects as a single unit, with the intention of creating assemblies, use [Std Part](/Std_Part "Std Part") instead.

![](/images/Std_Group_example.png)

Various elements inside Std Groups in the tree view.

## Usage

1. Do one of the following:
   * Right-click the name of the document in the [Tree view](/Tree_view "Tree view") and in the context menu choose **Create group...**.
   * Press the ![](/images/Std_Group.svg) [Create group](/Std_Group "Std Group") button.
2. An empty Group is created.
3. To add objects to the Group, select them in [Tree view](/Tree_view "Tree view"), and drag and drop them onto the Group.
4. To remove objects from the Group, drag them out of the Group, and onto the document label at the top of the [Tree view](/Tree_view "Tree view").
5. Objects can also be added and removed by editing the Datos**Group** property of the Group.

## Properties

The [Std Group](/Std_Group "Std Group"), internally called [App DocumentObjectGroup](/App_DocumentObjectGroup "App DocumentObjectGroup") (`App::DocumentObjectGroup` class), is derived from the basic [App DocumentObject](/App_DocumentObject "App DocumentObject") (`App::DocumentObject` class) and inherits all its properties.

The Std Group has the same properties as the [App FeaturePython](/App_FeaturePython#Properties "App FeaturePython"), which is the most basic instance of an [App DocumentObject](/App_DocumentObject "App DocumentObject"). It also has the following additional properties in the [property editor](/Property_editor "Property editor"). Hidden properties can be shown by using the **Show hidden** command in the context menu of the [property editor](/Property_editor "Property editor").

### Data

Base

* Datos**Group** (`LinkList`): a list of referenced objects. By default, it is empty `[]`.
* Datos (Hidden)**\_ Group Touched** (`Bool`): whether the group is touched or not.

## Scripting

*See also:* [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics") and [scripted objects](/Scripted_objects "Scripted objects").

See [Part Feature](/Part_Feature "Part Feature") for the general information on adding objects to the document.

A Std Group ([App DocumentObjectGroup](/App_DocumentObjectGroup "App DocumentObjectGroup")) is created with the `addObject()` method of the document. Once a Group exists, other objects can be added to it with the `addObject()` or `addObjects()` methods.

```
import FreeCAD as App

doc = App.newDocument()
group = App.ActiveDocument.addObject("App::DocumentObjectGroup", "Group")

obj1 = App.ActiveDocument.addObject("PartDesign::Body", "Body")
obj2 = App.ActiveDocument.addObject("Part::Box", "Box")

group.addObjects([obj1, obj2])
App.ActiveDocument.recompute()

```

This basic `App::DocumentObjectGroup` doesn't have a Proxy object so it can't be fully used for sub-classing.

For [Python](/Python "Python") subclassing you should create a `App::DocumentObjectGroupPython` object.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject("App::DocumentObjectGroupPython", "Name")
obj.Label = "Custom label"

```

For example, a [FEM Analysis](/FEM_Analysis "FEM Analysis") is an `App::DocumentObjectGroupPython` object with a custom icon and additional properties.

## Links

* [Use case in Arch Tutorial](/Arch_tutorial#Organizing_your_model "Arch tutorial")
* [Document structure](/Document_structure "Document structure")
* [Organizing your model](http://www.freecadweb.org/wiki/index.php?title=Arch_tutorial#Organizing_your_model)

Retrieved from "<http://wiki.freecad.org/index.php?title=Std_Group/es&oldid=1560711>"