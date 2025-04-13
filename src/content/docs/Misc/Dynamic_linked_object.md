---
title: Dynamic linked object
---

## Introduction

[Link](/Std_Link "Std Link") (internally [App::Link](/App_Link "App Link")) is an important new feature introduced in [FreeCAD 0.19](/Release_notes_0.19 "Release notes 0.19") for creating [assemblies](/Assembly "Assembly").

This article aims to layout one pattern for complex assemblies involving _dynamic linked objects_ which aims to reduce duplication of assembly related logic such as orientation, positioning, or number of instances.

## Example

To illustrate the dynamic linked object concept, consider a table with four legs.

Each leg has two different variants:

1. Round
2. and Square

The variants can be controlled by a parameter in a [spreadsheet](/Spreadsheet "Spreadsheet").

For our table model, we'll create **five** separate documents:

1. `TableTop.FCStd` - containing the top of the table.
2. `RoundTableLeg.FCStd` - containing a _round_ table leg.
3. `SquareTableLeg.FCStd` - containing a _square_ table leg.
4. `Table.FCStd` - containing the assembly of the table top and legs.
5. `Spreadsheet.FCStd` - containing a spreadsheet to drive the model.

Our simple table model will define the following parameters in `Spreadsheet.FCStd`:

1. `TableTopSize` - Dimension of the **square** table top.
2. `TableTopThickness` - Thickness of the table top.
3. `TableLegSize` - Size of each table leg. For Square leg, this is the dimension. For Round leg, this is the diameter.
4. `TableLegHeight` - Height of each table leg.
5. `TableLegVariant` - Controls the style of table leg. Possible values include "`Square`" and "`Round`".

`Table.FCStd` is where the dynamic linked object concept is illustrated.

The goal is to _not_ duplicate the following assembly logic for each table leg variant:

1. Each table leg must appear **four** times underneath each corner of the table top.

How this is accomplished:

1. The `TableTop` and one of the TableLeg objects (Round or Square) are linked into the `Table` document.
2. The TableLeg link is renamed to `TableLeg` and the "Linked Object" property is changed to the following conditional expression:
   1. `<<Spreadsheet>>#Spreadsheet.TableLegVariant == <<Square>> ? <<SquareTableLeg>>#<<SquareTableLeg>>._self : <<RoundTableLeg>>#<<RoundTableLeg>>._self`
3. Each table leg must appear **four** times underneath each corner of the table top so an [orthogonal array](/Draft_OrthoArray "Draft OrthoArray") is created using the parametric `TableLeg` link as a base object.

💡 The full example and all files are available to download as a git repository from GitHub:

<https://github.com/gbroques/freecad-dynamic-linked-object>

**GIF Recording**

![](/src/assets/images/Dynamic-table-leg.gif)

## FreeCAD Forum Discussion

- [How to Make Dynamic Linked Object Based on Expression](https://forum.freecadweb.org/viewtopic.php?f=8&t=57242)

Retrieved from "<http://wiki.freecad.org/index.php?title=Dynamic_linked_object&oldid=1204540>"
