---
title: Coquizador RestringirSimétrico
---
|  |
| --- |
| Restricción Simetría |
| Ubicación en el Menú |
| Croquis → Restricciones del Croquizador → Restricción de Simetría |
| Entornos de trabajo |
| [Croquizador](/Sketcher_Workbench/es "Sketcher Workbench/es") |
| Atajo de teclado por defecto |
| S |
| Introducido en versión |
| - |
| Ver también |
| [Restricción Paralela](/Sketcher_ConstrainParallel/es "Sketcher ConstrainParallel/es") |
|  |

## Descripción

#### Descripción

La Restricción de Simetría restringe dos puntos seleccionados a ser simétricos con respecto a un eje dado. Los dos puntos seleccionados se restringen para situarse sobre la perpendicular al eje de simetría y situados a la misma distancia de este.

#### Funcionamiento

![](/images/SymmetricConstraint1.png)

Selecciona dos puntos y una línea en el croquis. Los puntos y la línea seleccionados se volverán de color verde oscuro.

![](/images/SymmetricConstraint2.png)

Pulsa sobre el icono ![](/images/Sketcher_ConstrainSymmetric.png) en la barra de herramientas del Croquizador o selecciona la Restricción de Simetría en el submenú de Restricciones del entorno del Croquizador (o del entorno de Diseño de Piezas).
Esto aplicará la restricción a los elementos seleccionados.

![](/images/SymmetricConstraint3.png)

Esta es una restricción geométrica y no tiene parámetros editables.

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Make sure there is no selection.
2. There are several ways to invoke the tool:
   * Press the ![](/images/Sketcher_ConstrainSymmetric.svg) [Constrain symmetric](/Sketcher_ConstrainSymmetric "Sketcher ConstrainSymmetric") button.
   * Select the **Sketch → Sketcher constraints → ![](/images/Sketcher_ConstrainSymmetric.svg) Constrain symmetric** option from the menu.
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **Constrain → ![](/images/Sketcher_ConstrainSymmetric.svg) Constrain symmetric** option from the context menu.
   * Use the keyboard shortcut: S.
3. The cursor changes to a cross with the tool icon.
4. Do one of the following:
   * Select two points and a symmetry point (in that order).
   * Select two points and a symmetry line (idem).
   * Select a point, a symmetry line and another point (idem).
   * Select a line and a symmetry point (idem).
5. A constraint is added.
6. Optionally keep creating constraints.
7. To finish, right-click or press Esc, or start another geometry or constraint creation tool.

### Run-once mode

1. Do one of the following:
   * Select two points and a symmetry point (in that order).
   * Select two points and a symmetry line (in any order).
   * Select a line and a symmetry point (idem).
2. Invoke the tool as explained above, or with the following additional option:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainSymmetric.svg) Constrain symmetric** option from the context menu.
3. A constraint is added.

## Notes

* The arrows of this constraint show the color of the dimensional constraints.

## Scripting

Two points and a symmetry line:

```
Sketch.addConstraint(Sketcher.Constraint('Symmetric', Line1, PointOfLine1, Line2, PointOfLine2, SymmetryLine))

```

Two points and a symmetry point:

```
Sketch.addConstraint(Sketcher.Constraint('Symmetric', Line1, PointOfLine1, Line2, PointOfLine2, LineS, PointOfLineS))

```

A line and a symmetry point (In the GUI one can select a line and a point, but it uses internally the same form as above, with the two extremities of the same line):

```
Sketch.addConstraint(Sketcher.Constraint('Symmetric', Line, 1, Line, 2, LineS, PointOfLineS))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Line1`, `Line2`, `LineS`, `Line`, `PointOfLine1`, `PointOfLine2` and `PointOfLineS`, and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainSymmetric/es&oldid=1413834>"