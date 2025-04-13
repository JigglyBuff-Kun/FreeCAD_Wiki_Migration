---
title: Part Verificare Geometrie
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

## Introducere

L’outil de vérification de la géométrie vous permet de vérifier si vous avez un solide valide.

## Utilizare

Instrumentul este disponibil în bara de lucru Part din meniul Part sau cu butonul din bara de instrumente Booleene.
Selectați o piesă (aveți grijă să selectați întreaga componentă și nu doar o fațetă pentru a verifica dacă există un solid valid), apoi lansați instrumentul.
Veți vedea rezultatele în panoul Task.

Results will be reported in the [Task panel](/Task_panel "Task panel"). If the check produced errors: click in the report on a specific error message and the corresponding geometric object (edge, face, etc.) will be highlighted in the [3D view](/3D_view "3D view").

## Options

### Skip settings page

If ticked, subsequent invocations of the tool skip showing the **Settings** task panel.

### Run BOP check

Dacă doriți să activați verificările extra BOP (BOP = Operații booleene), apoi urmați acești pași:
Tools menu > Edit Parameters > Preferences > Mod > Part > CheckGeometry
apoi, în panoul din dreapta, faceți dublu clic sub valoarea pentru parametrul RunBOPCheck și setați la true, apoi faceți clic pe Save on disk, închideți și reporniți.
Vedeți captura de ecran de mai jos.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_CheckGeometry/ro&oldid=1466732>"