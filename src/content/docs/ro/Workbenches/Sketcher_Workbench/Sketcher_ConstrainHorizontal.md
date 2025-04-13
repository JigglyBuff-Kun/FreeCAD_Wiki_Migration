---
title: Sketcher Constrângere Orizontală
---
|  |
| --- |
| Constraint Horizontal |
| poziția meniului |
| Sketch → Sketcher constraints → Constrain horizontally |
| Ateliere |
| [Sketcher](/Sketcher_Workbench/ro "Sketcher Workbench/ro") |
| scurtătură |
| H |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Constraint Vertical](/Sketcher_ConstrainVertical/ro "Sketcher ConstrainVertical/ro") |
|  |

## Descriere

**Constrângerea orizontală** forțează o linie din schiță să fie paralelă cu axa orizontală a schiței.

[introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): In most cases it is advisable to use the combined [Sketcher ConstrainHorVer](/Sketcher_ConstrainHorVer "Sketcher ConstrainHorVer") tool instead.

## Cum se folosește

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

![](/images/HorizontalConstraint1.png)

Selectați linia făcând click pe ea.

![](/images/HorizontalConstraint2.png)

Linia își schimbă culaorea în verde închis.

![](/images/HorizontalConstraint3.png)

Apply the Horizontal Constraint by clicking on the Horizontal Constraint icon ![](/images/Constraint_Horizontal.png) în bara de instrumente Sketcher Constructors sau selectând elementul de meniu Sketcher Constructors din Atelierul Sketcher (sau elementul de design al piesei de proiectare a bancului de lucru Part Design). Linia selectată este constrânsă să fie paralelă cu axa orizontală a schiței.

![](/images/HorizontalConstraint4.png)

Multiple linii pot fi selectate,

![](/images/HorizontalConstraint5.png)

și apoi aplicarea constrângerii așa cum este descrisă mai sus, ele sunt constrânse să fie paralele cu axa orizontală.

### Run-once mode

1. Do one of the following:
   * Select two or more points.
   * Select one or more lines. Points can be included in the selection, but will be ignored.
2. Invoke the tool as explained above, or with the following additional option:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainHorizontal.svg) Constrain horizontal** option from the context menu.
3. Depending on the selection one or more constraints are added.

## Scripting

```
Sketch.addConstraint(Sketcher.Constraint('Horizontal', Line))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Line` and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainHorizontal/ro&oldid=1404931>"