---
title: Sketcher constrângere punct pe obiect
---
|  |
| --- |
| Sketcher ConstrainPointOnObject |
| Menu location |
| Sketch → Sketcher constraints → Constrain point onto object |
| Workbenches |
| [Sketcher](/Sketcher_Workbench "Sketcher Workbench") |
| Default shortcut |
| Shift+O |
| Introduced in version |
| - |
| See also |
| [Constrain Coincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident") |
|  |

## Description

## Descriere

Aplică un punct pe un alt obiect, cum ar fi o linie, un arc sau o axă de schiță.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): This tool is replaced by the [Sketcher ConstrainCoincidentUnified](/Sketcher_ConstrainCoincidentUnified "Sketcher ConstrainCoincidentUnified") tool if the **Unify Coincident and PointOnObject** option is selected in the [preferences](/Sketcher_Preferences#General "Sketcher Preferences").

## Cum se folosește

1. Selectați punctul pe care doriți să îl aplicați pe o linie/arc/etc. (Odată selectat punctul devine verde).
2. Selectați linia pe care doriți să o atașați la punctul pe care tocmai l-ați selectat(Odată selecatată linia devine verde).
3. Apăsați butonul ![](/images/Sketcher_ConstrainPointOnObject.png) **Constrain point unto object**.

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_ConstrainPointOnObject.svg) [Constrain point on object](/Sketcher_ConstrainPointOnObject "Sketcher ConstrainPointOnObject") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainPointOnObject.svg) Constrain point on object** option from the menu.
   * Use the keyboard shortcut: O.
3. The cursor changes to a cross with the tool icon.
4. Select a single point and a single edge (in any order).
5. A constraint is added.
6. Optionally keep creating constraints.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Do one of the following:
   * Select a single point and a single edge (in any order).
   * Select several points and a single edge (idem).
   * Select a single point and several edges (idem).
2. Invoke the tool as explained above.
3. Depending on the selection one or more constraints are added.

## Scripting

### Script

Constrângerea poate fi creată din macrocomenzi și din consola Python folosind următoarea comandă:

`Sketch.addConstraint(Sketcher.Constraint('PointOnObject',LineMoving,PointOfLineMoving,LineFixed))`

* Sketch este un obiect sketch
* LineMoving este numărul care desemnează linia, care conține punctul care trebuie mutat pe LineFixed (Linia care este fixă)
* PointOfLineMoving este numărul vârfului liniei LineMoving, care trebuie mutat pe LineFixed
* LinedFixed este numărul liniei care trebuie aplicată pe punctul PointOfLineMoving

Pentru a identifica numărul care are indică liniile și punctele? Vă rog să vă referinți la parte de script a [Sketcher ConstrainCoincident](/Sketcher_ConstrainCoincident "Sketcher ConstrainCoincident").

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainPointOnObject/ro&oldid=1404885>"