---
title: Verificar geometria
---
|  |
| --- |
| Part CheckGeometry‏‎ |
| Menu location |
| Part → Check geometry |
| Workbenches |
| [Part](/Part_Workbench "Part Workbench") |
| Default shortcut |
| *None* |
| Introduced in version |
| - |
| See also |
| *None* |
|  |

## Description

The ![](/images/Part_CheckGeometry.svg) [Part CheckGeometry](/Part_CheckGeometry "Part CheckGeometry") tool runs a verification and reports if geometry is a valid solid. The tool checks if the [Boundary representation](https://en.wikipedia.org/wiki/Boundary_representation) (BRep or [B-rep](/Glossary#B "Glossary")) of the model is valid.

## Usage

1. Select a part (beware to select the whole part and not just a face to check for valid solid)
2. Invoke the tool by either:
   * Clicking on the ![](/images/Part_CheckGeometry.svg) [CheckGeometry](/Part_CheckGeometry "Part CheckGeometry") button available in the Part workbench toolbar.
   * Using the **Part → ![](/images/Part_CheckGeometry.svg) Check geometry** entry from the top menu.
3. The **Settings** task panel opens, unless **Skip settings page** is enabled. See [Options](#Options) for more information. Click Run check.

Results will be reported in the [Task panel](/Task_panel "Task panel"). If the check produced errors: click in the report on a specific error message and the corresponding geometric object (edge, face, etc.) will be highlighted in the [3D view](/3D_view "3D view").

## Options

### Skip settings page

If ticked, subsequent invocations of the tool skip showing the **Settings** task panel.

### Run BOP check

If ticked, additionally a Boolean OPerations (BOP) check is performed.

### Log errors

If ticked, any errors found are also logged in the [report view](/Report_view "Report view").

## Shape Content

In addition to detecting potential geometry errors, this tool shows a range of properties regarding the selected object:

* Checked object
* Shape type
* Number of geometric entities: vertices, edges, wires, faces, shells, solids, compsolids, compounds, total shapes
* Geometric and mass properties:
  + Area
  + Volume
  + Mass
  + Length
  + Center of mass
  + Orientation
  + Symmetry axis
  + Symmetry point
  + Moments
  + First axis of inertia
  + Second axis of inertia
  + Third axis of inertia
  + Radius of gyration
  + Global placement

## Notes

* [App Link](/App_Link "App Link") objects linked to the appropriate object types and [App Part](/App_Part "App Part") containers with the appropriate visible objects inside can also be checked using this tool. For [App Links](/App_Link "App Link") the shape of the linked object is checked. For [App Part](/App_Part "App Part") containers the visible objects within are checked as compounds. [introduced in 0.20](/Release_notes_0.20 "Release notes 0.20")
* FreeCAD has no methods to automatically repair geometry. If faults are detected the steps involved to create the model need to be examined and fixed manually.

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_CheckGeometry/pt-br&oldid=1466736>"