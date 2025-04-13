---
title: Sketcher Constrângere de blocare
---
|  |
| --- |
| Constrângere de blocare |
| poziția meniului |
| Sketch → Constrângeri desenator → Constrain Block |
| Ateliere |
| [Sketcher](/Sketcher_Workbench/ro "Sketcher Workbench/ro") |
| scurtătură |
| *Nici unul* |
| Prezentat în versiune |
| - |
| A se vedea, de asemenea, |
| [Constrângere fixă](/Sketcher_ConstrainLock/ro "Sketcher ConstrainLock/ro") |
|  |

## Descriere

**Constrain Block** permite blocarea unui element geometric pe loc cu ajutorul unei singure constrângeri. Scopul său principal este de a lucra cu [B-Splines](/Sketcher_CreateBSpline "Sketcher CreateBSpline") ceea ce poate fi dificil de restrâns complet în alt mod.

The block constraint only affects the freely movable parts of an edge. Blocked edges can have other constraints, and applying additional constraints to a blocked edge can modify it.

## Cum se folosește

See also: [Drawing aids](/Sketcher_Workbench#Drawing_aids "Sketcher Workbench").

### [Continue mode](/Sketcher_Workbench#Continue_modes "Sketcher Workbench")

1. Selectează un element de constrângere;
2. Apăsă butonul ![](/images/Sketcher_ConstrainBlock.png) **Constrain Block** .

**Note:** pașii 1 și 2 pot fi inversați.

### Run-once mode

1. Select one or more edges.
2. Invoke the tool as explained above, or with the following additional option:
   * [introduced in 1.0](/Release_notes_1.0 "Release notes 1.0"): Right-click in the [3D view](/3D_view "3D view") and select the **![](/images/Sketcher_ConstrainBlock.svg) Constrain block** option from the context menu.
3. Depending on the selection one or more constraints are added.

## Scripting

```
Sketch.addConstraint(Sketcher.Constraint('Block', Edge))

```

The [Sketcher scripting](/Sketcher_scripting "Sketcher scripting") page explains the values which can be used for `Edge` and contains further examples on how to create constraints from Python scripts.

Retrieved from "<http://wiki.freecad.org/index.php?title=Sketcher_ConstrainBlock/ro&oldid=1416683>"