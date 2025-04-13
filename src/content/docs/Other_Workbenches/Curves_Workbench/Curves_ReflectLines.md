---
title: Curves ReflectLines
---

|                                                |
| ---------------------------------------------- |
| Curves ReflectLines                            |
| Menu location                                  |
| Surfaces → Reflect Lines                       |
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

The ![](/src/assets/images/Curves_ReflectLines.svg) **Curves ReflectLines** tool creates the reflect lines on a shape, according to a view direction.

## Usage

1. Select an object.
2. There are several ways to invoke the tool:
   - Press the ![](/src/assets/images/Curves_ReflectLines.svg) [Reflect Lines](/Curves_ReflectLines "Curves ReflectLines") button.
   - Select the **Surfaces → ![](/src/assets/images/Curves_ReflectLines.svg) Reflect Lines** option from the menu.
3. If the selected object is not a **ReflectLines** object a **ReflectLines** object is created.
4. The view direction of the ReflectLines object will be set according to the current camera direction.
5. Optionally edit the values in the [Property editor](/Property_editor "Property editor") to choose the lines to be created, and where they are placed and also adjust the related properties (see Properties below).

## Notes

- If the Data**On Shape** property is `true`, the lines will be ON the input shape (Data**View Pos** and Data**Up Dir** properties won't be used).  
  Otherwise, lines will be on the XY plane.
- If the View**TrackCamera** property is `true`, the view direction will keep updating upon camera movements.

## Properties

See also: [Property editor](/Property_editor "Property editor").

A **ReflectLines** object is derived from an [App FeaturePython](/App_FeaturePython "App FeaturePython") object and inherits all its properties. It also has the following additional properties:

### View

AutoView

- View**TrackCamera** (`Bool`): Track camera movements

### Data

Cleaning Options

- Data (Hidden)**Cleaning Tolerance** (`Quantity`): Cleaning Tolerance for duplicate detection.
- Data**Remove Duplicates** (`Bool`): Remove duplicate edges.
- Data (Hidden)**Samples** (`Integer`): Number of edge samples.

Edge Type

- Data**Iso Line** (`Bool`): Isoparametric lines.
- Data**Out Line** (`Bool`): Outline silhouette lines.
- Data**Rg1 Line** (`Bool`): smooth edge of G1-continuity between two surfaces.
- Data**RgN Line** (`Bool`): sewn edge of CN-continuity on one surface.
- Data**Sharp** (`Bool`): sharp edge (of C0-continuity).

Reflect Lines

- Data**Indiv Faces** (`LinkSubList`): Individual faces.
- Data**On Shape** (`Bool`): Output on-shape 3D lines.
- Data**Source** (`Link`): Source object.
- Data (Hidden)**Up Dir** (`Vector`): Up direction.
- Data**View Dir** (`Vector`): View direction.
- Data (Hidden)**View Pos** (`Vector`): View position.
- Data**Visible** (`Bool`): Generate the visible lines, or the hidden lines.

Retrieved from "<http://wiki.freecad.org/index.php?title=Curves_ReflectLines/en&oldid=1566690>"
