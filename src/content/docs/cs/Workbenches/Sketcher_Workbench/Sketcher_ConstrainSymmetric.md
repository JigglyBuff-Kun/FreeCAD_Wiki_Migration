---
title: Vazba souměrnosti
---
|  |
| --- |
| Constraint Symmetric |
| Umístění Menu |
| Sketch → Sketcher constraints → Constrain symmetrical |
| Pracovní stoly |
| [Náčrt](/Sketcher_Workbench/cs "Sketcher Workbench/cs"), [Návrh dílu](/PartDesign_Workbench/cs "PartDesign Workbench/cs") |
| Výchozí zástupce |
| *Nikdo* |
| Představen ve verzi |
| - |
| Viz také |
| [Vazba rovnoběžnosti](/Sketcher_ConstrainParallel/cs "Sketcher ConstrainParallel/cs") |
|  |

## Description

#### Popis

Vazba souměrnosti zajistí, že dva vybrané body jsou souměrné podle zadané přímky, např. oba vybrané body budou ležet na kolmici k přímce procházející oběma body a budou stejně vzdálené od přímky. Případně oba body mohou být souměrně uloženy ke třetímu bodu.

#### Postup

![](/images/SymmetricConstraint1.png)  
  
Vyberte v náčrtu dva body (vrcholy) a přímku. Vybrané body a přímka změní barvu na tmavězelenou.  
  
![](/images/SymmetricConstraint2.png)  
  
Klikněte na ikonu Vazba souměrnosti ![](/images/Sketcher_ConstrainSymmetric.png) v nástrojovém pruhu Náčrtu nebo vyberte položku Vazba souměrnosti ze submenu Vazba souměrnosti z menu Náčrtu (nebo Návrh dílu).
Tím aplikujete vazbu na vybrané položky.  
  
![](/images/SymmetricConstraint3.png)  
  
Toto je geometrické vazba a nemá žádné parametry.

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

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainSymmetric/cs&oldid=1413835>"