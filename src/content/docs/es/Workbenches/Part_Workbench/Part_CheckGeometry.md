---
title: Pieza ComprobarGeometría
---
|  |
| --- |
| Pieza ComprobarGeometría |
| Ubicación en el Menú |
| Pieza → Comprobar geometría |
| Entornos de trabajo |
| [Pieza](/Part_Workbench/es "Part Workbench/es") |
| Atajo de teclado por defecto |
| *Ninguno* |
| Introducido en versión |
| - |
| Ver también |
| *Ninguno* |
|  |

## Description

## Descripción

La herramienta ![](/images/Part_CheckGeometry.svg) Pieza ComprobarGeometría ejecuta una verificación e informa si la geometría es un sólido válido.

## Utilización

1. Seleccione una pieza (tenga cuidado de seleccionar toda la pieza y no sólo una cara para comprobar que el sólido es válido)
2. Invocar la herramienta ya sea:
   * Haciendo clic en el botón ![](/images/Part_CheckGeometry.svg) disponible en la barra de herramientas de la mesa de trabajo de la pieza.
   * Utilizando la entrada **Pieza → ![](/images/Part_CheckGeometry.svg) Comprobar geometría** en el menú superior.

Resultados se informarán en el [Panel de tareas](/Task_panel/es "Task panel/es").

## Options

### Skip settings page

If ticked, subsequent invocations of the tool skip showing the **Settings** task panel.

### Run BOP check

La función ComprobarGeometría comprueba si la [Representación del límite](https://en.wikipedia.org/wiki/Boundary_representation) (BRep o B-rep) del modelo es válida. Adicionalmente a esta comprobación de BRep, es posible tener una comprobación adicional de BOP (BOP= Boolean OPerations).

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Part_CheckGeometry/es&oldid=1466749>"