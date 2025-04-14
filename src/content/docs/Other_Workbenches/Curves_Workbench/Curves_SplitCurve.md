---
title: Curves SplitCurve
---

:::caution
This documentation is not finished. Please help and contribute documentation.GuiCommand modelexplains how commands should be documented. BrowseCategory:UnfinishedDocuto see more incomplete pages like this one. SeeCategory:Command Referencefor all commands.SeeWikiPagesto learn about editing the wiki pages, and go toHelp FreeCADto learn about other ways in which you can contribute.
:::

|                                                |
| ---------------------------------------------- |
| Curves SplitCurve                              |
| Menu location                                  |
| Curves → Split curve                           |
| Workbenches                                    |
| [Curves](/Curves_Workbench "Curves Workbench") |
| Default shortcut                               |
| _None_                                         |
| Introduced in version                          |
| -                                              |
| See also                                       |
| _None_                                         |
|                                                |

## Description

The ![](/images/Curves_SplitCurve.svg) [Curves SplitCurve](/Curves_SplitCurve "Curves SplitCurve") tool splits selected edges.

## Usage

1. Select one or more edges in the [3D view](/3D_view "3D view").
2. There are several ways to invoke the tool:
   - Press the ![](/images/Curves_SplitCurve.svg) [Split curve](/Curves_SplitCurve "Curves SplitCurve") button.
   - Select the **Curves → ![](/images/Curves_SplitCurve.svg) Split curve** option from the menu.
3. A **SplitCurve** object is created for each selected edge.

   : The edge is split by **Number** in 2 equally long curve segments by default.

4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to activate different splitting methods by setting the related properties (see Properties below):
   - Change the Data**Number** property to increase the number of equally long segments, `0` or `1` deactivates this splitting method.
   - Set the Data**Distance** property to split the SplitCurve object at a distance from the start vertex for positive values or from the end vertex for negative values. `0.0 mm` deactivates this splitting method.
   - Load one or more cutting objects into the Data**Cutting Objects** property (click on the entry field and press ... and select one or more edges and/or wires in the dialog).
     1. If Data**Cut At Vertexes** is `false` the SplitCurve object will be split at the intersection points, or at the location of the shortest distance if a cutting object is neither intersecting nor tangent.
     2. If Data**Cut At Vertexes** is `true` all vertices of the cutting objects are projected on the SplitCurve object which is then split at each of the projected points.
   - Add distance values to the Data**Values** property to split the SplitCurve object at several distances from the start vertex for positive values or from the end vertex for negative values (click on the entry field and press ... and enter one or more values in the dialog). Each values can either be a length or a percentage.

## Notes

- This tool also allows the selection of an object containing a wire in the [Tree View](/Tree_view "Tree view") as an input edge. If it contains more than one edge, all but the first one are ignored.
- Splitting methods that independently add splitting locations to the final result:
  1. By Number: Set the Data**Number** property to a value greater than 1 to receive segments of equal lengths.
  2. Single distance: Set the Data**Distance** property to a value other than `0.0 mm`.
  3. Several distances: Add distance values to the Data**Values** property, either absolute (mm) or relative (%).
  4. Cutting objects: Add cutting objects to the Data**Cutting Objects** property,
     - Intersection points: Set the Data**Cut At Vertexes** property to `false` to split at intersection points.
     - Shortest distance: As before, to split at the shortest distance when a cutting object is neither intersecting nor touching.
     - Projected points: Set the Data**Cut At Vertexes** property to `true` to split where the vertices of the cutting object are projected onto the SplitCurve object.
- The values of the Data**Values** property can also be changed by dragging the vertices in the [3D view](/3D_view "3D view") when the SplitCurve object is in edit mode (double-click on the SplitCurve object in the [Tree view](/Tree_view "Tree view") to toggle).

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **SplitCurve** object is derived from a [Part Feature](/Part_Feature "Part Feature") object and inherits all its properties. It also has the following additional properties:

### Data

Base

- Data**Source** (`LinkSub`): Edge to split.

Output

- Data (Hidden)**Normalized Parameters** (`FloatList`): Normalized parameters list.

Split

- Data**Cut At Vertexes** (`Bool`): Create a split point at nearest of each vertex of the cutting objects.
- Data**Cutting Objects** (`LinkList`): List of objects that cut the curve.
- Data**Distance** (`Distance`): Expression-ready distance value.
- Data**Keep Solid** (`Bool`): Rebuild and output the complete shape.
- Data**Number** (`Integer`): Number of equal segments.
- Data**Values** (`StringList`): List of splitting locations.

  : % and units are allowed.
  : Negative values are computed from edge end.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_SplitCurve/en&oldid=1568950>"
