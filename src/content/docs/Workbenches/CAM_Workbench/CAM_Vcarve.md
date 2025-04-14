---
title: CAM Vcarve
---

|                                       |
| ------------------------------------- |
| CAM Vcarve                            |
| Menu location                         |
| CAM → Vcarve                          |
| Workbenches                           |
| [CAM](/CAM_Workbench "CAM Workbench") |
| Default shortcut                      |
| _None_                                |
| Introduced in version                 |
| 0.19                                  |
| See also                              |
| _None_                                |
|                                       |

## Description

The ![](/images/CAM_Vcarve.svg) [Vcarve](/CAM_Vcarve "CAM Vcarve") tool is primarily for center-line engraving a ![](/images/Draft_ShapeString.svg) [Draft ShapeString](/Draft_ShapeString "Draft ShapeString") onto a part. However, it may be useful for other kinds of 2D.

Unlike engraving which follows the lines in the shapestring, V-carving uses a V-shaped cutter and attempts to clear the area by moving the cutter down the center of the region and varying the depth of cut. Since a v-cutter radius varies with the depth, the width of cut varies as well. The result is a more natural looking cut, particularly for serif fonts.

![](/images/Engravepath.png)

![](/images/Vcarvepath.png)

Example Vcarving Path

![](/images/Vcarved.png)

![](/images/Scrolltest.png)

The V-carve algorithm calculates a path down the center-line of a region using a Voronoi diagram. This center-line is the path the tool will follow in the XY plane. It next calculates a 'maximum inscribed circle' along the path. This is the largest circle that can be drawn at that point and remain entirely inside the clearing area. Using the circle radius and the tip angle of the cutter, the depth of cut is calculated.

## Usage

### Prepare the shapes to engrave

- ![](/images/Draft_ShapeString.svg) [Draft ShapeStrings](/Draft_ShapeString "Draft ShapeString") are usable out of the box

* SVG files require some massaging, both in the editor and in the ![](/images/Workbench_Draft.svg) [Draft Workbench](/Draft_Workbench "Draft Workbench"):

  - In the editor (e.g. [Inkscape](https://www.inkscape.org)): make sure the file only contains paths and that the paths are ungrouped; make sure there are no self-intersecting paths, (in Inkscape) use Path → Simplify and union to join paths that overlap.
  - Switch to the ![](/images/Workbench_Draft.svg) [Draft Workbench](/Draft_Workbench "Draft Workbench") in [workbench dropdown list](/Std_Workbench "Std Workbench")
  - Import the SVG using **File → Import → select "SVG as geometry"**
  - The result should look similar to this:

    : ![](/images/Svgimport.png)
    : Above: Results of importing 'SVG as geometry'

: : : Paths with holes (letters, the vine in the image above) are imported as 2 separate paths (named along the lines of `Path905` and `Path905001` in the [Tree view](/Tree_view "Tree view")), one of them is the hole and the other one is the outline; we'll deal with this in the next step

- - In order to get the 2D faces, [CAM Vcarve](/CAM_Vcarve "CAM Vcarve") needs:

    - For paths without holes:
      1. Select the path
      2. Choose **Modification → ![](/images/Draft_Upgrade.svg) [Upgrade](/Draft_Upgrade "Draft Upgrade")**
      3. Followed by **Modification → ![](/images/Draft_Downgrade.svg) [Downgrade](/Draft_Downgrade "Draft Downgrade")**
    - For paths with holes:
      1. Select the outer path, then the inner path
      2. Choose **Modification → ![](/images/Draft_Downgrade.svg) [Downgrade](/Draft_Downgrade "Draft Downgrade")** **twice**

    : Some paths will behave differently, so you may need to play with ![](/images/Draft_Upgrade.svg) Upgrade and ![](/images/Draft_Downgrade.svg) Downgrade until you get something named: `Face<number>`
    : The end result should look like this:
    : ![](/images/Svgfaces.png)

### Create the Vcarve operation

- Switch to the ![](/images/Workbench_CAM.svg) [CAM Workbench](/CAM_Workbench "CAM Workbench") in the [workbench dropdown menu](/Std_Workbench "Std Workbench")
- Add a job, use the objects named `Face<number>` (or the ShapeString) as a base, add a v-bit tool controller, set feeds, speeds, etc.
- The operation only supports one object (either a single Face object, or a ShapeString) so for each object:
  - Select **CAM → ![](/images/CAM_Vcarve.svg) Vcarve** from the top menu. This opens the configuration panel.
  - Open the Base Geometry tab and add all faces of the ShapeString, or the face of a single Face object obtained above
  - Press Apply and inspect the generated path; if necessary, adjust operation parameters (Threshold can be set higher in most situations)
  - Press OK to finish

## Options

Empty

## Properties

### Data

Base

- Data**Placement**: -
- Data**Label**: -

Depth

- Data**ClearanceHeight**: -
- Data**FinalDepth**: -
- Data**SafeHeight**: -
- Data**StartDepth**: -
- Data**StepDown**: -

Op Values

- Data**OpFinalDepth**: -
- Data**OpStartDepth**: -
- Data**OpStockZMax**: -
- Data**OpStockZMin**: -
- Data**OpToolDiameter**: -

Path

- Data**Active**: -
- Data**Comment**: -
- Data**CoolantMode**: -
- Data**StartVertex**: -
- Data**ToolController**: -
- Data**UserLabel**: -

#### Hidden

- Data**Base**: -
- Data**BaseObject**: -
- Data**BaseShapes**: -
- Data**ExpressionEngine**: -
- Data**Label2**: -
- Data**Path**: -
- Data**Proxy**: -
- Data**Visibility**: -

### View

Empty

## Scripting

_See also:_ [FreeCAD Scripting Basics](/FreeCAD_Scripting_Basics "FreeCAD Scripting Basics").

Example:

```
#Place code example here.

```

Retrieved from "<http://wiki.freecad.org/index.php?title=CAM_Vcarve/en&oldid=1391204>"
