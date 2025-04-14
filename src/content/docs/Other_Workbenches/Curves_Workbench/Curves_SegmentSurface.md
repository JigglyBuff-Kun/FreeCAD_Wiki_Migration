---
title: Curves SegmentSurface
---

|                                                |
| ---------------------------------------------- |
| Curves SegmentSurface                          |
| Menu location                                  |
| Surfaces → Segment surface                     |
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

The ![](/images/Curves_SegmentSurface.svg) [Curves SegmentSurface](/Curves_SegmentSurface "Curves SegmentSurface") tool allows to segment a surface on isocurves.

## Usage

1. Select a face in the [3D view](/3D_view "3D view").
2. There are several ways to invoke the tool:
   - Press the ![](/images/Curves_SegmentSurface.svg) [Segment surface](/Curves_SegmentSurface "Curves SegmentSurface") button.
   - Select the **Surfaces → ![](/images/Curves_SegmentSurface.svg) Segment surface** option from the menu.
3. A **Segment_Surface** object is created.
4. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to adjust the related properties (see Properties below).

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **Segment_Surface** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### Data

Base

- Data**Option** (`Enumeration`): Option list.
  - `Custom` (default): ...
  - `Auto`: ...
- Data**Source** (`LinkSub`): Initial Face.

Option Auto

- Data**Direction** (`Enumeration`): Segmenting direction.
  - `U` (default): ...
  - `V`: ...
  - `Both`: ...

UDirection

- Data**Knots U** (`FloatList`): Splitting parameters in U direction.
- Data**Knots UProvider** (`Link`): Object generating normalized parameters in U direction.
- Data**Number U** (`Integer`): Split the U parameter range in the given number of segments.

VDirection

- Data**Knots V** (`FloatList`): Splitting parameters in V direction.
- Data**Knots VProvider** (`Link`): Object generating normalized parameters in V direction.
- Data**Number V** (`Integer`): Split the V parameter range in the given number of segments.

## Scripting

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_SegmentSurface/en&oldid=1566847>"
