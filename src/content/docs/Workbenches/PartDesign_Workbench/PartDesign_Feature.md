---
title: PartDesign Feature
---

## Introduction

A [PartDesign Feature](/PartDesign_Feature "PartDesign Feature") refers to a "step" in the modelling process that happens inside of a [PartDesign Body](/PartDesign_Body "PartDesign Body"). For example, each time you add a solid box with [PartDesign AdditiveBox](/PartDesign_AdditiveBox "PartDesign AdditiveBox"), you add a feature; when you add a chamfer to an edge with [PartDesign Chamfer](/PartDesign_Chamfer "PartDesign Chamfer"), you add another feature; when you cut a hole using a [sketch](/Sketch "Sketch") and [PartDesign Pocket](/PartDesign_Pocket "PartDesign Pocket"), you add another feature.

![](/images/PartDesign_Feature_example.png)

Feature editing in a [PartDesign Body](/PartDesign_Body "PartDesign Body") with three sequential features.

There are many types of features which can add or remove volume from an initial solid. The word "feature" refers to the operation itself, and also to the resulting solid after that operation.

To learn more about creating solid objects with the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") see [feature editing](/Feature_editing "Feature editing").

## Usage

Almost all tools in the [PartDesign Workbench](/PartDesign_Workbench "PartDesign Workbench") are meant to add features to a [PartDesign Body](/PartDesign_Body "PartDesign Body"). These tools can be accessed from the menu and toolbar buttons while an object or sub-element (vertex, edge, face) is selected.

The features can be placed in different categories:

- Feature base: refers to the Base Feature object that can be created in a [PartDesign Body](/PartDesign_Body "PartDesign Body").
- Additive and subtractive
  - Primitive shapes: [Box](/PartDesign_AdditiveBox "PartDesign AdditiveBox"), [Cone](/PartDesign_AdditiveCone "PartDesign AdditiveCone"), [Cylinder](/PartDesign_AdditiveCylinder "PartDesign AdditiveCylinder"), [Ellipsoid](/PartDesign_AdditiveEllipsoid "PartDesign AdditiveEllipsoid"), [Prism](/PartDesign_AdditivePrism "PartDesign AdditivePrism"), [Sphere](/PartDesign_AdditiveSphere "PartDesign AdditiveSphere"), [Torus](/PartDesign_AdditiveTorus "PartDesign AdditiveTorus"), and [Wedge](/PartDesign_AdditiveWedge "PartDesign AdditiveWedge").
  - Primitive shapes subtractive: [Subtractive Box](/PartDesign_SubtractiveBox "PartDesign SubtractiveBox"), [Subtractive Cone](/PartDesign_SubtractiveCone "PartDesign SubtractiveCone"), [Subtractive Cylinder](/PartDesign_SubtractiveCylinder "PartDesign SubtractiveCylinder"), [Subtractive Ellipsoid](/PartDesign_SubtractiveEllipsoid "PartDesign SubtractiveEllipsoid"), [Subtractive Prism](/PartDesign_SubtractivePrism "PartDesign SubtractivePrism"), [Subtractive Sphere](/PartDesign_SubtractiveSphere "PartDesign SubtractiveSphere"), [Subtractive Torus](/PartDesign_SubtractiveTorus "PartDesign SubtractiveTorus"), and [Subtractive Wedge](/PartDesign_SubtractiveWedge "PartDesign SubtractiveWedge").
  - Profile based: [Pad](/PartDesign_Pad "PartDesign Pad"), [Revolution](/PartDesign_Revolution "PartDesign Revolution"), [Loft](/PartDesign_AdditiveLoft "PartDesign AdditiveLoft"), [Pipe](/PartDesign_AdditivePipe "PartDesign AdditivePipe").
  - Profile based subtractive: [Pocket](/PartDesign_Pocket "PartDesign Pocket"), [Hole](/PartDesign_Hole "PartDesign Hole"), [Groove](/PartDesign_Groove "PartDesign Groove"), [Subtractive Loft](/PartDesign_SubtractiveLoft "PartDesign SubtractiveLoft"), [Subtractive Pipe](/PartDesign_SubtractivePipe "PartDesign SubtractivePipe").
- [Boolean](/PartDesign_Boolean "PartDesign Boolean"), including fuse, cut, and common.
- Dress up
  - [Chamfer](/PartDesign_Chamfer "PartDesign Chamfer")
  - [Draft](/PartDesign_Draft "PartDesign Draft")
  - [Fillet](/PartDesign_Fillet "PartDesign Fillet")
  - [Thickness](/PartDesign_Thickness "PartDesign Thickness")
- Transform
  - [Linear pattern](/PartDesign_LinearPattern "PartDesign LinearPattern")
  - [Mirrored](/PartDesign_Mirrored "PartDesign Mirrored")
  - [Multi-transformed](/PartDesign_MultiTransform "PartDesign MultiTransform")
  - [Polar pattern](/PartDesign_PolarPattern "PartDesign PolarPattern")
  - [Scaled](/PartDesign_Scaled "PartDesign Scaled")

## Inheritance

![](/images/FreeCAD_core_objects.svg)

Simplified diagram of the relationships between the core objects in the program. The `PartDesign::Feature` objects are used to build parametric 3D solids, and thus are derived from the basic `Part::Feature` object.

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics"), and [scripted objects](/Scripted_objects "Scripted objects").

See [Part Feature](/Part_Feature "Part Feature") for the general information on adding objects from the [Python console](/Python_console "Python console").

See [PartDesign Body](/PartDesign_Body "PartDesign Body") for the general information on adding a Body. Once a Body exists, features can be attached to it using the Body's `addObject()` method.

```
import FreeCAD as App

doc = App.newDocument()
obj = App.ActiveDocument.addObject('PartDesign::Body', 'Body')
obj.Label = "Custom label"

feature = App.ActiveDocument.addObject('PartDesign::AdditiveBox', 'Box')
feature.Width = 200
feature.Length = 300
feature.Height = 500
obj.addObject(feature)
App.ActiveDocument.recompute()

feature2 = App.ActiveDocument.addObject('PartDesign::SubtractiveBox', 'Box')
feature2.Width = 50
feature2.Length = 200
feature2.Height = 400
obj.addObject(feature2)
App.ActiveDocument.recompute()

```

Retrieved from "<http://wiki.freecad.org/index.php?title=PartDesign_Feature/en&oldid=744333>"
